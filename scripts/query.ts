import { BASE_URL } from "./api"
import { query } from "./api/query.graphql";
import {orderBy} from 'lodash';


const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const pokemon = data.data 
 
  const dataArray = orderBy(pokemon.pokemons.results, ['name'], ['desc'])

  dataArray.map(({name, image}) => {
    document.querySelector('.results').innerHTML += `
        <div class="card">          
          <img src="${image}" class="card__img"/>
          <h2 class="card__title">${name}</h2>          
        </div>
    `
  })  
  return data;
};

getData();