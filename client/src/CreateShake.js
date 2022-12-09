import { useState, useEffect } from "react";
import "./CreateShake.css";

function CreateShake({setProteinShakeListing,}) {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [shakeRecipe, setShakeRecipe] = useState([]);
  const [shakeName, setShakeName] = useState("");
  const [shakeImg, setShakeImg] = useState("");
  

  useEffect(() => {
    getSelections();
  }, []);


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
      })
      .map((ingredient) => {
        return (
          <div className="ingredient-display" style={{ display: "flex" }}>
            <button
              onClick={() => handleAddingIngredients(ingredient)}
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

  //Creating shakes and ingredients into shakes

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
          return { ingredient_id: shake.id, protein_shake_id: data.id };
        });
        console.log(newShakeArray);
        fetch(`/protein_shake_ingredients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            protein_shake_id: data.id,
            ingredients: newShakeArray,
          }),
        })
          .then((res) => res.json())
          .then((data) =>
            setProteinShakeListing((proteinShakeListing) => [
              ...proteinShakeListing,
              data,
            ])
          );
      });
  };

  //Displaying all categories

  const categoriesDisplay = categories.map((category) => {
    return (
      <>
        <div className="ingredient-display-parent">
          <h1 className="category-name">{category.name}</h1>
          <div
            className="recipe-card"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {ingredientDisplay(category.name)}
          </div>
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

  //Blender functionality
  
  var estadoBlender = "Apagada";
  var soundBlender = document.getElementById("blender-sound");
  var buttomBlender = document.getElementById("blender-button-sound");
  var Blender = document.getElementById("blender");

  function controlarBlender() {
    if (estadoBlender == "Apagada") {
      estadoBlender = "Encendida";
      makeBrrBrr();
      console.log(Blender);
      Blender.classList.add("active");
      console.log(Blender.classList);
    } else {
      estadoBlender = "Apagada";
      makeBrrBrr();
      Blender.classList.remove("active");
    }
  }

  function makeBrrBrr() {
    if (soundBlender.paused) {
      buttomBlender.play();
      soundBlender.play();
    } else {
      buttomBlender.play();
      soundBlender.pause();
      soundBlender.currentTime = 0;
    }
  }

  return (
    <div>
      <label className="ingredient-label">Ingredients: </label>
      <div className="grandparent">{categoriesDisplay}</div>
      <div style={{ width: "50vw" }}>
        {/*Mapping through each ingredient*/}

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

        {/*blendar*/}
        <div className="container">
          <div id="blender" className="blender">
            <div
              id="blender-button"
              className="blender-button"
              onClick={() => controlarBlender()}
            ></div>
          </div>
        </div>
        <audio
          id="blender-button-sound"
          src="https://github.com/vkive/Blender/blob/master/Sound/sound_botonLicuadora.mp3"
          type="audio/mpeg"
        ></audio>
        <audio
          id="blender-sound"
          src="https://github.com/vkive/Blender/blob/master/Sound/sound_licuadora.mp3"
          type="audio/mpeg"
          loop
        ></audio>
      </div>
    </div>
  );
}

export default CreateShake;
