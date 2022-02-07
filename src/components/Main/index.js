import React, { useState } from 'react';

import Grid from "../Grid";
import API from '../../API';

var loaded = false;

const Main = () => {
  
  const [state, setState] = useState([]);
  
  const fetchCharacters = async () => {
    await API.fetchAll().then(res => setState(res));
  };

  if(!loaded){
    fetchCharacters();
    loaded = true;
  }
  
  console.log(state);

  return(
    <Grid header="Characters" >
      {state.map(character => (
        <>
        <p>{character.name}</p>
        <p>{character.height}</p>
        </>
      ))}
    </Grid>
  );
};

export default Main;