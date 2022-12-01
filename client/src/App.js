import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateShake from "./CreateShake"
import ProteinShakeCard from "./ProteinShakeCard"
import ProteinShakeListing from "./ProteinShakeListing"



function App() {
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [search, setSearch] = useState("")
  const [proteinShakeListing, setProteinShakeListing] = useState([]);

  
  useEffect(() => {
    fetch("/protein_shakes")
      .then((r) => r.json())
      .then((proteinshake) => {
        setProteinShakeListing(proteinshake);
      });
  }, []);



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
      <NavBar updateUser={updateUser} currentUser={currentUser}/>
        <Switch>
          <Route path="/createshake">
            <CreateShake/>
            </Route>
          {/* <Route path="/proteinshake">
            <ProteinShakeCard />
            </Route> */}
            <Route path="/proteinshake">
              <ProteinShakeListing proteinShakeListing={proteinShakeListing}/>
            </Route>
          <Route path="/signup">
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