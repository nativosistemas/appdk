  
import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
  }

  handleSubmit(event) {
    const { name, password } = this.state;

    var url = 'http://www.kellerhoff.com.ar:84/api/';
    var data = {};
    data.login = name;
    data.pass = password;
    var json = JSON.stringify(data);
    fetch(url + 'Authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
      .then(results => results.json())
      .then(data => {
        // const {name} = data.results[0];
        //setFirstName(name.first);
        alert('OK' + data.apNombre);
        //  setLastName(name.last);

      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="Text"
            value={this.state.user}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
