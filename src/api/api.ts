class Meal {
  baseURL = "https://www.themealdb.com/api/json/v1/1";

  async getRamdom() {
    const raw = await fetch(`${this.baseURL}/random`);
    const mealData: any = await raw.json();

    console.log(mealData);
    return mealData;
  }
}

const MealAPI = new Meal();
export { MealAPI };
