import React, { Component } from "react";
import {  useHistory ,Redirect} from "react-router-dom";
import { ajaxLogin,isLoggedIn } from './utils';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      user: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    /*   this.setState({
         name: event.target.value
    });*/
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;
    //ajaxLogin(name, password);
    if (ajaxLogin(name, password)) {
      //let history = useHistory();
     // history.push("/laboratorio" );
      //return <Redirect to="/login" />;
    }
  }

  render() {
    if (isLoggedIn()) {
      return <Redirect to="/laboratorio" />;
  }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Iniciar sesión</h3>

          <div className="form-group">
            <label>Usuario</label>
            <input type="text" name="name" className="form-control" placeholder="Ingrese usuario" value={this.state.name}
              onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" name="password" className="form-control" placeholder="Ingrese contraseña" value={this.state.password}
              onChange={this.handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
}