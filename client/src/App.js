import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateShake from "./CreateShake";
import ProteinShakeCard from "./ProteinShakeCard";
import ProteinShakeListing from "./ProteinShakeListing";
import ReviewForm from "./ReviewForm";
import MyShakes from "./MyShakes";

function App() {
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [search, setSearch] = useState("");
  const [proteinShakeListing, setProteinShakeListing] = useState([]);
  const [reviews, setReviews] = useState([]);

  //To grab proteinshakes
  useEffect(() => {
    fetch("/protein_shakes")
      .then((r) => r.json())
      .then((proteinshake) => {
        setProteinShakeListing(proteinshake);
      });
  }, []);

  //To grab reviews
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((review) => {
        setReviews(review);
      });
  }, []);

  // useEffect(()=> {
  //   fetch("/ingredients")
  //   .then((res)=> res.json ())
  //   .then((ingredients) => {
  //     setIngredients(ingredients);
  //   });
  // },[]);

  // useEffect(()=> {
  //   fetch("/categories")
  //   .then((res)=> res.json ())
  //   .then((category_id)=> {
  //     setName(category_id);
  //   })
  // },[]);

  //Authorization

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
        });
      }
    });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  if (errors) return <h1>{errors}</h1>;

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar updateUser={updateUser} currentUser={currentUser} />
        <Switch>
          <Route path="/myshakes">
            <h1>Hello</h1>
            <MyShakes />
          </Route>
          <Route path="/review">
            <ReviewForm />
            <h1>Hello Reviews</h1>
          </Route>
          <Route path="/createshake">
            <CreateShake />
          </Route>
          {/* <Route path="/proteinshake">
            <ProteinShakeCard />
            </Route> */}
          <Route path="/proteinshake">
            <ProteinShakeListing
              proteinShakeListing={proteinShakeListing}
              reviews={reviews}
            />
          </Route>
          <Route path="/signup">
            <SignUp updateUser={updateUser} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/">
            <h1>Pro Labz</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
