import React from "react";
import { useHistory } from "react-router-dom";

//
function ProteinShakeCard({ shake, reviews }) {
  console.log(shake);
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
      </div>
      <ul>
        {shake.ingredients.map((ingredient) => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
      <ul>
        {shake.reviews.map((review) => (
          <li>{review.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProteinShakeCard;
