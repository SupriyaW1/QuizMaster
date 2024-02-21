import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AttemptQuiz = () => {
    const navigate =useNavigate();
    const [exam,setExam] = useState({});
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');


    const [student,setStudent]=useState(null);
    useEffect(() => {
      const loginid= JSON.parse(localStorage.getItem("name")).uid;
        //console.log(loginid);
         fetch("http://localhost:8080/getStudentByUid?uid="+loginid)
         .then(resp=>resp.json())
         .then(obj=>{
           localStorage.setItem("loggedExpert",JSON.stringify(obj))
           setStudent(obj);
         })
     }, []);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchSubjects(selectedCategory);
        }
    }, [selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const fetchCategories = () => {
        fetch('http://localhost:8080/allCategories')
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Failed to fetch categories');
        })
        .then(data => {
            console.log(data)
            setCategories(data);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
    };

    const fetchSubjects = (category) => {
        fetch(`http://localhost:8080/allSubjects`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Failed to fetch subjects');
        })
        .then(data => {
            setSubjects(data);
        })
        .catch(error => {
            console.error('Error fetching subjects:', error);
        });
    };


   /* const sendValues =() =>{
        localStorage.setItem("cat_id",selectedCategory);
        localStorage.setItem("subject_id",selectedSubject);
        //setExamStarted(true);
        navigate("/studentHome/StartQuiz");
        // navigate("../StartQuiz");
    } */


    const saveDataToDatabase =  (e) => {
       e.preventDefault();
        const data = {
           sid:student.sid,
            subject_id:selectedSubject,
            cat_id:selectedCategory
        };
       console.log(data)
        fetch(`http://localhost:8080/saveExam`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((res)=>{
            if(res.status===200){
                //console.log(res.json())
                return res.json();
              //navigate("/startQuiz")
            }
            else if(res.status===400){
               return res.json().then((data) => {
                         
                console.error("Validation error:", data);
                });
            }
        })
        .then(obj => {
             //console.log(JSON.stringify(obj))
             setExam(obj);
             localStorage.setItem("current_exam",JSON.stringify(obj));
             alert("starting exam.....")
             navigate("../StartQuiz");
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error.message);
        }); 
    };


    


    /*const handleStartExam = () => {
      
      //saveDataToDatabase();
      //sendValues();
        
      
    };*/


    
    return (
             <div style={{ display: 'flex', justifyContent: 'center' }}>
             <div>
              <h2>Attempt Quiz</h2>
              <form>
                <table >
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="category">Select Category:</label>
                      </td>
                      <td>
                        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                          <option value="">--Select Category--</option>
                          {categories && categories.map(category => (
                            <option key={category.cat_id} value={category.cat_id}>{category.cat_name}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="subject">Select Subject:</label>
                      </td>
                      <td>
                        <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
                          <option value="">--Select Subject--</option>
                          {subjects && subjects.map(subject => (
                            <option key={subject.subject_id} value={subject.subject_id}>{subject.subject_name}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type='submit' value="Start Quiz" onClick={(e)=>{saveDataToDatabase(e)}} />
              </form>
            </div>
            </div>
          );
          
        
        // <div>
        //     <h2>Attempt Quiz</h2>
        //     {/* <form onSubmit={sendValues}> */}
        //     <div>
        //         <label htmlFor="category">Select Category:</label>
        //         <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        //             <option value="">--Select Category--</option>
        //             {categories && categories.map(category => (
        //                 <option key={category.cat_id} value={category.cat_id}>{category.cat_name}</option>
        //             ))}
        //         </select>
        //     </div>  
        //     <div>
        //         <label htmlFor="subject">Select Subject:</label>
        //         <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
        //             <option value="">--Select Subject--</option>
        //             {subjects && subjects.map(subject => (
        //                 <option key={subject.subject_id} value={subject.subject_id}>{subject.subject_name}</option>
        //             ))}
        //         </select>
        //     </div>
        //     <button onClick={sendValues} type='button'>Start Quiz</button>
            
            
        // </div>
        
    
};

export default AttemptQuiz;
