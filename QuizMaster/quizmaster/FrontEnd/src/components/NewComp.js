
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
                          name={`question}`}
                          value={question.option1}
                          className="form-check-input"
                          checked={selectedOptions[index] === 0}
                          onChange={() => handleOptionSelect(index, 0)}
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
                          checked={selectedOptions[index] === 1}
                          onChange={() => handleOptionSelect(index, 1)}
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
                          checked={selectedOptions[index] === 2}
                          onChange={() => handleOptionSelect(index, 2)}
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
                          checked={selectedOptions[index] === 3}
                          onChange={() => handleOptionSelect(index, 3)}
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