import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <Link to="/login">
        <button>Logout</button>
      </Link>
      <Link to="/expertRegistration">
        
        <button>Expert Registration</button>
      </Link>
    </div>
  );
}
