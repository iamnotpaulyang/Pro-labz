import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp"



function App() {
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)


  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
        });
      }
    })
  },[])

 
  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>

  return (
    <BrowserRouter>
      <div className="App">
      
        <Switch>
          <Route path="/ProteinShakeCard">
            <h1>Test Route</h1>
          </Route>
          <Route path="/SignUp">
          <SignUp updateUser={updateUser}/> 
          </Route>
          <Route path="/login"><Login updateUser={updateUser}/></Route>
          <Route path="/">
            <h1>Pro Labz</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;