import React, { Component } from "react";
import { Link } from "react-router-dom";
import Boton from "./boton";
import Toggle from "./boton";

export default class Login extends Component {
        constructor(props) {
          super(props);
          this.state = {isToggleOn: true};
          // This binding is necessary to make `this` work in the callback
          this.handleClick = this.handleClick.bind(this);
        }
      
        handleClick() {
          this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        }
       
    
   
    render() {
        return (
            <form id="formulario"> 
            <div className="form-group">
                <img src="logopyme.png" name="logopyme"
                    title="Título logo" alt="Título del logo" width="190" height="100" align="rigth"></img>
            </div>
            
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" id="usuario" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" id="password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <Link to="/iniciado"> 
            <button type="submit" className="btn btn-primary btn-block"  value = "enviar" id="login"  onClick={this.addAction} >
                Login
            </button>
            </Link>
            <p className="forgot-password text-right">
                Forgot <a href="https://www.observatoriopyme.org.ar/">password?</a>
            </p>
            <div id="error"></div>
        </form>
    );
}
}
 
/*
<Link to=“ruta”>
      Boton
</Link>*/ 