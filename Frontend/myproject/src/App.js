import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExpertRegistration from './components/ExpertRegistration';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import AdminHome from './components/AdminHome';
import ExpertHome from './components/ExpertHome';
import QuizzesandExplanations from './components/QuizzesandExplanations';
import UpdateProfile from './components/UpdateProfile';

function App() {
  const logstate = useSelector(state => state.logged);

  return (
    <div className="App">
      <div style={{ display: logstate.loggedIn ? "none" : "block" }}>
        <h1 className="bg-primary text-white">Home Page of Project </h1>
        <ul className="nav navbar">
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">Student Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">Log-In</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminHome" element={<AdminHome/>}>
          
          <Route path="updateProfile" element={<UpdateProfile />} />
          
          {/* You can nest more routes under AdminHome if needed */}
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/expertHome" element={<ExpertHome />} />
        <Route path="/expertHome/QuizzesandExplanations" element={<QuizzesandExplanations />} />
        <Route path="/expertHome/UpdateProfile" element={<UpdateProfile />} />
        
        
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
      
    </div>
  );
}

export default App;
