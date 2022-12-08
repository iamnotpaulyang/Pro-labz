import ProteinShakeCard from "./ProteinShakeCard";

//Returning all shakes
function ProteinShakeListing({ proteinShakeListing, setProteinShakeListing }) {
  
  // console.log(proteinShakeListing);

  return (
    <div className="protein-shake-listing">
      {proteinShakeListing.map((shake) => {
        return (
          <ProteinShakeCard
            key={shake.id}
            setProteinShakeListing={setProteinShakeListing}
            proteinShakeListing={proteinShakeListing}
            shake={shake}
          />
        );
      })}
    </div>
  );
}
export default ProteinShakeListing;
