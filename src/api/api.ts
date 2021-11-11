import { mealType, rawMealType } from "./types";

/**
 * Transforms
 *
 * {[strIngredient1, strIngredient2, strIngredient3....]}
 *
 * {[strMeasure1, strMeasure2, strMeasure3...]}
 *
 * to
 *
 * {ingredients: [
 *  { ingredient: string, measure: string }
 * ]}
 */
function transformRawMeal(rawMeal: rawMealType): mealType {
  let meal = {};
  const strIngredients: string[] = [];
  const strMeasures: string[] = [];

  const strIngredientRegex = /(strIngredient)/;
  const strMeasureRegex = /(strMeasure)/;

  for (let key of Object.keys(rawMeal)) {
    if (key.match(strIngredientRegex)) {
      // Caso o ingrediente estejam vazios não colocamos no array
      if (rawMeal[key] !== "" && rawMeal[key] !== " ")
        strIngredients.push(rawMeal[key] as string);
    } else if (key.match(strMeasureRegex)) {
      // Caso as medidas estejam vazias não colocamos no array
      if (rawMeal[key] !== "" && rawMeal[key] !== " ")
        strMeasures.push(rawMeal[key] as string);
    } else {
      meal = { ...meal, [key]: rawMeal[key] };
    }
  }

  // Ao separarmos as repetições em arrays juntamos em um unico objeto contendo ambas informações
  const recipeItems = strIngredients.map((ingredient, index) => {
    return { ingredient, measure: strMeasures[index] };
  });

  meal = { ...meal, ingredients: recipeItems };

  return meal as mealType;
}

class Meal {
  baseURL = "https://www.themealdb.com/api/json/v1/1";

  async getRamdom() {
    const raw = await fetch(`${this.baseURL}/random.php`);
    const { meals }: { meals: rawMealType[] } = await raw.json();
    const meal = transformRawMeal(meals[0]);

    return meal;
  }
}

const MealAPI = new Meal();
export { MealAPI };
