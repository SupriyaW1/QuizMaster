import { useEffect, useState } from "react";

const StartQuiz = () => {
     
    const [quizData, setQuizData] = useState([]);   
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [remainingTime, setRemainingTime] = useState(30 * 60); 
    const [examStarted, setExamStarted] = useState(true);
   
    const exam= JSON.parse(localStorage.getItem("current_exam"));
    console.log(exam);
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
    fetch(`http://localhost:8080/viewQuizBy?cat_id=${exam.cat_id.cat_id}&subject_id=${exam.subject_id.subject_id}`)
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



const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
};


const handleSaveQuestion = (index) => {
   
};

const handleClearQuestion = (index) => {
    
};

const handleMarkForReview = (index) => {
    
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

return(

    <div className="container">
      {examStarted && (
        <div>
          <p className="mt-3">Remaining Time: {formatTime(remainingTime)}</p>
          {quizData && quizData.map((question, index) => (
            <div key={question.id} className="question-container mt-3">
                <table className="options-table">
                <tbody>
                    <tr><td>
                     <p className="question">{`Question ${index + 1}: ${question.question_text}`}</p>
                        </td></tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="radio"
                          id={`option_${index}_1`}
                          name={`question_${index}`}
                          value={question.option1}
                          className="form-check-input"
                          checked={selectedOptions[index] === 0}
                          onChange={() => handleOptionSelect(index, 0)}
                          style={{ backgroundColor: '#808080', borderColor: '#808080' }}
                        />
                       <td> <label htmlFor={`option_${index}_1`} className="form-check-label option-label">A. {question.option1}</label></td>
                      </div>
                    </td>
                    <td>
                      <div className="form-check">
                        <input
                          type="radio"
                          id={`option_${index}_2`}
                          name={`question_${index}`}
                          value={question.option2}
                          className="form-check-input"
                          checked={selectedOptions[index] === 1}
                          onChange={() => handleOptionSelect(index, 1)}
                          style={{ backgroundColor: '#808080', borderColor: '#808080' }}
                        />
                        <td><label htmlFor={`option_${index}_2`} className="form-check-label option-label">B. {question.option2}</label></td>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="radio"
                          id={`option_${index}_3`}
                          name={`question_${index}`}
                          value={question.option3}
                          className="form-check-input"
                          checked={selectedOptions[index] === 2}
                          onChange={() => handleOptionSelect(index, 2)}
                          style={{ backgroundColor: '#808080', borderColor: '#808080' }}
                        />
                       <td> <label htmlFor={`option_${index}_3`} className="form-check-label option-label">C. {question.option3}</label></td>
                      </div>
                    </td>
                    <td>
                      <div className="form-check">
                        <input
                          type="radio"
                          id={`option_${index}_4`}
                          name={`question_${index}`}
                          value={question.option4}
                          className="form-check-input"
                          checked={selectedOptions[index] === 3}
                          onChange={() => handleOptionSelect(index, 3)}
                          style={{ backgroundColor: '#808080', borderColor: '#808080' }}
                        />
                       <td><label htmlFor={`option_${index}_4`} className="form-check-label option-label">D. {question.option4}</label></td>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="button-group mt-3">
                <button className="btn btn-primary" onClick={() => handleSaveQuestion(index)}>Save</button>
                <button className="btn btn-secondary" onClick={() => handleClearQuestion(index)}>Clear</button>
                <button className="btn btn-warning" onClick={() => handleMarkForReview(index)}>Mark for Review</button>
              </div>
            </div>
          ))}
          <div className="row mt-3">
            <div className="col">
              <button className="btn btn-success" onClick={handleSubmitQuiz}>Submit Quiz</button>
            </div>
          </div>
        </div>
      )}
    </div>
    
);
};

export default StartQuiz;