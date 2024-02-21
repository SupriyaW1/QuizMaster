import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';

import ExpertRegistration from './components/ExpertRegistration';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import StudentHome from './components/StudentHome';
import ExpertHome from './components/ExpertHome';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import AddQuiz from './components/AddQuiz';

import AdminHome from './components/AdminHome';
import ViewQuiz from './components/ViewQuiz';
import AttemptQuiz from './components/AttemptQuiz';
import StartQuiz from './components/StartQuiz';


function App() {
  const logstate = useSelector(state => state.logged)
  
  
  return (
    <div className="App">
        <div style={{display: logstate.loggedIn?"none":"block"}}>
       <ul className="nav navbar"> 
            <li className="nav-item" >
                 <Link to="/" className="nav-link">Home</Link> 
            </li>
           
           <li className="nav-item">
              <Link to={"/login"} className="nav-link">Login</Link>
           </li>
           <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign up</Link>
            </li>
            
       </ul>
       </div>
       
       
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={< Login />} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/studentHome" element={<StudentHome/>}>
                
                <Route path="attemptQuiz" element={<AttemptQuiz/>}/>
                <Route path="StartQuiz" element={<StartQuiz/>}/>      
                     
            </Route>
          
          
          <Route path="/expertHome" element={<ExpertHome/>}>
               <Route path="addQuiz" element={<AddQuiz/>} />
               <Route path="viewQuiz" element={<ViewQuiz/>} />

          </Route>

          <Route path="/adminHome" element={<AdminHome/>}>
                 <Route path="expertRegistration" element={<ExpertRegistration/>} />
          </Route>
       </Routes>
    </div>
  );

{/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}



}

export default App;
