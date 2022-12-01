import React from 'react';
import { useHistory } from "react-router-dom";


function ProteinShakeCard ({shake}){
    console.log(shake);
    // const history = useHistory();

    // function selectProteinShake(name){
    //     console.log(name);
    //     history.push(`/proteinshake/${name}`);
    // }
    
    
    return(
        <div>
            <div className="card">
        <h1 className="shake-name"> {shake.name} </h1>
      </div>
      <div className="card">
        {/* <p className="shake-image">{shake.image}</p> */}
        <img src={shake.image} alt="protein-shake" />
      </div>
        </div>
    )

}






export default ProteinShakeCard;