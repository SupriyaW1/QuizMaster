import ExpertRegistration from './components/ExpertRegistration';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Signup from './components/Signup';
import AdminHome from './components/AdminHome';
import Logout from './components/Logout';
import ExpertHome from './components/ExpertHome';

function App() {
  //initial state of logged
  const logstate = useSelector(state => state.logged)

  return (
    <div className="App">
      <div style={{display:logstate.loggedIn?"none":"block"}}>
    <h1 className="bg-primary text-white">Home Page of Project </h1>
     <ul className="nav navbar"> 
        <li className="nav-item">
         <Link to={"/signup"} className="nav-link">Student Sign Up</Link> 
        </li>
         <li className="nav-item">
           <Link to={"/login"} className="nav-link">Log-In</Link>
         </li>  
         <li className="nav-item">
           <Link to={"/adminHome"}>Admin Page</Link>
         </li>
    </ul>
    </div>
    <Routes>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminHome" element={<AdminHome/>}>
           <Route path="expertRegistration" element={<ExpertRegistration />} />
          {/* <Route path="manageAccount" element={<ManageAccount />} />
          <Route path="createQuizCategories" element={<CreateQuizCategories />} />
          <Route path="addQuizzes" element={<AddQuizzes />} /> */}
    </Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/expertHome" element={<ExpertHome/>}></Route>
    </Routes>

 </div>
); 
  

}

export default App;
