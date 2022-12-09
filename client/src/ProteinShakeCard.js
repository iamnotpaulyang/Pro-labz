import { Link } from "react-router-dom";
import Review from "./Review";

function ProteinShakeCard({
  shake,
  review,
  proteinShakeListing,
  setProteinShakeListing,
  handleEditReview,
}) {
  return (
    <div className="card-child">
      <div>
        <h1> {shake.name} </h1>
        <br></br>
        <img className="card-img" src={shake.image} alt="protein-shake" />
        <br></br>
        <ul>
          <h3>Ingredients: </h3>
          {shake.ingredients.map((ingredient) => (
            <li>{ingredient.name}</li>
          ))}
        </ul>
        <button className="form-field" type="submit">
          <Link to={`/reviews/${shake.id}`}>Create A Review!</Link>
        </button>
        <h3>Reviews: </h3>
        {shake.reviews.map((review) => {
          console.log("review", review);
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
      </div>
    </div>
  );
}
export default ProteinShakeCard;
