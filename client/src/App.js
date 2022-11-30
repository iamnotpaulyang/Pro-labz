import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp"



function App() {
  const [user, setUser] = useState(false);
  const [logout, setLogout] = useState("");
  const [login, setLogin] = useState('');

  useEffect(() => {
    const currentUser = sessionStorage.getItem('user')
    if(currentUser){
      setUser(JSON.parse(currentUser))
    }
  }, []);

  function Login(user) {
    setUser(user);
  }

  function Logout() { 
    sessionStorage.removeItem('user')
    setUser("");

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Navbar user={user} setUser={setUser} setLogout={Logout}/>
      </header>
        <Switch>
          <Route path="/ProteinShakeCard">
            <h1>Test Route</h1>
          </Route>
          <Route path="/SignUp">
            <h1>Test Route</h1>
          </Route>
          <Route path="/login"><Login setLogin={setUser} user={user}/></Route>
          <Route path="/">
            <h1>Pro Labz</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;