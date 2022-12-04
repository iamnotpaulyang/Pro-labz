import ProteinShakeCard from "./ProteinShakeCard";

//Returning all preset shakes
function ProteinShakeListing({ proteinShakeListing }) {
  console.log(proteinShakeListing);

  return (
    <div className="protein-shake-listing">
      {proteinShakeListing.map((shake) => {
        return <ProteinShakeCard key={shake.id} shake={shake} />;
      })}
    </div>
  );
}
export default ProteinShakeListing;
