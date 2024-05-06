/* eslint-disable react/prop-types */

export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const number = formData.get("number");
    const unit = formData.get("unit");
    const amount = `${number} ${unit}`;
    formData.set("amount", amount);

    props.onCreatePantryItem(formData, () => event.target.reset());
    window.location.href = "/pantry";
  };
  return (
    <div>
      <h2>Ingredient Information</h2>

      <img src={props.ingredient.image_url} className="modal-img" alt="ingredient image" />
      <h3 className="mt-1">{props.ingredient.name}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input defaultValue={props.ingredient.id} name="ingredient_id" type="hidden" />
        </div>
        <div className="row mb-3">
          <div className="amount">
            <div className="col-sm-3">
              Amount: <input className="form-control" name="number" type="text" />
              <div className="col-sm-9">
                <select className="form-control" name="unit">
                  <option value="oz">Ounces (oz)</option>
                  <option value="tbsp">Tablespoons (tbsp)</option>
                  <option value="oz">Teaspoons</option>
                  <option value="oz">Cups</option>
                  <option value="oz">Pieces</option>
                  <option value="lb">Pounds (lb)</option>
                  <option value="g">Grams (g)</option>
                  <option value="kg">Kilograms (kg)</option>
                  <option value="ml">Milliliters (ml)</option>
                  <option value="l">Liters (l)</option>
                  <option value="cup">Cups</option>
                  <option value="Shred">Shreds</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          Category:
          <select className="form-control" name="category">
            <option value="baking">Baking</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="misc">Miscellaneous</option>
          </select>
        </div>
        <div className="mb-3">
          Use By Date: <input className="form-control" name="use_by_date" type="text" />
          <small>DD-MM-YYYY</small>
        </div>
        <button type="submit" className="btn btn-danger">
          Add to Pantry!
        </button>
      </form>
    </div>
  );
}
