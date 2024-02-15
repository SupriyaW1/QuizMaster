
import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function StudentHome() {
  return (
    <div>
      <h1>Welcome Student</h1>
      <Link to="/login">
        <button>Logout</button>
      </Link>
      <div>
        <Link to="/studentHome/updateAccount">Update Account</Link>
        <Link to="/studentHome/viewQuizzes">View Quizzes</Link>
        <Link to="/studentHome/attemptQuizzes">Attempt Quizzes</Link>
        <Link to="/studentHome/viewResults">View Results</Link>
        <Link to="/studentHome/giveFeedback">Give Feedback</Link>
        <Link to="/studentHome/makeSubscription">Make Subscription</Link>
      </div>

      <Route path="/studentHome/updateAccount">
      </Route>
      <Route path="/studentHome/viewQuizzes">
      </Route>
      <Route path="/studentHome/attemptQuizzes">
      </Route>
      <Route path="/studentHome/viewResults">
        
      </Route>
      <Route path="/studentHome/giveFeedback">
       
      </Route>
      <Route path="/studentHome/makeSubscription">
      
      </Route>
    </div>
  );
}