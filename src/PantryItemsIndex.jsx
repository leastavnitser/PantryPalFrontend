import { useState, useEffect } from "react";
export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>myPantry Items</h1>
      {props.pantry_items.map((pantry_item) => (
        <div key={pantry_item.id}>
          <div key={pantry_item.id} className="border-warning mb-3"></div>
        </div>
      ))}
    </div>
  );
}
