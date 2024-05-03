// /* eslint-disable react/prop-types */
// export function IngredientsIndex(props) {
//   return (
//     <div>
//       <h1>All Ingredients</h1>
//       <div className="row row-cols-1 row-cols-md-3 g-5">
//         {props.ingredients.map((ingredient) => (
//           <div key={ingredient.id}>
//             <div key={ingredient.id}>
//               <div className="card">
//                 <img src={ingredient.image_url} className="card-img-top" alt="..." />
//                 <h2>{ingredient.name}</h2>
//                 <button onClick={() => props.onShowIngredient(ingredient)} className="btn btn-danger-">
//                   Add to myPantry
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }import React from 'react';  // Ensure React is imported

// Correctly declare the Card component using function or arrow function

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

// IngredientsIndex component using the Card component
export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All Ingredients</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {props.ingredients.map((ingredient) => (
          <div key={ingredient.id} className="col">
            <Card ingredient={ingredient} onShowIngredient={props.onShowIngredient} />
          </div>
        ))}
      </div>
    </div>
  );
}
