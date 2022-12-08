import React, { useState } from "react";
import { Link, useParams, useHistory }from "react-router-dom";
import ProteinShakeListing from "./ProteinShakeListing";

function EditReviewForm({setProteinShakeListing, proteinShakeListing, newReviewObj, reviews, currentUser }) {
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    username: "",
    description: "",
  });
  const [editReview, setEditReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleUserNameInputChange = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handleUserDescriptionInputChange = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handleEditReview = (e) => {
    e.preventDefault();
    const newReviewObj = {
      user_id: currentUser.id,
      protein_shake_id: id,
      description: values.description,
    };

    
    // setEditReview(true);
    const editedReview = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newReviewObj }),
    };
    fetch(`/reviews/${id}`, editedReview)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        const updatedShakes = proteinShakeListing?.map((proteinshake)=> {
          return proteinshake.id === data.id
            ? data
            : proteinshake;
        })
        setProteinShakeListing(updatedShakes);
        history.push("/proteinshake")
      });
  }
    return (
    <div className="form-container">
      <form className="review-form" onSubmit={handleEditReview}>
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
        <button className="edit-button" type="submit">
          Submit Review!
        </button>
      </form>
    </div>
  );
};


export default EditReviewForm;
