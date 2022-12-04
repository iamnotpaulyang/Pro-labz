// import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";

import { formatRFC3339 } from "date-fns";

// function ReviewForm({user, addNewReview, proteinshake}){
//     const [errors, setErrors] = useState([]);
//     const [userId, setUser] = useState("")
//     const [proteinShakeId, setProteinShake] = useState("")
//     const history = useHistory()

//     function handleSubmit(e){
//         e.preventDefault();
//         const newReviewObj = {
//             user_id: parseInt(userId),
//             protein_shake_id: parseInt(proteinShakeId),
//             description: 
        

//         fetch('/reviews',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(newReviewObj)
//         }).then((r)=> {
//             if (r.ok){
//                 r.json().then((review)=> {
//                     addNewReview(review)
//                     history.push("/proteinshake")
//                 })
//             } else {
//                 r.json().then((error)=> setErrors(errors))
//             }
//         })
//         }

//         return(
//             <div>
//                 <h2>Add a Review</h2>
//             </div>
//         )
// }

// }

// export default ReviewForm;
function ReviewForm(){

return(
    <div>

    </div>
)



}

export default ReviewForm