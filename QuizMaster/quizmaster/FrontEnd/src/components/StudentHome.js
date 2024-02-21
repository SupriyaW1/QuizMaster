import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function StudentHome() {
  return (
    <div>
      <h1>Welcome Student</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="updateStudent" className="nav-link px-3">Update Account</Link>
            </li>
            <li className="nav-item">
              <Link to="attemptQuiz" className="nav-link px-3">Attempt Quiz</Link>
            </li>
            <li className="nav-item">
              <Link to="viewResult" className="nav-link px-3">View Result</Link>
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
