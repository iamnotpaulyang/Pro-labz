import ProteinShakeCard from "./ProteinShakeCard";

function ProteinShakeListing ({proteinShakeListing}){
    console.log(proteinShakeListing)
    
    return(
    <div className="protein-shake-listing">
        {proteinShakeListing.map((shake) => {
          return (
            <div>
              <ProteinShakeCard shake={shake}/>
            </div>
          );
        })}
      </div>
    );
}
export default ProteinShakeListing;