import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//Page
import Register from "./component/page/register";
import Login from "./component/page/login";
import Home from "./component/page/home";


//Admin
import HomeAdmin from "./component/page/admin/Home";
import ManageUser from "./component/page/admin/ManageUser";
import RequestMs from "./component/page/admin/RequestMs";

import CreatePlant from "./component/page/plant/CreatePlant";

//User
import Homeuser from "./component/page/user/Home";

import UserRoute from "./component/routes/UserRoute"

import { currentUser } from "./component/function/auth";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        //code
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        //err
        console.log(err);
      });
  }
  return (
    <div className="App">

      {/*START ROUTE*/}
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <Home />
          </React.Fragment>}>
        </Route>

        <Route path="/sign-up" element={
          <React.Fragment>
            <Register />
          </React.Fragment>}>
        </Route>

        <Route path="/sign-in" element={
          <React.Fragment>
            <Login />
          </React.Fragment>}>
        </Route>

        {/*ADMIN ROUTE*/}
        <Route
          path="/admin/index"
          element={
            <React.Fragment>
              <HomeAdmin />
            </React.Fragment>}>
        </Route>

        <Route
          path="/admin/manage-user"
          element={
              <ManageUser />
            }
        />

        <Route
          path="/admin/create-plant"
          element={
            <CreatePlant />
          }
        />

        <Route
          path="/admin/edit-plant"
          element={
            <RequestMs />
          }
        />

        <Route
          path="/admin/list-of-plants"
          element={
            <RequestMs />
          }
        />
        <Route
          path="/admin/request-ms"
          element={
            <RequestMs />
          }
        />


        {/*USER ROUTE*/}
        <Route
          path="/user/index"
          element={
            <UserRoute>
              <Homeuser />
            </UserRoute>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
