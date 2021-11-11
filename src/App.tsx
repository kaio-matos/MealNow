import { useEffect, useState } from "react";
import { mealType } from "./api/types";
import Header from "./components/Header";
import { useMeal } from "./contexts/APIContext";
import "./styles/App.css";

function App() {
  const { currentMeal } = useMeal();
  const [animation, setAnimation] = useState("hide");
  const [showMeal, setShowMeal] = useState({} as mealType);

  useEffect(() => {
    if (Object.keys(currentMeal).length > 0) {
      if (animation === "active") {
        setAnimation("hide");

        setTimeout(() => {
          setAnimation("active");
          setShowMeal(currentMeal);
        }, 1000);
      } else {
        setAnimation("active");
        setShowMeal(currentMeal);
      }
    }
  }, [currentMeal]);

  return (
    <div className="App">
      <Header />

      <main className={animation}>
        <section className="recipe_container">
          <h1 className="recipe_name">{showMeal.strMeal}</h1>
          <div className="recipe_additional_info">
            <p>Category: {showMeal.strCategory}</p>
            <p>Area: {showMeal.strArea}</p>
            <p>Tags: {showMeal.strTags}</p>
          </div>
          <div className="recipe_ingredients_image_container">
            <div className="recipe_image_container">
              <img src={showMeal.strMealThumb} alt={currentMeal.strMeal} />
            </div>
            <div className="recipe_ingredients">
              <h3>Ingredients</h3>
              <div>
                <ul>
                  {showMeal.ingredients?.map((ing, i) => {
                    return (
                      <li key={ing.ingredient + i}>
                        <span>{ing.ingredient}</span>
                      </li>
                    );
                  })}
                </ul>
                <hr />
                <ul>
                  {showMeal.ingredients?.map((ing, i) => {
                    return (
                      <li key={ing.ingredient + i}>
                        <span>{ing.measure}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <article className="recipe_content">
            <p>{currentMeal.strInstructions}</p>
          </article>
        </section>

        <div className="recipe_youtube">
          <div>
            <h3>Still can't do it ?</h3>
            <p>Try watching this youtube video and start now your recipe!</p>
          </div>
          <iframe
            width="560"
            height="315"
            src={currentMeal.strYoutube}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;
