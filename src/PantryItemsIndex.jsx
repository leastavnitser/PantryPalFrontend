export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>myPantry Items</h1>
      <div className="">
        {props.pantry_items.map((pantry_item) => (
          <div key={pantry_item.id}>
            <div key={pantry_item.id} className="border-warning mb-3">
              <p>{pantry_item.ingredient_id.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
