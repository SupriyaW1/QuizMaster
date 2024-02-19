import React, { useState, useEffect } from 'react';

const AttemptQuiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [remainingTime, setRemainingTime] = useState(30 * 60); 
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [examStarted, setExamStarted] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchSubjects(selectedCategory);
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (examStarted) {
            fetchQuizData();
            const timer = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [examStarted]);

    const fetchQuizData = () => {
        fetch(`http://localhost:8080/viewQuiz?category=${selectedCategory}&subject=${selectedSubject}`)
        .then(resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error("Server error");
        })
        .then(data => {
            setQuizData(data);
            setSelectedOptions(Array(data.length).fill(null));
        })
        .catch(error => {
            console.error('Error fetching quiz questions:', error);
        });
    };

    const fetchCategories = () => {
        fetch('http://localhost:8080/allCategories')
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Failed to fetch categories');
        })
        .then(data => {
            setCategories(data);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
    };

    const fetchSubjects = (category) => {
        fetch(`http://localhost:8080/allSubjects`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Failed to fetch subjects');
        })
        .then(data => {
            setSubjects(data);
        })
        .catch(error => {
            console.error('Error fetching subjects:', error);
        });
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleStartExam = () => {
        setExamStarted(true);
    };

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleSubmitQuiz = () => {
        console.log('Submitting quiz...');
        if (window.confirm('Are you sure you want to submit the quiz?')) {
            console.log('Quiz submitted with answers:', selectedOptions);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h2>Attempt Quiz</h2>
            <div>
                <label htmlFor="category">Select Category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">--Select Category--</option>
                    {categories && categories.map(category => (
                        <option key={category.id} value={category.id}>{category.cat_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="subject">Select Subject:</label>
                <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
                    <option value="">--Select Subject--</option>
                    {subjects && subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.subject_name}</option>
                    ))}
                </select>
            </div>
            {!examStarted && (
                <button onClick={handleStartExam}>Start Exam</button>
            )}
            {examStarted && (
    <div>
        <p>Remaining Time: {formatTime(remainingTime)}</p>
        {quizData && quizData.map((question, index) => (
            <div key={question.id}>
                <p>{question.question_text}</p>
                <div>
                    <input
                        type="radio"
                        id={`option_${index}_1`}
                        name={`question_${index}`}
                        value={question.option1}
                        checked={selectedOptions[index] === 0} // Assuming option1 is index 0
                        onChange={() => handleOptionSelect(index, 0)}
                    />
                    <label htmlFor={`option_${index}_1`}>{question.option1}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`option_${index}_2`}
                        name={`question_${index}`}
                        value={question.option2}
                        checked={selectedOptions[index] === 1} // Assuming option2 is index 1
                        onChange={() => handleOptionSelect(index, 1)}
                    />
                    <label htmlFor={`option_${index}_2`}>{question.option2}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`option_${index}_3`}
                        name={`question_${index}`}
                        value={question.option3}
                        checked={selectedOptions[index] === 2} // Assuming option3 is index 2
                        onChange={() => handleOptionSelect(index, 2)}
                    />
                    <label htmlFor={`option_${index}_3`}>{question.option3}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`option_${index}_4`}
                        name={`question_${index}`}
                        value={question.option4}
                        checked={selectedOptions[index] === 3} // Assuming option4 is index 3
                        onChange={() => handleOptionSelect(index, 3)}
                    />
                    <label htmlFor={`option_${index}_4`}>{question.option4}</label>
                </div>
            </div>
        ))}
        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
)}
        </div>
    );
};

export default AttemptQuiz;
