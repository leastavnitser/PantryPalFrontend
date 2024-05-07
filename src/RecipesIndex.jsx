import { useState, useEffect } from "react";
import axios from "axios";

export function RecipesIndex() {
  const [allRecipes, setAllRecipes] = useState([]);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: "20",
      tags: "under_30_minutes",
    },
    headers: {
      "X-RapidAPI-Key": "5dc0cb5a8bmsh42b908dee10f404p11ec10jsn03a933050e52",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setAllRecipes(response);
    } catch (error) {
      console.error("Error making API call:", error);
    }
  }

  fetchData();
  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }

  // const recipes = () => {
  //   console.log("recipes");
  //   axios.get("https://tasty.p.rapidapi.com/recipes/list").then((response) => {
  //     console.log(response.data);
  //     setAllRecipes(response.data);
  //   });
  // };
  // useEffect(options, []);
  return <h1>this is the recipes page.</h1>;
}
