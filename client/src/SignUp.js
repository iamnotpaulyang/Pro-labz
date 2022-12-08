import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Signup
function SignUp({updateUser}){
    // const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const history = useHistory();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     let userInfo = {
    //       username: username,
    //       password,

    //     };
    //     console.log(userInfo);
    //     fetch("/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(userInfo),
    //     })
    //       .then((r) => r.json())
    //       .then((user) => history.push("/login"));
    //   } 
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
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push("/login")
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
    <div className="parent-login-form">
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={formData.username}
          placeholder="username"
        />
        <br></br>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="password"
        />
        {errors.length > 0 && errors.map((error)=>{
         return <p>{error}</p>
        })}
        <div>
          <button type="submit">SignUp</button> 
          <br></br>
        </div>
      
      </form>
    </div>
  );
}

export default SignUp;