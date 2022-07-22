import React from 'react';
import './Login.css';


function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email : </label>
        <input name="email" type="email" id="email"></input>
        <label htmlFor="password">Password : </label>
        <input name="password" type="password" id="password"></input>
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

export default Login