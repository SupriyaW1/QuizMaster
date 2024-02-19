import ExpertRegistration from './components/ExpertRegistration';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Signup from './components/Signup';
import AdminHome from './components/AdminHome';
import Logout from './components/Logout';
import ExpertHome from './components/ExpertHome';
import ManageAccount from './components/ManageAccount';
import CreateQuizCategories from './components/CreateQuizCategories';
import AddQuiz from './components/AddQuiz';
import ViewQuiz from './ViewQuiz';
//import Home from './components/Home';

function App() {
  const logstate = useSelector(state => state.logged)

  return (
    <div className="App">
      <div style={{display:logstate.loggedIn?"none":"block"}}>
      {/* <li className="nav-item" >
                 <Link to="/" className="nav-link">Quiz Application</Link> 
      </li> */}
                <ul className="nav justify-content-center"> 
        <li className="nav-item">
         <Link to={"/signup"} className="nav-link">Student Sign Up</Link> 
        </li>
         <li className="nav-item">
           <Link to={"/login"} className="nav-link">Log-In</Link>
         </li>  
         
         
    </ul>
    </div>
    <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminHome" element={<AdminHome/>}>
           <Route path="expertRegistration" element={<ExpertRegistration/>} />
           <Route path="manageAccount" element={<ManageAccount />} />
          <Route path="createQuizCategories" element={<CreateQuizCategories />} />
          
    </Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/expertHome" element={<ExpertHome/>}>
      <Route path="viewQuiz" element={<ViewQuiz/>}/>
      <Route path="addQuestion" element={<AddQuiz/>}/>
    </Route>
    </Routes>
   
 </div>
); 
  
}

export default App;
