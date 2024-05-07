/* eslint-disable react/prop-types */
export function PantryItemShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const number = formData.get("number");
    const unit = formData.get("unit");
    const total = `${number} ${unit}`;
    formData.set("amount", total);

    props.onUpdatePantryItem(props.pantryItem.id, formData, () => event.target.reset());
    window.location.href = "/pantry";
  };

  return (
    <div>
      <img src={props.pantryItem.image_url} className="pantry-img" alt="pantryItem image" />
      <h5 className="mt-1">Update {props.pantryItem.name}:</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input defaultValue={props.pantryItem.id} name="pantryItem_id" type="hidden" />
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            Update Amount:{" "}
            <input defaultValue={props.pantryItem.amount} className="form-control" name="number" type="text" />
            <div className="col-sm-9">
              <select className="form-control" name="unit">
                <option value="oz">Ounces (oz)</option>
                <option value="tbsp">Tablespoons (tbsp)</option>
                <option value="tsp">Teaspoons</option>
                <option value="cups">Cups</option>
                <option value="pieces">Pieces</option>
                <option value="lb">Pounds (lb)</option>
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (l)</option>
                <option value="shreds">Shreds</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3">
          Category:
          <select className="form-control" name="category" defaultValue={props.pantryItem.category}>
            <option value="baking">Baking</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="misc">Miscellaneous</option>
          </select>
        </div>
        <div className="mb-3">
          Use By Date:{" "}
          <input defaultValue={props.pantryItem.use_by_date} className="form-control" name="use_by_date" type="text" />
          <small>DD-MM-YYYY</small>
        </div>
        <button type="submit" className="btn btn-danger">
          Update myPantry
        </button>
      </form>
    </div>
  );
}
