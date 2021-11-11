export default function Header() {
  const getMeal = async () => {};

  return (
    <header>
      <h1>Feeling Hungry?</h1>
      <h3>Get a random meal by clicking below</h3>
      <button onClick={getMeal}>Get Meal</button>
    </header>
  );
}
