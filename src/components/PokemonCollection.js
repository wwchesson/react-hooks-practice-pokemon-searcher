import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {

  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map(p => (
        <PokemonCard 
        key={p.id}
        name={p.name}
        hp={p.hp}
        frontSprites={p.sprites.front}
        backSprites={p.sprites.back}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
