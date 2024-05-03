import { useState } from "react";

const Card = ({ ingredient, onShowIngredient }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={ingredient.image_url} className="card-img-top" alt={ingredient.name} />
      </div>
      <div className="card_content">
        <h2 className="card_title">{ingredient.name}</h2>
        <button onClick={() => onShowIngredient(ingredient)} className="btn btn-danger">
          Add to myPantry
        </button>
      </div>
    </div>
  );
};

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredIngredients = props.ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchFilter.toLowerCase())
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };
  return (
    <div>
      <p></p>
      <div>
        <h2>Search Ingredients:</h2>
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="ingredient-suggestions"
          className="form-control"
          placeholder="Search for ingredients..."
        />
        <datalist id="ingredient-suggestions">
          {props.ingredients.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.name} />
          ))}
        </datalist>
        <div>
          <h2>Custom Ingredient</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col">
                Name: <input name="name" type="text" className="form-control" />
              </div>
              <div className="col">
                Image Url: <input name="image_url" type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-outline-danger">
                Create Ingredient
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1>All Ingredients</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {filteredIngredients.map((ingredient) => (
          <div key={ingredient.id} className="col">
            <Card ingredient={ingredient} onShowIngredient={props.onShowIngredient} />
          </div>
        ))}
      </div>
    </div>
  );
}
