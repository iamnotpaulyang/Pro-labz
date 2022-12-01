import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateShake from "./CreateShake"
import ProteinShakeCard from "./ProteinShakeCard"



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
      <NavBar />
        <Switch>
          <Route path="/CreateShakes">
            <CreateShake/>
            </Route>
          <Route path="/ProteinShakeCards">
            <ProteinShakeCard/>
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