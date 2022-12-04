import { useState, useEffect } from "react";

function CreateShake() {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [shakeRecipe, setShakeRecipe] = useState([]);
  //   const [categories, setCategories] = useState([]);
  //   const [selected, setCategoryChange] = useState("");

  useEffect(() => {
    getSelections();
  }, []);

  function getSelections() {
    const urls = ["/categories", "/ingredients"];
    Promise.all(urls.map((url) => fetch(url)))
      .then((res) => Promise.all(res.map((res) => res.json())))
      .then((data) => {
        setCategories(data[0]);
        setIngredients(data[1]);
      });
  }

  const handleAddingIngredients = (ingredient) => {
    const ingredientArray = [...shakeRecipe, ingredient];
    setShakeRecipe(ingredientArray);
  };

  const ingredientDisplay = (category) => {
    return ingredients
      .filter((ingredient) => {
        return ingredient.category.name === category;
      })
      .map((ingredient) => {
        return (
          <button
            onClick={() => handleAddingIngredients(ingredient)}
            style={{ margin: "10px" }}
          >
            {ingredient.name}
          </button>
        );
      });
  };
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

  return (
    <div style={{ display: "flex" }}>
      <div>
        <label>Ingredients: </label>

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

export default CreateShake;
