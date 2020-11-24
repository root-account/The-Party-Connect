import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class LoginPage extends React.Component{

    render(){
        return(

    <div className="section section-signup" id="login-screen">
        <div className="container">
          <div className="squares square-1"></div>
          <div className="squares square-2"></div>
          <div className="squares square-3"></div>
          <div className="squares square-4"></div>
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-6">
              <h3 className="display-3 text-white"> 
              The PARTY connect
              </h3>
              <p className="text-white mb-3 login-subtext">Lets get you some fun</p>
              <br/>
              <div className="btn-wrapper">
                <Link to="/feed" className="btn btn-neutral btn-simple btn-round">Continue as guest</Link>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-auto">
              <div className="card card-register">
                <div className="card-header">
                  <img className="card-img" src="assets/img/square1.png" alt="Card image"/>
                  <h4 className="card-title">Login</h4>
                </div>
                <div className="card-body">
                  <form className="form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="tim-icons icon-email-85"></i>
                        </div>
                      </div>
                      <input type="text" placeholder="Email" className="form-control"/>
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="tim-icons icon-lock-circle"></i>
                        </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-check text-left">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/>
                        <span className="form-check-sign"></span>
                        Remember me
                        
                      </label>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <Link to="/feed" className="btn btn-info btn-round btn-lg">Login</Link>
                  <span className="registerLink">Dont have an account? <a href="#">Get one here.</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        );
    }

}

export default LoginPage