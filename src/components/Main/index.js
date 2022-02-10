import React, { useState } from 'react';

import Grid from "../Grid";
import API from '../../API';

import Thumb from '../Thumb';


const Main = () => {
  
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState([]);
  
  const fetchCharacters = async () => {
    await API.fetchAll().then(res => setState(res));
  };

  if(!loaded){
    fetchCharacters();
    setLoaded(!loaded);
  }
  
  console.log(state);

  return(
    <Grid header="CHARACTERS">
      {state.slice(0, 15).map(character => (
       <Thumb key={character.id} 
        image={character.image} 
        name={character.name} 
        url={character.wiki}
        species={character.species}
        height={character.height}
       />
      ))}
    </Grid>
  );
};

export default Main;