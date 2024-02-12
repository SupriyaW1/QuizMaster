import { Link, Routes,Route } from 'react-router-dom';
import './App.css'
import Signup from './Components/signup';
import Login from './Components/login';
import AdminHome from './Components/adminHome';
import ExpertRegistration from './Components/expertRegistration';
function App() {
  return (
    <div className="App">
       <h1 className="bg-primary text-white">Home Page of Project </h1>
        <ul className="nav navbar"> 
           <li className="nav-item">
            <Link to={"/signup"} className="nav-link">Sign Up</Link> 
           </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">Log-In</Link>
            </li>  
            <li className="nav-item">
              <Link to={"/adminHome"}>Admin Page</Link>
            
            </li>
       </ul>
       <Routes>
       <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login/>}/>
       <Route path="/adminHome" element={<AdminHome/>}/>
       <Route path="/expertRegistration" element={<ExpertRegistration/>} />
       </Routes>

    </div>
  );
}

export default App;
