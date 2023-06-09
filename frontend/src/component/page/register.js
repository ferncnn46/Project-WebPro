import React, { useState } from 'react'

import { register } from '../function/auth'
import Navbar from "../layout/navbar";

const Register = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if (value.password !== value.password1) {
      alert("Password not match")
    } else {
      register(value)
        .then((res) => {
          console.log(res.data);
          alert("Register Successfully")
        })
        .catch((err) => {
          console.log(err.response.data);
          alert("Register Failed");
        });
    }
  }
  console.log(value)

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Navbar />
      </div>
      <h1 className="text-center"  >Register</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit} style={{ width: '50%', height: '400px' }}>
          <div className="mb-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control " id="username" placeholder="Enter username" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Enter Confirm Password" onChange={handleChange} />
          </div>
          <br/>
          <div className="text-center" >
          <button type="submit" className="btn btn-primary" disabled={value.password.length < 3}>Submit</button>
          </div>
          <br />
          <p className="text-center" > Have an account? <a href="/sign-in" >Login here!</a> </p>
        </form>
      </div>
    </div>

  )
}

export default Register