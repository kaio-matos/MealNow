import { createContext, ReactNode, useContext, useState } from "react";
import { MealAPI } from "../api/api";
import { mealType } from "../api/types";

type PlayerContextData = {
  currentMeal: mealType;
  getRandomMeal: () => Promise<mealType | undefined>;
};

type APIProviderProps = {
  children: ReactNode;
};

export const APIContext = createContext({} as PlayerContextData);

export function APIContextProvider(props: APIProviderProps) {
  const [currentMeal, setCurrentMeal] = useState({} as mealType);

  async function getRandomMeal() {
    try {
      const meal = await MealAPI.getRamdom();

      setCurrentMeal(meal);
      return meal;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <APIContext.Provider value={{ currentMeal, getRandomMeal }}>
      {props.children}
    </APIContext.Provider>
  );
}

export const useMeal = () => {
  return useContext(APIContext);
};
