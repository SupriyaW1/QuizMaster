
import Signup from './Components/signup';
import AdminHome from './Components/adminHome';
import ExpertRegistration from './Components/expertRegistration';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import StudentHome from './Components/studentHome';
import ExpertHome from './Components/expertHome';
import { useSelector } from 'react-redux';

function App() {
  const logstate = useSelector(state => state.logged)

  return (
    <div className="App">
      <header >
        <div style={{display: logstate.loggedIn?"none":"block"}}>
       <ul className="nav navbar"> 
           <li className="nav-item">
              <Link to={"/login"} className="nav-link">Login</Link>
           </li>
           <li className="nav-item">
                <Link to="/signup" className="nav-link">SignUp</Link>
            </li>
            <li className="nav-item" >
                 <Link to="/adminHome" className="nav-link">HomePage</Link> 
            </li>
           
       </ul>
       </div>
       
    
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/studentHome" element={<StudentHome/>}/>
          <Route path="/expertHome" element={<ExpertHome/>}/>
          <Route path="/adminHome" element={<AdminHome/>}/>
          <Route path="/expertRegistration" element={<ExpertRegistration/>} />
          

      </Routes>

      </header>
    </div>
  );


}

export default App;
