import { Link, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
        <ul className="nav navbar"> 
           <li className="nav-item">
            <Link to={"/signup"} className="nav-link">Sign Up</Link> 
           </li>
  
       </ul>
       <Routes>
       <Route path="/signup" element={<Sign/>} />
       </Routes>
              <h1 className="bg-primary text-white">Home Page </h1>

    </div>
  );
}

export default App;
