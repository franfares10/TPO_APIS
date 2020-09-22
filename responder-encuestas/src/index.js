
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import SignUp from "views/Login/SignUp";
import SignIn from "views/Login/SignIn"
import CompanyAdmin from "layouts/CompanyAdmin";
import history from "utils/History/history";


/*REVISAR CON ERIK*/


ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/login" component={SignIn}/>
      <Route path="/signin" component={SignUp}/>
      <Route path="/companyAdmin" component={CompanyAdmin}/>
      <Route  path="/admin" component={Admin} />
      
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);


