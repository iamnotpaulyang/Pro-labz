import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function ReviewForm({
  reviews,
  setReviews,
  currentUser,
  setCurrentUser,
  handleAddReview,
  proteinshake,
}) {
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    username: "",
    description: "",
  });

  //for error handling in review form

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const handleUserNameInputChange = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handleUserDescriptionInputChange = (e) => {
    setValues({ ...values, description: e.target.value });
  };
  // if (values.username && values.description) {
  //   setValid(true);
  // }
  // setSubmitted(true);

  //Creating review for associated shakes

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("currentUser", currentUser);
    const newReviewObj = {
      user_id: currentUser.id,
      protein_shake_id: id,
      description: values.description,
    };

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewObj),
    }).then((r) => {
      if (r.ok) {
        r.json().then((review) => {
          handleAddReview(review);
          history.push("/proteinshake");
        });
      } else {
        r.json().then((errors) => setErrors(errors));
      }
    });
  };

  return (
    <body className="review-form-image">
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
    </body>
  );
}

export default ReviewForm;
