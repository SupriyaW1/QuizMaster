import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";





const StartQuiz = () => {

  const [selectedAnswers, setSelectedAnswers] = useState([]);
     
    const location = useLocation();
    const navigate =useNavigate();
    const [quizData, setQuizData] = useState([]);
    //const exam = location.state?.examStarted;
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [remainingTime, setRemainingTime] = useState(30 * 60); 
    const [examStarted, setExamStarted] = useState(true);
   
    const exam= JSON.parse(localStorage.getItem("current_exam"));
  
useEffect(() => {
    if (examStarted) {
      fetchQuizData();
        const timer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }
}, [examStarted]);

//console.log(cat_id);
//console.log(sid);

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

//console.log(quizData.qid.qid);

const saveDataToDatabase = () => {
  const data = {
    // student_answer: optionIndex,
     exam_id:exam.exam_id.exam_id,
     qid:exam.qid.qid,
     sid:exam.sid.sid   
  };
  //console.log(data)
  fetch(`http://localhost:8080/saveStudentAnswer`,
  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then((res)=>{
      if(res.status===200){
      navigate("/studentHome")
      }
      else if(res.status===400){
         return res.json().then((data) => {
                   
          console.error("Validation error:", data);
          });
      }
  })
  .catch((error) => {
      console.error("There was a problem with the fetch operation:", error.message);
  });
};



const handleOptionSelect = (option, question) => {
  let existingAnswers = JSON.parse(localStorage.getItem("questionans")) || [];
  if(existingAnswers === null)
    existingAnswers = [];
  existingAnswers.push({qid: question, answer: option});
  localStorage.setItem("questionans",JSON.stringify(existingAnswers))

  

  
  // Append the new question-answer pair
  // const updatedAnswers = [option,question];

  // Store the updated array back into localStorage
  // localStorage.setItem("questionans", JSON.stringify(updatedAnswers));
  // localStorage.setItem("questionans", JSON.stringify({ option, question })); ******************
  // let answers = JSON.parse(localStorage.getItem("answers"));
  //  if(answers === null)
  //       answers = [];
  //  answers.push({qid: qid, answer: index});
  //  localStorage.setItem("answers",JSON.stringify(answers))
};

// const handleOptionSelect = (questionIndex, optionIndex) => {
//     const updatedSelectedOptions = [...selectedOptions];
//     updatedSelectedOptions[questionIndex] = optionIndex;
//     setSelectedOptions(updatedSelectedOptions);
// };


const handleSaveQuestion = (qid,index) => {
  // alert(qid,index)
  //  let answers = JSON.parse(localStorage.getItem("answers"));
  //  if(answers === null)
  //       answers = [];
  //  answers.push({qid: qid, answer: index});
  //  localStorage.setItem("answers",JSON.stringify(answers))
  const savedAnswers = [...selectedAnswers];
        localStorage.setItem("saved_answers", JSON.stringify(savedAnswers));
};

const handleClearQuestion = (index) => {
  const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[index] = { ...updatedSelectedAnswers[index], selectedOption: null };
        setSelectedAnswers(updatedSelectedAnswers);

        // Remove stored answer from local storage
        localStorage.removeItem(`selected_answer_${index}`);
    
};

const handleMarkForReview = (index) => {
    
};


const handleSubmitQuiz = () => {
    console.log('Submitting quiz...');
    if (window.confirm('Are you sure you want to submit the quiz?')) {
        saveDataToDatabase();
        console.log('Quiz submitted with answers:', selectedOptions);
    }
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

return(
  <table className="options-table">
  <tbody>
<div className="container">
{examStarted && (
<tr><td>
<div>
<p className="mt-3">Remaining Time: {formatTime(remainingTime)}</p>
{quizData && quizData.map((question, index) => (

<div key={question.id} className="question-container mt-3">
  
      <tr><td>
       <p className="question">{`Question ${index + 1}: ${question.question_text}`}</p>
          </td></tr>
    <tr>
      <td>
        <div className="form-check">
          <input
            type="radio"
            id={`option1`}
            name={`question`}
            value={1}
            className="form-check-input"
            checked={selectedOptions[index] === 1}
            onChange={() => handleOptionSelect(1, question.qid)}
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          /> {question.option1}
         <td> <label htmlFor={`option1`} className="form-check-label option-label">A. {question.option1}</label></td>
        </div>
      </td>
      <td>
        <div className="form-check">
          <input
            type="radio"
            id={`option2`}
            name={`question`}
            value={question.option2}
            className="form-check-input"
            checked={selectedOptions[index] === 2}
            onChange={() => handleOptionSelect(2, question.qid)}
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          /> {question.option2}
          <td><label htmlFor={`option2`} className="form-check-label option-label">B. {question.option2}</label></td>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="form-check">
          <input
            type="radio"
            id={`option3`}
            name={`question`}
            value={question.option3}
            className="form-check-input"
            checked={selectedOptions[index] === 3}
            onChange={() => handleOptionSelect(3, question.qid)}
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          /> {question.option3}
         <td> <label htmlFor={`option3`} className="form-check-label option-label">C. {question.option3}</label></td>
        </div>
      </td>
      <td>
        <div className="form-check">
          <input
            type="radio"
            id={`option4`}
            name={`question`}
            value={question.option4}
            className="form-check-input"
            checked={selectedOptions[index] === 4}
            onChange={() => handleOptionSelect(4, question.qid)}
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          /> 
         <td><label htmlFor={`option4`} className="form-check-label option-label">D. {question.option4}</label></td>
        </div>
      </td>
    </tr>
  
<div className="button-group mt-3">
  <button className="btn btn-primary" onClick={() => handleSaveQuestion(question.id,index)}>Save</button>
  <button className="btn btn-secondary" onClick={() => handleClearQuestion(index)}>Clear</button>
  <button className="btn btn-warning" onClick={() => handleMarkForReview(index)}>Mark for Review</button>
</div>
</div>

))}
<p> {selectedOptions}</p>
<div className="row mt-3">
<div className="col">
<button className="btn btn-success" onClick={handleSubmitQuiz}>Submit Quiz</button>
</div>
</div>
</div>
</td>
</tr>
)}
</div>
</tbody>
</table>

    // <div className="container">
    //   {examStarted && (
    //     <div>
    //       <p className="mt-3">Remaining Time: {formatTime(remainingTime)}</p>
    //       {quizData && quizData.map((question, index) => (
    //         <div key={question.id} className="question-container mt-3">
    //             <table className="options-table">
    //             <tbody>
    //                 <tr><td>
    //                  <p className="question">{`Question ${index + 1}: ${question.question_text}`}</p>
    //                     </td></tr>
    //               <tr>
    //                 <td>
    //                   <div className="form-check">
    //                     <input
    //                       type="radio"
    //                       id={`option_${index}_1`}
    //                       name={`question_${index}`}
    //                       value={question.option1}
    //                       className="form-check-input"
    //                       checked={selectedOptions[index] === 0}
    //                       onChange={() => handleOptionSelect(index, 0)}
    //                       style={{ backgroundColor: '#808080', borderColor: '#808080' }}
    //                     /> {question.option1}
    //                    <td> <label htmlFor={`option_${index}_1`} className="form-check-label option-label">A. {question.option1}</label></td>
    //                   </div>
    //                 </td>
    //                 <td>
    //                   <div className="form-check">
    //                     <input
    //                       type="radio"
    //                       id={`option_${index}_2`}
    //                       name={`question_${index}`}
    //                       value={question.option2}
    //                       className="form-check-input"
    //                       checked={selectedOptions[index] === 1}
    //                       onChange={() => handleOptionSelect(index, 1)}
    //                       style={{ backgroundColor: '#808080', borderColor: '#808080' }}
    //                     /> {question.option2}
    //                     <td><label htmlFor={`option_${index}_2`} className="form-check-label option-label">B. {question.option2}</label></td>
    //                   </div>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <div className="form-check">
    //                     <input
    //                       type="radio"
    //                       id={`option_${index}_3`}
    //                       name={`question_${index}`}
    //                       value={question.option3}
    //                       className="form-check-input"
    //                       checked={selectedOptions[index] === 2}
    //                       onChange={() => handleOptionSelect(index, 2)}
    //                       style={{ backgroundColor: '#808080', borderColor: '#808080' }}
    //                     /> {question.option3}
    //                    <td> <label htmlFor={`option_${index}_3`} className="form-check-label option-label">C. {question.option3}</label></td>
    //                   </div>
    //                 </td>
    //                 <td>
    //                   <div className="form-check">
    //                     <input
    //                       type="radio"
    //                       id={`option_${index}_4`}
    //                       name={`question_${index}`}
    //                       value={question.option4}
    //                       className="form-check-input"
    //                       checked={selectedOptions[index] === 3}
    //                       onChange={() => handleOptionSelect(index, 3)}
    //                       style={{ backgroundColor: '#808080', borderColor: '#808080' }}
    //                     /> 
    //                    <td><label htmlFor={`option_${index}_4`} className="form-check-label option-label">D. {question.option4}</label></td>
    //                   </div>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //           <div className="button-group mt-3">
    //             <button className="btn btn-primary" onClick={() => handleSaveQuestion(question.id,index)}>Save</button>
    //             <button className="btn btn-secondary" onClick={() => handleClearQuestion(index)}>Clear</button>
    //             <button className="btn btn-warning" onClick={() => handleMarkForReview(index)}>Mark for Review</button>
    //           </div>
    //         </div>
    //       ))}
    //       <p> {selectedOptions}</p>
    //       <div className="row mt-3">
    //         <div className="col">
    //           <button className="btn btn-success" onClick={handleSubmitQuiz}>Submit Quiz</button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    // <div>
    // {examStarted && (
    //     <div>
    //         <p>Remaining Time: {formatTime(remainingTime)}</p>
    //         {quizData && quizData.map((question, index) => (
    //             <div key={question.id}>
    //                 <p>{question.question_text}</p>
    //                 <div>
    //                     <input
    //                         type="radio"
    //                         id={`option_${index}_1`}
    //                         name={`question_${index}`}
    //                         value={question.option1}
    //                         checked={selectedOptions[index] === 0} 
    //                         onChange={() => handleOptionSelect(index, 0)}
    //                     />
    //                     <label htmlFor={`option_${index}_1`}>{question.option1}</label>
    //                 </div>
    //                 <div>
    //                     <input
    //                         type="radio"
    //                         id={`option_${index}_2`}
    //                         name={`question_${index}`}
    //                         value={question.option2}
    //                         checked={selectedOptions[index] === 1} 
    //                         onChange={() => handleOptionSelect(index, 1)}
    //                     />
    //                     <label htmlFor={`option_${index}_2`}>{question.option2}</label>
    //                 </div>
    //                 <div>
    //                     <input
    //                         type="radio"
    //                         id={`option_${index}_3`}
    //                         name={`question_${index}`}
    //                         value={question.option3}
    //                         checked={selectedOptions[index] === 2}
    //                         onChange={() => handleOptionSelect(index, 2)}
    //                     />
    //                     <label htmlFor={`option_${index}_3`}>{question.option3}</label>
    //                 </div>
    //                 <div>
    //                     <input
    //                         type="radio"
    //                         id={`option_${index}_4`}
    //                         name={`question_${index}`}
    //                         value={question.option4}
    //                         checked={selectedOptions[index] === 3} 
    //                         onChange={() => handleOptionSelect(index, 3)}
    //                     />
    //                     <label htmlFor={`option_${index}_4`}>{question.option4}</label>
    //                 </div>
    
    //                 <div>
    //             <button onClick={() => handleSaveQuestion(index)}>Save</button>
    //             <button onClick={() => handleClearQuestion(index)}>Clear</button>
    //             <button onClick={() => handleMarkForReview(index)}>Mark for Review</button>
    //         </div>
    //             </div>
    //         ))}
    //         <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    //     </div>
    // )}
    // </div>
);
};

export default StartQuiz;