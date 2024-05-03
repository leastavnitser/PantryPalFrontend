import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { IngredientsShow } from "./IngredientsShow";
import { PantryItemsIndex } from "./PantryItemsIndex";
import { PantryItemShow } from "./PantryItemShow";
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
  const [isPantryItemShowVisible, setIsPantryItemShowVisible] = useState(false);
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
      setPantryItems([...pantryItems, response.data]);
      successCallback();
    });
  };

  const handleUpdatePantryItem = (id, params, successCallback) => {
    console.log("handleUpdatePantryItem", params);
    axios.patch(`http://localhost:3000/pantry_items/${id}.json`, params).then((response) => {
      setPantryItems(
        pantryItems.map((pantryItem) => {
          if (pantryItem.id === response.data.id) {
            return response.data;
          } else {
            return pantryItem;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };
  // const handleUpdatePantryItem = (id, params) => {
  //   axios.patch(`http://localhost:3000/pantry_items/${id}.json`, params).then((response) => {
  //     setPantryItems(
  //       pantryItems.map((pantryItem) => {
  //         if (pantryItem.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return pantryItem;
  //         }
  //       })
  //     );
  //     handleClose();
  //   });
  // };
  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };
  const handleShowPantryItem = (pantryItem) => {
    console.log("handleShowPantryItem", pantryItem);
    setIsPantryItemShowVisible(true);
    setCurrentPantryItem(pantryItem);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
    setIsPantryItemShowVisible(false);
  };
  const handleDestroyPantryItem = (pantryItem) => {
    // eslint-disable-next-line no-unused-vars
    console.log(pantryItem);
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/pantry_items/${pantryItem.id}.json`).then((response) => {
      setPantryItems(pantryItems.filter((pI) => pI.id !== pantryItem.id));
      handleClose();
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);
  return (
    <body>
      <main>
        <Routes>
          <Route />
          <Route
            path="/"
            element={
              <IngredientsIndex
                ingredients={ingredients}
                onShowIngredient={handleShowIngredient}
                onCreateIngredient={handleCreateIngredient}
              />
            }
          />
          <Route
            path="/pantry"
            element={<PantryItemsIndex pantryItems={pantryItems} onShowPantryItem={handleShowPantryItem} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<LogoutLink />} />
        </Routes>
        <IngredientsNew />
        <Modal show={isIngredientsShowVisible} onClose={handleClose}>
          <IngredientsShow ingredient={currentIngredient} onCreatePantryItem={handleCreatePantryItem} />
        </Modal>
        <Modal show={isPantryItemShowVisible} onClose={handleClose}>
          <PantryItemShow
            pantryItem={currentPantryItem}
            onUpdatePantryItem={handleUpdatePantryItem}
            onDestroyPantryItem={handleDestroyPantryItem}
          />
        </Modal>
      </main>
    </body>
  );
}
