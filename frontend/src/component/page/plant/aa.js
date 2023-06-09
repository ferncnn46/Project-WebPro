import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendLogin } from "../services/request";
import "../styles/Login_Signup.css"

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
//   const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendLogin(formData).then((response) => {
      switch (response?.status) {
        case 200:
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          navigate("/home");
          break;
        case 401:
          alert(response.data.message);
          break;
        default:
          console.log("Something went wrong")
          break
      }
    });
  };

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="title-login">
          <h1>Log in</h1>
          <p>Username</p>
          <input
            placeholder="Enter your Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <div className="submit-container">
            <button type="submit">Login</button>
            <div>
              <p>Don't have an account?
              <span>     </span>
              <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div> 
        </div>
      </form>
    </>
  );
}

export default LoginForm;