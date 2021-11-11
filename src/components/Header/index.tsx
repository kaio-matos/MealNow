import "./style.css";
import { useMeal } from "../../contexts/APIContext";

export default function Header() {
  const { getRandomMeal } = useMeal();

  return (
    <header>
      <p className="title">Feeling Hungry?</p>
      <p className="title subtitle">Get a random meal by clicking below</p>
      <button onClick={getRandomMeal}>Get Meal</button>
    </header>
  );
}
