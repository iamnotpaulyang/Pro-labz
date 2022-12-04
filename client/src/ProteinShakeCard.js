import React from "react";
import { useHistory } from "react-router-dom";

function ProteinShakeCard({ shake }) {
  console.log(shake);
  // const history = useHistory();

  // function selectProteinShake(name){
  //     console.log(name);
  //     history.push(`/proteinshake/${name}`);
  // }
//  
  return (
    <div>
      <div className="card">
        <h1 className="shake-name"> {shake.name} </h1>
      </div>
      <div className="card">
        <img src={shake.image} alt="protein-shake" />
      </div>
      {/* <div className="card">
      displayFunctionIngredients.map
        <h3 className="ingredients" {shake.ingredients} </h3> */}
      {/* </div> */}
    </div>
  );
}

export default ProteinShakeCard;
