import React, { useState, useEffect } from "react";

function ViewQuiz() {
  const [questions, setquestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/viewQuestions")
      .then((response) => response.json())
      .then((data) => setquestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div>
      <h2>Quiz</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Answer</th>
            <th>Explaination</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((questions, index) => (
            <tr key={index}>
              <td>{questions.cat_id.cat_name}</td>
              <td>{questions.question_text}</td>
              <td>{questions.option1}</td>
              <td>{questions.option2}</td>
              <td>{questions.option3}</td>
              <td>{questions.option4}</td>
              <td>{questions.answer}</td>
              <td>{questions.explaination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewQuiz;









