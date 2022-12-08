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
import EditReviewForm from "./EditReviewForm";
// import MyShakes from "./MyShakes";

function App() {
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
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

  // console.log(proteinShakeListing);

  //To grab reviews don't need??
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((review) => {
        setReviews(review);
      });
  }, []);

  function handleAddReview(review) {
    const updatedShakes = proteinShakeListing.map((shake) => {
      if (shake.id === review.protein_shake.id) {
        return { ...shake, reviews: [...shake.reviews, review] };
      } else {
        return shake;
      }
    });
    setProteinShakeListing(updatedShakes);
    console.log(updatedShakes);
    console.log(review);
  }
  // console.log(reviews);

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
          {/* <Route path="/myshakes">
            <h1>Hello</h1>
            <MyShakes />
          </Route> */}
          <Route path="/reviews/:id">
            <ReviewForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              reviews={reviews}
              setReviews={setReviews}
              handleAddReview={handleAddReview}
            />
            <h1>Hello Reviews</h1>
          </Route>
          <Route path="/editreviewform/:id">
            <EditReviewForm review={reviews} currentUser={currentUser} proteinShakeListing={proteinShakeListing}
              setProteinShakeListing={setProteinShakeListing}/>
          </Route>
          <Route path="/createshake">
            <CreateShake
              currentUser={currentUser}
              proteinShakeListing={proteinShakeListing}
              setProteinShakeListing={setProteinShakeListing}
            />
          </Route>
          <Route path="/proteinshake">
            <ProteinShakeListing
              proteinShakeListing={proteinShakeListing}
              reviews={reviews}
              setProteinShakeListing={setProteinShakeListing}
            />
          </Route>
          <Route path="/signup">
            <SignUp updateUser={updateUser} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/">
            {/* <h1>Pro Labz</h1> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
