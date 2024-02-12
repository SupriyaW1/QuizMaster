import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  
  const [formData, setFormData] = useState({
    uname: "", // Change username to uname
    pwd: "", // Change password to pwd
  });
  
  const [errors, setErrors] = useState({
    uname: "", // Change username to uname
    pwd: "", // Change password to pwd
    loginError: "", // New state for login error message
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Change username to uname and password to pwd
      loginError: "", // Clear login error message on input change
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    let valid = true;
    if (formData.uname.trim() === "") { // Change username to uname
      setErrors((prevErrors) => ({
        ...prevErrors,
        uname: "Username is required.", // Change username to uname
      }));
      valid = false;
    }
    if (formData.pwd.trim() === "") { // Change password to pwd
      setErrors((prevErrors) => ({
        ...prevErrors,
        pwd: "Password is required.", // Change password to pwd
      }));
      valid = false;
    }

    if (valid) {
      try {
        const response = await fetch("http://localhost:8080/checkUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Login successful");
          window.location.assign("/adminHome");
        } else {
          console.error("Login failed");
          setErrors((prevErrors) => ({
            ...prevErrors,
            loginError: "Invalid username or password.", // Set login error message
          }));
        }
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle error
      }

      // Reset form data
      setFormData({
        uname: "", // Change username to uname
        pwd: "", // Change password to pwd
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {errors.loginError && (
                <div className="alert alert-danger" role="alert">
                  {errors.loginError}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="uname"> {/* Change username to uname */}
                    Username:
                  </label>
                  <input
                    type="text"
                    id="uname" // Change username to uname
                    name="uname" // Change username to uname
                    className="form-control"
                    value={formData.uname} // Change username to uname
                    onChange={handleChange}
                  />
                  {errors.uname && ( // Change username to uname
                    <p className="text-danger">{errors.uname}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="pwd"> {/* Change password to pwd */}
                    Password:
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="pwd" // Change password to pwd
                      name="pwd" // Change password to pwd
                      className="form-control"
                      value={formData.pwd} // Change password to pwd
                      onChange={handleChange}
                    />
                    <span
                      className="input-group-text"
                      style={{ cursor: "pointer" }}
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {errors.pwd && ( // Change password to pwd
                    <p className="text-danger">{errors.pwd}</p>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
