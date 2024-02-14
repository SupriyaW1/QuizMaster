import React, { useReducer } from 'react';

const initialFormData = {
  firstName: '',
  lastName: '',
  qualification: '',
  subject: '',
  contact: '',
  email: '',
  pwd: '',
  uname: ''
};

const initialErrors = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET_FORM':
      return initialFormData;
    default:
      return state;
  }
};

const ExpertRegistration = () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialFormData,
    errors: initialErrors
  });

  const { errors } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'contact') {
      if (!/^\d*$/.test(value)) {
        error = 'Contact must contain only digits.';
      } else if (value.length > 10) {
        error = 'Contact must not exceed 10 digits.';
      }
    } else if (name === 'uname') {
      if (!/^[a-zA-Z]*$/.test(value)) {
        error = 'Username must contain only alphabetic characters.';
      }
    }
  
    // If there's an error, don't update the form data
    if (error === '') {
      dispatch({ type: 'SET_FIELD', field: name, value });
    }

    dispatch({ type: 'SET_ERRORS', errors: { ...errors, [name]: error } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    for (const key in state) {
      if (state[key].trim() === '' && key !== 'errors') {
        validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors });
    } else {
      console.log("Form submitted:", state);
      dispatch({ type: 'RESET_FORM' });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4"><b><u>Expert Registration</u></b></h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                  <label htmlFor="fname" className="col-sm-4 col-form-label text-end">First Name:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className={`form-control ${errors.fname && 'is-invalid'}`}
                      value={state.fname}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                    />
                    {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="lname" className="col-sm-4 col-form-label text-end">Last Name:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className={`form-control ${errors.lname && 'is-invalid'}`}
                      value={state.lname}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                    />
                    {errors.lname && <div className="invalid-feedback">{errors.lname}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="qualification" className="col-sm-4 col-form-label text-end">Qualification:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      className={`form-control ${errors.qualification && 'is-invalid'}`}
                      value={state.qualification}
                      onChange={handleChange}
                      placeholder="Enter Qualification"
                    />
                    {errors.qualification && <div className="invalid-feedback">{errors.qualification}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="subject" className="col-sm-4 col-form-label text-end">Subject:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`form-control ${errors.subject && 'is-invalid'}`}
                      value={state.subject}
                      onChange={handleChange}
                      placeholder="Enter Subject"
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="contact" className="col-sm-4 col-form-label text-end">Contact:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className={`form-control ${errors.contact && 'is-invalid'}`}
                      value={state.contact}
                      onChange={handleChange}
                      placeholder="Enter Contact"
                      maxLength={10}
                    />
                    {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="email" className="col-sm-4 col-form-label text-end">Email:</label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="uname" className="col-sm-4 col-form-label text-end">Username:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="uname"
                      name="uname"
                      className={`form-control ${errors.uname && 'is-invalid'}`}
                      value={state.uname}
                      onChange={handleChange}
                      placeholder="Enter Username"
                    />
                    {errors.uname && <div className="invalid-feedback">{errors.uname}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="pwd" className="col-sm-4 col-form-label text-end">Password:</label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      id="pwd"
                      name="pwd"
                      className={`form-control ${errors.pwd && 'is-invalid'}`}
                      value={state.pwd}
                      onChange={handleChange}
                      placeholder="Enter Password"
                    />
                    {errors.pwd && <div className="invalid-feedback">{errors.pwd}</div>}
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Add Expert</button>
                  <button type="button" className="btn btn-primary" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertRegistration;
