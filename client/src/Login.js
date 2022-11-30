import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



function Login({ setLogin, user }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        // .then((r) => r.json())
        .then((res) => {
          if (res.ok) {
            res.json().then((data)=>{
              sessionStorage.setItem("user", JSON.stringify(data))
              setLogin(data)
              history.push('/')
            })
          } else {
            res.json().then(event => alert(event.error))
          }
        })
        }
    
  
    return (
      <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <p>
        <input 
          className="usernameInput"
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}/>
          </p>
          <p>
          <input 
          className="passwordInput"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          </p>
        <button className="loginButton"type="submit">Login</button>
        <p>Create an Account Today!</p>
      </form>
        <button className="createAccountButton" onClick={()=> history.push('/SignUp')}>Create Account</button>
      </>
      
    );
  }
export default Login;