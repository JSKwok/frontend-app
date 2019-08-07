import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import { SignIn, SignUp, ForgotPassword, Dashboard, AdminDashboard} from './pages';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import './App.scss';
import Affiliates from './pages/Affiliates/Affiliates';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/resetPassword" component={ResetPassword}/>
          <Route path="/affiliates" component={Affiliates}/>
          <Route path="/adminDashboard" component = {AdminDashboard}/>
          <Route render={ props => <Redirect to={{ pathname: '/signin', state: { from: props.location } }} /> } />
        </Switch>
    </div>
  );
}

export default App;
