import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import './ForgotPassword.scss';
import { FRONTEND_API, EMAIL_CHECK, RESETPWD_SUCCESS_MSG } from "../../config/config";

class ForgotPassword extends Component {
  state = {
    email: '',
    className: 'needs-validation',        // When validation fails, add a boostrap class to display prompts.
    suc_msg: { success: false, msg: ''},  // Held the successful state & message returned from server.
    err_msg: { err: false, msg: ''}       // Held the failure state & messag returned from server.
  }

  handleInputChange = (e) =>{
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e)=>{
    const { email, suc_msg, err_msg } = this.state;
    if(suc_msg.success){    // This page dose not redirect to another page, so if user try again after a successful try, have to clear the previous message. The same below.
      this.setState({ suc_msg: { success: false, msg: ''} });
    }
    if(err_msg.err){    
      this.setState({ err_msg: { err: false, msg: ''} });
    }
    if(!e.target.checkValidity()){      // Add a Bootstrap class to show prompts if checkValidity is false.
      this.setState({ className: 'needs-validation was-validated'}); 
    }else{
      axios.post(FRONTEND_API + "frontend/reset_password", { email })
      .then((res)=>{
        if(res.data.code === 'Reset successful'){
          this.setState({ 
            email: '',
            suc_msg: {success: true, msg:RESETPWD_SUCCESS_MSG},
            className: 'needs-validation'
          })
        }
      })
      .catch((err)=>{
        this.setState({ 
          // Here, I used the message returned from server for user. Or customize a message for user.
          err_msg: {err: true, msg:`${err.response.data.msg}: ${err.response.data.err}.`},
          className: 'needs-validation'
        })
      });
    }
    e.preventDefault();
  }

  render(){
    const { email, className, suc_msg, err_msg } = this.state;

    return <div className="forgotPwd-container">
        <div >
          { suc_msg.success && 
              <div className="alert alert-success alert-text" role="alert">
                {suc_msg.msg}
              </div>
          }
          { err_msg.err && 
              <div className="alert alert-danger alert-text" role="alert">
                {err_msg.msg}
              </div>
          }
          <form className={ className } noValidate onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input name="email" type="email" className="form-control forgotPwd-form-control" id="email" placeholder="Email" required value={email} onChange={this.handleInputChange} pattern={ EMAIL_CHECK }></input>
              <div className="invalid-feedback text-left ml-1">
                Incorrect email format.
              </div></div>
            <div >
              <button type="submit" name="forgotPwd" className=" btn btn-info forgotPwd-btn">Reset Password</button>
            </div>
          </form>
        </div>
        <div className="forgotPwd-options-container">
          <NavLink to="/signIn" className="signup-link">Login</NavLink>
          <NavLink to="/signUp" className="forgot-password-link">Sign Up</NavLink>
        </div>
      </div>
  }
}

export default ForgotPassword;
