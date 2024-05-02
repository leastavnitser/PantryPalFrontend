import axios from "axios";
import { Routes, Route } from "react-router-dom";
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
  const [currentIngredient, setCurrentIngredient] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };
  const [pantryItems, setPantryItems] = useState([]);
  const [isPantryItemsShowVisible, setIsPantryItemsShowVisible] = useState([]);
  const [currentPantryItem, setCurrentPantryItem] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantry_items, response.data]);
      successCallback();
    });
  };
  // const handleShowPantryItem = (pantry_item) => {
  //   console.log("handleShowPantryItem", pantry_item);
  //   setIsPantryItemsShowVisible(true);
  //   setCurrentPantryItem(pantry_item);
  // };

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
  const handleDestroyPantryItem = (pantryItem) => {
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/pantry_items/${pantryItem.id}.json`).then((response) => {
      setPantryItems(pantryItems.filter((pantryItem) => pantryItem.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);
  return (
    <main className="container">
      <h1>Welcome to PantryPal!</h1>
      <Routes>
        <Route
          path="/"
          element={<IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />}
        />
        <Route
          path="/pantry"
          element={<PantryItemsIndex onDestroyPantryItem={handleDestroyPantryItem} pantryItems={pantryItems} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />ˆ
      <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <IngredientsShow ingredient={currentIngredient} onCreatePantryItem={handleCreatePantryItem} />
      </Modal>
    </main>
  );
}
