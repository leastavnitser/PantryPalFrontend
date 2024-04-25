import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { IngredientsShow } from "./IngredientsShow";
import { PantryItemsIndex } from "./PantryItemsIndex";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { Signup } from "./Signup";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };
  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantry_items, response.data]);
      successCallback();
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };
  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };

  useEffect(handleIndexIngredients, []);
  return (
    <main>
      <h1>Welcome to PantryPal!</h1>
      <div className="container">
        <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />
        <IngredientsNew onCreateIngredient={handleCreateIngredient} />
        <Modal show={isIngredientsShowVisible} onClose={handleClose}>
          <IngredientsShow ingredient={currentIngredient} />
        </Modal>

        <PantryItemsIndex />
        <Login />
        <Signup />
        <LogoutLink />
      </div>
    </main>
  );
}
