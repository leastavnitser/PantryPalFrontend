import { useState, useEffect } from "react";

export function RecipesIndex() {
  const recipes = () => {
    console.log("recipes");
    axios.get("https://tasty.p.rapidapi.com/recipes/list").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  return <h1>this is the recipes page.</h1>;
}
