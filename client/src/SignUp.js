import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
                    history.push("/Login")
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
return (
    <div>
      <form className="signup-container" onSubmit={onSubmit}>
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
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;