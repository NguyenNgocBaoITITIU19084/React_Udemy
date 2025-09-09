import useHttp from "../hooks/useHttp";
import Error from "./Error";

import MealItem from "./MealItem";
const configRequest = {};

export default function Meals() {
  const {
    isLoading,
    fetchData: loadMeals,
    error,
  } = useHttp("http://localhost:3000/meals", configRequest, []);

  if (isLoading) {
    return <p className="center">Loading Some Meals...</p>;
  }

  if (error) {
    return <Error title="Fail to fetch the meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
