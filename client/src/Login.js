import React, { useState } from 'react';
import { useHistory } from "react-router-dom"


//Login
function Login({ updateUser }) {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)

        })
        .then(res => {

            if(res.ok){
                res.json().then(user => {
                  console.log(user)
                    updateUser(user)
                    history.push("/proteinshake")
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({ ...formData, [name]: value })
      }
    
  
    return (
    <div>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="username"
        value={formData.username}
        placeholder="username"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        value={formData.password}
        placeholder="password"
      />
      <input type="submit" value="submit"/>
    </form>
  </div>
    );
  }
export default Login;
  //   <>
    //   <form className="loginForm" onSubmit={onSubmit}>
    //     <p>
    //     <input 
    //       className="usernameInput"
    //       type="text"
    //       value={formData.username}
    //       placeholder="username"
    //       onChange={handleChange}/>
    //       </p>
    //       <p>
    //       <input 
    //       className="passwordInput"
    //       type="text"
    //       placeholder="password"
    //       value={formData.password}
    //       onChange={handleChange}/>
    //       </p>
    //     <button className="loginButton"type="submit">Login</button>
    //     <p>Create an Account Today!</p>
    //   </form>
    //     <button className="createAccountButton" onClick={()=> history.push('/SignUp')}>Create Account</button>
    //   </>