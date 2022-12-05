import { useState, useEffect } from "react";

function CreateShake() {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [shakeRecipe, setShakeRecipe] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
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
          <button
            onClick={() => handleAddingIngredients(ingredient)}
            // style={{ margin: "1px" }}
          >
            {ingredient.name}
            <img src={ingredient.image} alt="ingredient" />
          </button>
        );
      });
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

  function deleteIngredient(id) {
    setFetchedData(true);
    const grabIngredient = {
      method: "DELETE",
    };
    fetch(`/ingredients"/${id}`, grabIngredient).then(() =>
      setFetchedData(false)
    );
  }

  // Listing each ingredient into shakes
  return (
    <div style={{ display: "flex" }}>
      <div>
        <label>Ingredients: </label>
        <button onClick={() => deleteIngredient(ingredients)}> Remove Ingreident </button>
        {categoriesDisplay}
      </div>
      <div style={{ width: "50vw" }}>
        {shakeRecipe.map((ingredient) => {
          return <p> {ingredient.name}</p>;
        })}
      </div>
    </div>
  );
}
//Mapping through each ingredient ^
export default CreateShake;
