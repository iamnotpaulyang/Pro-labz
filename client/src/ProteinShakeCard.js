import React from "react";
import { useHistory } from "react-router-dom";

//
function ProteinShakeCard({ shake, reviews }) {
  console.log(shake);
  console.log(reviews)
  // const history = useHistory();

  // function selectProteinShake(name){
  //     console.log(name);
  //     history.push(`/proteinshake/${name}`);
  // }
  
  //Shakes and all their details
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
      <ul>
      <h3>Reviews: </h3>
        {shake.reviews.map((review) => (
          <li>{review.description}</li>
        ))}
      </ul>
      {/* <ul>
        {reviews.user_id.map((user_id) => (
          <li>{user_id}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ProteinShakeCard;
