import React, { useState } from 'react';

import Grid from "../Grid";
import API from '../../API';

import Thumb from '../Thumb';
import { SearchBar, Content } from './styles';

const Main = () => {
  
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const fetchCharacters = async () => {
    await API.fetchAll().then(res => setState(res));
  };

  if(!loaded){
    fetchCharacters();
    setLoaded(!loaded);
  }

  console.log(state);

  return(
  <>
    <SearchBar>
      <Content>
        <input type="text" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}} value={searchTerm} />
      </Content>
    </SearchBar>
    <Grid header="CHARACTERS">
      {state.filter((character) => {
        if(searchTerm.length >= 3){
          if(searchTerm === ""){
            return character;
          } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return character;
          }
        } else {
          return character;
        }
      }).slice(0, 15).map(character => (
       <Thumb key={character.id} 
        image={character.image} 
        name={character.name} 
        url={character.wiki}
        species={character.species}
        height={character.height}
       />
      ))}
    </Grid>
  </>
  );
};

export default Main;