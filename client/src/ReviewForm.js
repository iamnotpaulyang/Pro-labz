import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ReviewForm({ user, addNewReview, proteinshake }) {
const [userId, setUser] = useState("");
const [proteinShakeId, setProteinShake] = useState("");
const [errors, setErrors] = useState([]);
const [values, setValues] = useState({
    username: "",
    description: "",
  });

  //for error handling in review form
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const history = useHistory();

  const handleUserNameInputChange = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handleUserDescriptionInputChange = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  //so error messages won't appear
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username && values.description) {
      setValid(true);
    }
    setSubmitted(true);
  };

  //   function handleSubmit(e) {
  //     e.preventDefault();
    //   const newReviewObj = {
    //     user_id: parseInt(userId),
    //     protein_shake_id: parseInt(proteinShakeId),
    //     description: fetch("/reviews", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(newReviewObj),
    //     }).then((r) => {
    //       if (r.ok) {
    //         r.json().then((review) => {
    //           addNewReview(review);
    //           history.push("/proteinshake");
    //         });
    //       } else {
    //         r.json().then((error) => setErrors(errors));
    //       }
    //     }),
    //   };

  return (
    <div className="form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Thank You for submitting your review!
          </div>
        ) : null}
        <input
          onChange={handleUserNameInputChange}
          value={values.username}
          className="form-field"
          placeholder="Username"
          name="username"
        ></input>
        {submitted && !values.username ? (
          <span>Please enter username </span>
        ) : null}
        <input
          onChange={handleUserDescriptionInputChange}
          value={values.description}
          className="form-field"
          placeholder="Review"
          name="description"
        ></input>
        {submitted && !values.description ? (
          <span>Please enter a review </span>
        ) : null}
        <button class="form-field" type="submit">
          Submit Review!
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
