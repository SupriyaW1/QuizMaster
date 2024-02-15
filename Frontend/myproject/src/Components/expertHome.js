import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertHome() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome Expert</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/expertHome/QuizzesandExplanations" style={{ marginRight: '20px' }}>Quizes and explanation</Link>
        <Link to="/expertHome/updateAccount" style={{ marginRight: '20px' }}>Update Account</Link>
        
      </div>
    </div>
  );
}