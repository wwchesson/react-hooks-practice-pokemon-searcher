import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  function handleFormChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    event.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)

    })
    .then(r => r.json())
    .then(newPokemon => {
      onAddPokemon(newPokemon)
      setFormData({
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: ""
      })
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleFormChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl} onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl} onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
