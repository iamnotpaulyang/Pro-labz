import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Review({ review, setProteinShakeListing, proteinShakeListing }) {
  const [deletedReview, setDeletedReview] = useState();
  const history = useHistory();

  //Deleting Review

  function handleDelete() {
    const deletedReview = {
      method: "DELETE",
    };
    fetch(`/reviews/${review.id}`, deletedReview)
      .then((r) => r.json())
      .then((shake) => {
        const updatedShakes = proteinShakeListing.map((proteinshake) => {
          console.log("review", review);
          return proteinshake.id === review?.protein_shake_id
            ? shake
            : proteinshake;
        });
        console.log(updatedShakes);
        console.log(shake);

        setProteinShakeListing(updatedShakes);
      });

    // window.location.reload(true);
  }

  function editReview(e) {
    e.preventDefault();
    history.push(`/editreviewform`);
  }

  return (
    <div>
      {review.description}
      <ul>
        <button className="edit-review">
          <Link to={`/editreviewform/${review.id}`}> ✏️ </Link>
        </button>
      </ul>
      <ul>
        <button className="delete-review" onClick={handleDelete}>
          x
        </button>
      </ul>
    </div>
  );
}

export default Review;
