import React, { Component } from "react";
import {Link} from "react-router-dom";
import Login from "./login.component";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <img src="logopyme.png" name="logopyme"
					    title="Título logo" alt="Título del logo" width="190" height="90" align="rigth"></img>
                </div>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" id="inputPrimerNombre" value="soy la empresa"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" id="inputApellido" value="empresa 2"/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="inputEmail" value="pepe@gmail.com"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="inputContraseña" value="contra"/>
                </div>
                <Link to="/sign-in">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </Link>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}