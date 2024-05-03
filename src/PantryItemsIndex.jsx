/* eslint-disable react/prop-types */
export function PantryItemsIndex(props) {
  const handleClick = (pantryItem) => {
    props.onDestroyPantryItem(pantryItem);
  };
  if (!props.pantryItems || props.pantryItems.length === 0) {
    return (
      <div>
        <h1>myPantry Items:</h1>
        <h2>No items found!</h2>
        <h4> Please log in to view items in your pantry, or add items to your pantry if already logged in!</h4>
      </div>
    );
  }
  return (
    <div>
      <h1>myPantry Items:</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.pantryItems.map((pantryItem) => (
          <div key={pantryItem.id}>
            <div className="border-warning mb-3">
              <div className="card">
                <h5>Category: {pantryItem.category}</h5>
                <h4>{pantryItem.name}</h4>
                <p>Amount: {pantryItem.amount}</p>
                <p>Expiration: {pantryItem.use_by_date}</p>
                <img src={pantryItem.image_url} className="card-img-top" alt="..." />
                <button className="btn btn-danger" onClick={() => props.onShowPantryItem(pantryItem)}>
                  Update
                </button>
                <p></p>
                <button className="btn btn-danger" onClick={() => handleClick(pantryItem)}>
                  Delete PantryItem
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
