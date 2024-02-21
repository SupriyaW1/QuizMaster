import { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

export default function Login() {
  const init = {
    uname: { value: "", valid: false, touched: false, error: "" },
    pwd: { value: "", valid: false, touched: false, error: "" },
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

  const [users, dispatch] = useReducer(reducer, init);
  const [insertMsg, setInsertMsg] = useState("");
  const myaction = useDispatch();
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();

  const [info, setInfo] = useState("");
  



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
    const isFormValid = Object.values(users).every((field) => field.valid);

    if (isFormValid) {
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          uname: users.uname.value,
          pwd: users.pwd.value,
        }),
      };

      fetch("http://localhost:8080/login", reqOptions)
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          setInfo(data);
          console.log(data); 

          if (data && data.role_id) {
            //for admin check
            
            if(data.role_id.role_id === 1){

                localStorage.setItem("name",JSON.stringify(data));
                navigate("/adminHome");
                myaction(login());
            }
            //for Student check
            else if (data.role_id.role_id === 2) {

              localStorage.setItem("name",JSON.stringify(data));
              console.log("valid ");
              console.log("after dispatch");
              navigate("/studentHome");
              myaction(login());
            }
            //for cexpert check
            else if (data.role_id.role_id === 4) {

                localStorage.setItem("name",JSON.stringify(data));
                console.log("valid ");
                console.log("after dispatch");
                navigate("/expertHome");
                myaction(login());
              }
          } else {
            // Handle invalid login or missing data
            setInsertMsg("Invalid login or missing data");
          }
        });
    } else {
      console.log("Form has validation errors. Please fix them before submitting.");
    }
  };

  return (
    <div className="container">
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
          <h1>Login Form</h1>
          <form>
            <div class="mt-3 mb-3">
              <label for="uname" class="form-label"> Username </label>
              <input type="text" id="uname" name="uname" class="form-control"
                value={users.uname.value}
                onChange={(e) => { handleChange("uname", e.target.value) }}
                onBlur={(e) => { handleChange("uname", e.target.value) }} />
            </div>
            <div style={{ color: "Red", display: users.uname.touched && !users.uname.valid ? "block" : "none" }}>
              {users.uname.error}
            </div>

            <div class="mt-3 mb-3">
              <label for="pwd" class="form-label"> Password </label>
              <input type="password" id="pwd" name="pwd" class="form-control"
                value={users.pwd.value}
                onChange={(e) => { handleChange("pwd", e.target.value) }}
                onBlur={(e) => { handleChange("pwd", e.target.value) }} />
            </div>
            <div style={{ color: "Red", display: users.pwd.touched && !users.pwd.valid ? "block" : "none" }}>
              {users.pwd.error}
            </div>

            <div>
              <input type="button" className="btn btn-primary btn-block" value="Login" onClick={(e) => { submitData(e) }} />
              &nbsp;&nbsp;
              <input type="reset" className="btn btn-primary btn-block" value="Clear" onClick={() => { dispatch({ type: "reset" }); }} />
            </div>
          </form>
        </div>
        <div class="col">
        </div>
      </div>
      <h1> {insertMsg} </h1>
    </div>
  );
}