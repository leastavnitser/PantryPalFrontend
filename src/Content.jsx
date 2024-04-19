import { IngredientsIndex } from "./IngredientsIndex";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Content() {
  const ingredients = [
    { id: 1, name: "Flour", image_url: "flour.png" },
    { id: 2, name: "Sugar", image_url: "Sugar.png" },
    { id: 3, name: "Oil", image_url: "Oil.png" },
    { id: 4, name: "Eggs", image_url: "Eggs.png" },
  ];
  return (
    <main>
      <h1>Welcome to React!</h1>
      <IngredientsIndex ingredients={ingredients} />
      <PantryItemsIndex />
    </main>
  );
}
