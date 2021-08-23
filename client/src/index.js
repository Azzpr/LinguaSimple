import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React routers
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Importing components
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

// importing some pages
import Home from "./pages/home/main"

// importing resources
// importing pages
import ThousandMostCommonWords from "./pages/resources/french/grammaticalrules/ThousandMostCommonWords"

ReactDOM.render(
  <React.StrictMode>

      <Navbar/>
     
     {/* Temporary solution, maybe going to change this up in the future */}
     <Router>
       <Switch>
         <Route exact  path="/">
        <Home/>
         </Route>

         {/* Resources french */}
         <Route exact  path="/resources/french/grammaticalrules/ThousandMostCommonWords">
            <ThousandMostCommonWords/>
         </Route>
       </Switch>

     </Router>

      <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
