import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { login } from '../function/auth'

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "../layout/navbar";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        username: "",
        password: "",
    });

    const roleBaseRedirect = (role) => {
        console.log(role);
        if (role === "admin") {
            navigate("/admin/index");
        } else {
            navigate("/user/index");
        }
    };

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        login(value)
            .then((res) => {
                console.log(res.data);
                alert("Login Successfully")

                dispatch({
                    type: "LOGIN",
                    payload: {
                        token: res.data.token,
                        username: res.data.payload.user.username,
                        role: res.data.payload.user.role,
                    },
                });
                localStorage.setItem("token", res.data.token);
                roleBaseRedirect(res.data.payload.user.role);

            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Login Failed");
            });
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Navbar />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1> Login </h1>
                <form onSubmit={handleSubmit} style={{ width: '30%', height: '400px' }}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleChange} />
                    </div>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Enter password" onChange={handleChange} />
                    </div>
                    <br/>
                    <div className="text-center" >
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                    <br/>
                    <p className="text-center" >No account yet? <a href="/sign-up">Create one here!</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login