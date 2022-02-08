import React from "react";

import { Wrapper, Image } from "./styles";

const Thumb = ({ image, name, url, species, height }) => {

  const str = species.slice(1);

  return (  
    <div>
      <a href={url} rel="noreferrer" target="_blank">
      <Wrapper>
        <Image src={image} alt={name} />
        <h3>{name}</h3>
        <p>species: {species.charAt(0).toUpperCase() + str}</p>
        <p>height: {height ? (height + "m") : ("unknown")}</p>
        <p></p>
      </Wrapper>
      </a>
    </div>
  );
};

export default Thumb;