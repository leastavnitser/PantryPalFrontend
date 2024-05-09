// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import { useEffect, useState } from "react";
// import axios from "axios";

// export function RecipesIndex() {
//   const [allRecipes, setAllRecipes] = useState([]);
//   useEffect(() => {
//     getRecipes();
//   }, []);
//   const getRecipes = async () => {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=15`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log(data);
//       setAllRecipes(data.recipes);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="">
//       <h1>All Recipes</h1>
//       <div className="row row-cols-3 row-cols-md-3 ">
//         <div>
//           {allRecipes.map((recipe) => {
//             return (
//               <div className="card" key={recipe.id}>
//                 <div className="pantry-cards">
//                   <h3>{recipe.title}</h3>
//                   <img className="pantry-img" src={recipe.image} alt={recipe.name} />
//                   <div>
//                     Recipe Link:
//                     <h4>{recipe.sourceUrl}</h4>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
export function RecipesIndex() {
  const [allRecipes, setAllRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setAllRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container mt-3">
      <h1>favorites:</h1>
      <h1 className="mb-3 text-center">All Recipes</h1>
      <div className="row">
        {allRecipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-125">
              <img src={recipe.image} className="pantry-img" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <h3>View Recipe</h3>
                  </a>
                  <h3></h3>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
