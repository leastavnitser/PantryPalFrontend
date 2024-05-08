import { useState, useEffect } from "react";
import axios from "axios";

export function RecipesIndex() {
  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apikey=${process.env.SPOONACULAR_API_KEY}&number=15`
    );
    const data = await api.json();
    console.log(data);
  };

  return <h1>this is the recipes page.</h1>;
}
