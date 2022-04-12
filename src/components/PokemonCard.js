import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, frontSprites, backSprites}) {
  const [front, setFront] = useState(true)

  function toggleCard() {
    setFront(front => !front)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={front ? frontSprites : backSprites} onClick={toggleCard} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
