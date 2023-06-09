import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./component/reducers/index";

import { BrowserRouter } from "react-router-dom";


// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  //</React.StrictMode>
  document.getElementById("root")
);

