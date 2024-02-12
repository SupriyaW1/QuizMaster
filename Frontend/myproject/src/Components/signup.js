import React, { useState } from "react";

export default function Signup() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    education: '',
    contact: '',
    email: '',
    
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'firstName' || name === 'lastName') {
      if (/\d/.test(value)) {
        error = 'Name must not contain numbers.';
      }
    } else if (name === 'contact') {
      if (!/^\d*$/.test(value)) {
        error = 'Contact must contain only digits.';
      } else if (value.length > 10) {
        error = 'Contact must not exceed 10 digits.';
      }
    }

    // If there's an error, don't update the form data
    if (error === '') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === '') {
        validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
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
                type="tel"
                id="contact"
                name="contact"
                className="form-control"
                placeholder="Enter your contact number"
                value={formData.contact}
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
}
