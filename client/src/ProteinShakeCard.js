import { Link } from "react-router-dom";
import Review from "./Review";
// import React, { useState } from "react";

function ProteinShakeCard({
  shake,
  review,
  proteinShakeListing,
  setProteinShakeListing,
  handleEditReview,
}) {
  return (
    <div>
      <div className="card">
        <h1 className="shake-name"> {shake.name} </h1>
      </div>
      <div className="card">
        <img src={shake.image} alt="protein-shake" />
        {/* style={{ margin: "1px" for mango shake that is too large  }} */}
      </div>
      <ul>
        <h3>Ingredients: </h3>
        {shake.ingredients.map((ingredient) => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
      <button className="form-field" type="submit">
        <Link to={`/reviews/${shake.id}`}>Create A Review!</Link>
      </button>
      {/* <ul>
      <button className="Edit-Review" onClick={updateReview}>
        ✏️
        </button>
      </ul>
      <ul>
        <button className="Delete-Review" onClick={handleDelete}>
          x
        </button> */}
      <h3>Reviews: </h3>
      {shake.reviews.map((review) => {
        console.log("review", review)
        return (
          <Review
            key={review.id}
            review={review}
            handleEditReview={handleEditReview}
            proteinShakeListing={proteinShakeListing}
            setProteinShakeListing={setProteinShakeListing}
          />
        );
      })}
      {/* </ul> */}
    </div>
  );
}
export default ProteinShakeCard;
