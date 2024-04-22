/* eslint-disable react/prop-types */
export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All Ingredients</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {props.ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <div key={ingredient.id} className="border-warning mb-3">
              <div className="card">
                <img src={ingredient.image_url} className="card-img-top" alt="..." />
                <h2>{ingredient.name}</h2>
                <button onClick={() => props.onShowIngredient(ingredient)} className="btn btn-danger-">
                  Add to myPantry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
