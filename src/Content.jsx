import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Content() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexIngredients, []);
  return (
    <main>
      <h1>Welcome to React!</h1>
      <IngredientsIndex ingredients={ingredients} />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <PantryItemsIndex />
    </main>
  );
}
