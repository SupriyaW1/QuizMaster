import React, { useReducer } from 'react';

const initialState = {
  subject: '',
  category: '',
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  answer: '',
  explanation: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function QuizzesandExplanations() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(state);
    dispatch({ type: 'RESET' }); // Reset form fields after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Add Question</h2>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject:</label>
              <select className="form-select" id="subject" name="subject" value={state.subject} onChange={handleChange}>
                <option value="">Select Subject</option>
                {/* Add options for subjects */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category:</label>
              <select className="form-select" id="category" name="category" value={state.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="question" className="form-label">Question:</label>
              <textarea className="form-control" id="question" name="question" value={state.question} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="option1" className="form-label">Option 1:</label>
              <input type="text" className="form-control" id="option1" name="option1" value={state.option1} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="option2" className="form-label">Option 2:</label>
              <input type="text" className="form-control" id="option2" name="option2" value={state.option2} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="option3" className="form-label">Option 3:</label>
              <input type="text" className="form-control" id="option3" name="option3" value={state.option3} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="option4" className="form-label">Option 4:</label>
              <input type="text" className="form-control" id="option4" name="option4" value={state.option4} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="answer" className="form-label">Answer:</label>
              <input type="text" className="form-control" id="answer" name="answer" value={state.answer} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="explanation" className="form-label">Explanation:</label>
              <textarea className="form-control" id="explanation" name="explanation" value={state.explanation} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default QuizzesandExplanations;
