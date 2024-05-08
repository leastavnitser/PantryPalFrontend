import { useState, useEffect } from "react";
import axios from "axios";

export function RecipesIndex() {
  const getRecipes = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.SPOONACULAR_API_KEY}`);
  };

  return <h1>this is the recipes page.</h1>;
}
