import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertHome() {
  return (
    <div>
      <h1>Welcome Expert</h1>
      <Link to="/login">
        <button>Logout</button>
      </Link>
      
    </div>
  );
}
