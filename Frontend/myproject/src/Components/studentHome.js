import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentHome() {
  return (
    <div>
      <h1>Welcome Student</h1>
      <Link to="/login">
        <button>Logout</button>
      </Link>
      
    </div>
  );
}
