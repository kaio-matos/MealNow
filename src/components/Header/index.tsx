import "./style.css";
import { useMeal } from "../../contexts/APIContext";

export default function Header() {
  const { getRandomMeal } = useMeal();

  return (
    <header>
      <img src="/MealNow.svg" alt="Are you hungry? MealNow" />
      <p className="title">Feeling Hungry?</p>
      <p className="title subtitle">Get a random meal by clicking below</p>
      <button onClick={getRandomMeal}>Get Meal</button>
    </header>
  );
}
