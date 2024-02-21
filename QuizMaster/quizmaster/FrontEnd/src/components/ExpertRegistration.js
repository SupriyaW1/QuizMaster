import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpertRegistration() {


  const init = {

    uname: { value: "", valid: false, touched: false, error: "" },
    pwd: { value: "", valid: false, touched: false, error: "" },
    fname: { value: "", valid: false, touched: false, error: "" },
    lname: { value: "", valid: false, touched: false, error: "" },
    qualification:{ value: "", valid: false, touched: false, error: "" },
    subject: { value: "", valid: false, touched: false, error: "" },
    contact: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },

    };

  const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                const { key, value, touched, valid, error } = action.data;
                return { ...state, [key]: { value, touched, valid, error } };
            case "reset":
                return init;
            default:
                return state;
        }
    };

    const [experts, dispatch] = useReducer(reducer, init);
    const [insertMsg, setInsertMsg] = useState("");
    const navigate = useNavigate();

    const validateData = (key, val) => {
      let valid = true;
      let error = "";
      switch (key) {
             case "uname":
                var pattern = /^[A-Z]{1,}[a-z]{1,}[0-9]{1,}$/;
                if (!pattern.test(val)) {
                  valid = false;
                  error = "Invalid uname";
                }
                break;
        
              case "pwd":
                var pattern = /^[A-Z]{1}[a-z]{1,}[@][0-9]{1,}$/;
                if (!pattern.test(val)) {
                  valid = false;
                  error = "Invalid pwd";
                }
                break;

              

              case "fname":
              var pattern = /^[A-Z]{1}[a-z]{1,}$/;
              if (!pattern.test(val)) {
                  valid = false;
                  error = "Invalid fname";
              }
              break;

              case "lname":
              var pattern = /^[A-Z]{1}[a-z]{1,}$/;
              if (!pattern.test(val)) {
                  valid = false;
                  error = "Invalid lname";
              }
              break;

              case "contact":
                var pattern = /^[0-9]{10}$/;
                if (!pattern.test(val)) {
                    valid = false;
                    error = "Invalid Contact";
                }
                break;

              

              case "email":
              var pattern = /^[a-z]{1,}[@][a-z]{1,}[.][a-z]{1,}$/;
              if (!pattern.test(val)) {
                  valid = false;
                  error = "Invalid Username";
              }
              break;

              default:
              break;
      }

      return { valid: valid, error: error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
    dispatch({ type: "update", data: { key, value, touched: true, valid, error } });
};
const submitData = (e) => {
  e.preventDefault();
  const isFormValid = Object.values(experts).every((field) => field.valid);

  if (isFormValid) {
      console.log(JSON.stringify(experts));
      const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
              uname: experts.uname.value,
              pwd: experts.pwd.value,
              fname: experts.fname.value,
              lname: experts.lname.value,
              qualification: experts.qualification.value,
              subject: experts.subject.value,
              contact: experts.contact.value,
              email: experts.email.value,
            
              
          }),
      };

      fetch("http://localhost:8080/expertReg", reqOptions)
          .then((res) => {
              if (res.status === 200) {
                  // Registration successful
                  setInsertMsg("Registration successful");
                  alert("Registration successfull");
                  {/*to navigate to login page */}
                  navigate("/login");
              } else if (res.status === 400) {
                  // Bad request, handle validation errors
                  return res.json().then((data) => {
                      // Handle validation errors from the server
                      console.error("Validation error:", data);
                      setInsertMsg("Validation error. Please check your input.");
                  });
              } else {
                  // Other HTTP errors
                  throw new Error(`HTTP error! Status: ${res.status}`);
              }
          })
          .catch((error) => {
              // Handle network errors and other exceptions here
              console.error("There was a problem with the fetch operation:", error.message);
              setInsertMsg("Registration failed. Please try again later.");
          });
  } else {
      console.log("Form has validation errors. Please fix them before submitting.");
  }
};
  
return (
  <div className="container">

      <div className="row">
          <div className="col">
          </div>

          <div className="col">
              <h2> Expert Registration </h2>
              <form>
              <div className="mt-3 mb-3">
                      <label htmlFor="uname" className="form-label"> Username : </label>
                      <input type="text" id="uname" name="uname" className="form-control"
                          value={experts.uname.value}
                          onChange={(e) => { handleChange("uname", e.target.value) }}
                          onBlur={(e) => { handleChange("uname", e.target.value) }} />
                  </div>
                  <div style={{ color: "Red", display: experts.fname.touched && !experts.uname.valid ? "block" : "none" }}>
                      {experts.uname.error}
                  </div>

                  <div className="mt-3 mb-3">
                      <label htmlFor="pwd" className="form-label"> Password : </label>
                      <input type="password" id="pwd" name="pwd" className="form-control"
                          value={experts.pwd.value}
                          onChange={(e) => { handleChange("pwd", e.target.value) }}
                          onBlur={(e) => { handleChange("pwd", e.target.value) }} />
                  </div>
                  <div style={{ color: "Red", display: experts.pwd.touched && !experts.pwd.valid ? "block" : "none" }}>
                      {experts.pwd.error}
                  </div>
                  <div className="mt-3 mb-3">
                      <label htmlFor="fname" className="form-label"> First Name </label>
                      <input type="text" id="fname" name="fname" className="form-control"
                          value={experts.fname.value}
                          onChange={(e) => { handleChange("fname", e.target.value) }}
                          onBlur={(e) => { handleChange("fname", e.target.value) }} />
                  </div>
                  <div style={{ color: "Red", display: experts.fname.touched && !experts.fname.valid ? "block" : "none" }}>
                      {experts.fname.error}
                  </div>

                  <div className="mt-3 mb-3">
                      <label htmlFor="lname" className="form-label"> Last Name </label>
                      <input type="text" id="lname" name="lname" className="form-control"
                          value={experts.lname.value}
                          onChange={(e) =>  { handleChange("lname", e.target.value) }}
                          onBlur={(e) => { handleChange("lname", e.target.value) }} />
                  </div>
                  

                 
                  <div className="mt-3 mb-3">
                      <label htmlFor="qualification" className="form-label"> Qualification </label>
                      <input type="text" id="qualification" name="qualification" className="form-control"
                          value={experts.qualification.value}
                          onChange={(e) => { handleChange("qualification", e.target.value) }}
                          onBlur={(e) => { handleChange("qualification", e.target.value) }} />
                  </div>
                 {/* <div style={{ color: "Red", display: experts.education.touched && !experts.education.valid ? "block" : "none" }}>
                      {experts.education.error}
                 </div>*/}
                    <div className="mt-3 mb-3">
                      <label htmlFor="subject" className="form-label"> Subject </label>
                      <input type="text" id="subject" name="subject" className="form-control"
                          value={experts.subject.value}
                          onChange={(e) => { handleChange("subject", e.target.value) }}
                          onBlur={(e) => { handleChange("subject", e.target.value) }} />
                  </div>

                  
                        <div className="mt-3 mb-3">
                       <label htmlFor="contact" className="form-label"> Contact </label>
                       <input 
                              type="tel" 
                              id="contact" 
                              name="contact" 
                              className="form-control" 
                              value={experts.contact.value}
                              onChange={(e) => { handleChange("contact", e.target.value) }}
                              onBlur={(e) => { handleChange("contact", e.target.value) }} 
                        />
                      </div>
                      <div style={{ color: "Red", display: experts.contact.touched && !experts.contact.valid ? "block" : "none" }}>
                                  {experts.contact.error}
                      </div>
                  

                  <div className="mt-3 mb-3">
                      <label htmlFor="email" className="form-label"> Email </label>
                      <input type="email" id="email" name="email" className="form-control"
                          value={experts.email.value}
                          onChange={(e) => { handleChange("email", e.target.value) }}
                          onBlur={(e) => { handleChange("email", e.target.value) }} />
                  </div>
                  <div style={{ color: "Red", display: experts.email.touched && !experts.email.valid ? "block" : "none" }}>
                      {experts.email.error}
                  </div>

          

                  <div>
                      <input type="button" className="btn btn-primary btn-block"  value="register"onClick={(e) => { submitData(e) }} />
                      &nbsp;&nbsp;
                      <input type="reset" className="btn btn-primary btn-block" value="Clear" onClick={() => { dispatch({ type: "reset" }); }} />
                  </div>
              </form>
          </div>

          <div className="col">
          </div>
      </div>


      <h1> {insertMsg} </h1>
  </div>
);
}