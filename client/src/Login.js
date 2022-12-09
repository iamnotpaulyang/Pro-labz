import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Login

function Login({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const { username, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          updateUser(user);
          history.push("/proteinshake");
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <body className="login-body">
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
          <br></br>
          <input className="login-button" type="submit" value="submit" />
        </form>
      </div>
    </body>
  );
}
export default Login;
