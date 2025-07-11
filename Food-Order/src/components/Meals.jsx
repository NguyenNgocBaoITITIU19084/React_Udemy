import { useEffect, useState } from "react";

import MealItem from "./MealItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function featchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // some error is here
      }

      const data = await response.json();
      setLoadMeals(data);
    }

    featchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
