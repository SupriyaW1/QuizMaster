import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ExpertHome() {
  return (
    <div>
      <h1>Welcome Expert</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="updateExpert" className="nav-link px-3">Update Account</Link>
            </li>
            <li className="nav-item">
              <Link to="addQuiz" className="nav-link px-3">Add Quiz</Link>
            </li>
            <li className="nav-item">
              <Link to="viewQuiz" className="nav-link px-3">View Quiz</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link px-3">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}
