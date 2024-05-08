/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";

export function RecipesIndex() {
  const [allRecipes, setAllRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=15`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setAllRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>this is the recipes page.</h1>
      {allRecipes.map((recipe) => {
        <div key={recipe.id}>{recipe.title}</div>;
      })}
    </div>
  );
}
