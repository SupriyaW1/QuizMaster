import React, { useState } from 'react';

export default function ExpertRegistration() {
  const initialFormData = {
    fname: '',
    lname: '',
    qualification: '',
    subject: '',
    contact: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Format first name and last name: Capitalize first letter, lowercase the rest
    if (name === 'fname' || name === 'lname') {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    // Validate contact: Only allow digits and limit to 10 characters
    if (name === 'contact') {
      if (!/^\d*$/.test(value)) {
        return; // Prevent input if not a digit
      }
      if (value.length > 10) {
        return; // Limit input to 10 characters
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue
    });

    // Clear error message if field has been filled
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleReset = () => {
    // Clear form data and errors
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Basic validation
    for (const field in formData) {
      if (!formData[field].trim()) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    }

    // Contact validation
    if (!formData.contact.trim()) {
      validationErrors.contact = 'Contact is required.';
    } else if (!/^\d+$/.test(formData.contact)) {
      validationErrors.contact = 'Contact must contain only digits.';
    } else if (formData.contact.length !== 10) {
      validationErrors.contact = 'Contact must be 10 digits long.';
    }
    if (formData.fname.trim() !== '' && (formData.fname[0] !== formData.fname[0].toUpperCase() || formData.fname.slice(1) !== formData.fname.slice(1).toLowerCase())) {
        validationErrors.fname = 'Name must start with a capital letter.';
      }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Submit the form data if no validation errors
    console.log('Form data:', formData);
    // Add code to send the form data to the server here
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
                      value={formData.fname}
                      onChange={handleChange}
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
                      value={formData.lname}
                      onChange={handleChange}
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
                      value={formData.qualification}
                      onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.contact}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="password" className="col-sm-4 col-form-label text-end">Password:</label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control ${errors.password && 'is-invalid'}`}
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
}
