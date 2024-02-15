import React, { useReducer } from "react";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    birthDate: "",
    education: "",
    contact: "",
    email: "",
    uname: "",
    pwd: "",
    subscription: false,
    upiId: "",
    paymentDate: "",
    amountToPay: ""
  },
  errors: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value
        }
      };
    case "UPDATE_ERRORS":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.name]: action.payload.error
        }
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formData, errors } = state;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z]*$/.test(value)) {
          error = "Name must contain only letters.";
        }
        break;
      case "contact":
        if (!/^\d*$/.test(value)) {
          error = "Contact must contain only digits.";
        } else if (value.length > 10) {
          error = "Contact must not exceed 10 digits.";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address.";
        }
        break;
      case "pwd":
        if (value.length < 8) {
          error = "Password must be at least 8 characters long.";
        }
        break;
      default:
        break;
    }

    dispatch({ type: "UPDATE_FORM_DATA", payload: { name, value, type, checked } });
    dispatch({ type: "UPDATE_ERRORS", payload: { name, error } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/studentRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      dispatch({ type: "RESET_FORM" });
    } else {
      console.error("Error submitting form");
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Student Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="birthDate">Birth Date:</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                className="form-control"
                placeholder="Select your birth date"
                value={formData.birthDate}
                onChange={handleChange}
              />
              {errors.birthDate && <p className="text-danger">{errors.birthDate}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="education">Education:</label>
              <input
                type="text"
                id="education"
                name="education"
                className="form-control"
                placeholder="Enter your education"
                value={formData.education}
                onChange={handleChange}
              />
              {errors.education && <p className="text-danger">{errors.education}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contact">Contact:</label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="form-control"
                placeholder="Enter your contact number"
                value={formData.contact}
                maxLength={10}
                onChange={handleChange}
              />
              {errors.contact && <p className="text-danger">{errors.contact}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="uname">Username:</label>
              <input
                type="text"
                id="uname"
                name="uname"
                className="form-control"
                placeholder="Enter your username"
                value={formData.uname}
                onChange={handleChange}
              />
              {errors.uname && <p className="text-danger">{errors.uname}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="pwd">Password:</label>
              <input
                type="password"
                id="pwd"
                name="pwd"
                className="form-control"
                placeholder="Enter your password"
                value={formData.pwd}
                onChange={handleChange}
              />
              {errors.pwd && <p className="text-danger">{errors.pwd}</p>}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                id="subscription"
                name="subscription"
                className="form-check-input"
                checked={formData.subscription}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="subscription">Subscribe to our service</label>
            </div>
            {formData.subscription && (
              <>
                <div className="mb-3">
                  <label className="form-label" htmlFor="upiId">UPI ID:</label>
                  <input
                    type="text"
                    id="upiId"
                    name="upiId"
                    className="form-control"
                    placeholder="Enter your UPI ID"
                    value={formData.upiId}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="paymentDate">Payment Date:</label>
                  <input
                    type="date"
                    id="paymentDate"
                    name="paymentDate"
                    className="form-control"
                    placeholder="Select payment date"
                    value={formData.paymentDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="amountToPay">Amount to Pay:</label>
                  <input
                    type="number"
                    id="amountToPay"
                    name="amountToPay"
                    className="form-control"
                    placeholder="Enter amount to pay"
                    value={formData.amountToPay}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <button type="button" className="btn btn-primary mr-2" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
