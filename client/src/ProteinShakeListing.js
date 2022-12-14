import ProteinShakeCard from "./ProteinShakeCard";

//Returning all shakes

function ProteinShakeListing({ proteinShakeListing, setProteinShakeListing }) {
  

  return (
    <div className="card-parent">
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
