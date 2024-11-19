"use client";

import { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  console.log("Ingredient:", ingredient);
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async (ingredient) => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.length === 0 ? (
          <li>No meal ideas found</li>
        ) : (
          meals.map((meal) => (
            <li key={meal.idMeal}>
              <p>{meal.strMeal}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MealIdeas;
