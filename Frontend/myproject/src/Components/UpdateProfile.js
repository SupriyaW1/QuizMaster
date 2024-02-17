// UpdateProfile.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from './profileThunks';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: ''
  });

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.profile); // Assuming you have profile state in your Redux store

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        </div>
        <div>
          <label>Contact</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>Update</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Profile updated successfully!</p>}
    </div>
  );
};

export default UpdateProfile;
