import { useMeal } from "../contexts/APIContext";

export default function Header() {
  const { getRandomMeal } = useMeal();

  return (
    <header>
      <h1>Feeling Hungry?</h1>
      <h3>Get a random meal by clicking below</h3>
      <button onClick={getRandomMeal}>Get Meal</button>
    </header>
  );
}
