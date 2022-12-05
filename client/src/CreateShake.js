import { useState, useEffect } from "react";

function CreateShake({ currentUser }) {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [shakeRecipe, setShakeRecipe] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [shakeName, setShakeName] = useState("");
  const [shakeImg, setShakeImg] = useState("");
  //   const [categories, setCategories] = useState([]);
  //   const [selected, setCategoryChange] = useState("");

  useEffect(() => {
    getSelections();
  }, [fetchedData]);

  //Fetching both category & ingredient
  function getSelections() {
    const urls = ["/categories", "/ingredients"];
    Promise.all(urls.map((url) => fetch(url)))
      .then((res) => Promise.all(res.map((res) => res.json())))
      .then((data) => {
        setCategories(data[0]);
        setIngredients(data[1]);
      });
  }

  //Spreading ingredients
  const handleAddingIngredients = (ingredient) => {
    const ingredientArray = [...shakeRecipe, ingredient];
    setShakeRecipe(ingredientArray);
  };

  // Displaying each specific ingredient

  const ingredientDisplay = (category) => {
    return ingredients
      .filter((ingredient) => {
        return ingredient.category.name === category;
        // return ingredient.category.image === category
      })
      .map((ingredient) => {
        return (
          <div style={{ display: "flex" }}>
            <button
              onClick={() => handleAddingIngredients(ingredient)}
              // style={{ margin: "1px" }}
            >
              <img
                src={ingredient.image}
                alt="ingredient"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{ingredient.name}</p>
            </button>
          </div>
        );
      });
  };
  console.log(shakeRecipe)
  //trying to create shake but not grabbing ingredient
  const handleCreateShake = () => {
  
    fetch(`/protein_shakes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: shakeName, image: shakeImg }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let newShakeArray = shakeRecipe.map((shake) => {
          console.log(shake)
          return {ingredient_id: parseInt(shake.id), protein_shake_id: parseInt(data.id)};
        });
        console.log(newShakeArray);
        fetch(`/protein_shake_ingredients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( newShakeArray ),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
    //   console.log(currentUser);
  };

  //Displaying all categories
  const categoriesDisplay = categories.map((category) => {
    return (
      <>
        <h1>{category.name}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {ingredientDisplay(category.name)}
        </div>
      </>
    );
  });

  //Delete ingredient from shake
  function deleteIngredient(i) {
    const recipeIngredientFilter = shakeRecipe.filter((ingredient, index) => {
      return i !== index;
    });
    setShakeRecipe(recipeIngredientFilter);
  }

  // Listing each ingredient into shakes
  return (
    <div style={{ display: "flex" }}>
      <div>
        <label>Ingredients: </label>
        {categoriesDisplay}
      </div>
      <div style={{ width: "50vw" }}>
        {shakeRecipe.map((ingredient, index) => {
          return (
            <div style={{ display: "flex" }}>
              <p> {ingredient.name}</p>
              <button
                style={{ height: "20px" }}
                onClick={() => {
                  deleteIngredient(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
        <label>Shake Name:</label>
        <input
          value={shakeName}
          onChange={(e) => setShakeName(e.target.value)}
        />
        <label>Shake Image url:</label>
        <input value={shakeImg} onChange={(e) => setShakeImg(e.target.value)} />
        <button onClick={handleCreateShake}>Create My Shake</button>
      </div>
    </div>
  );
}
//Mapping through each ingredient ^
export default CreateShake;
