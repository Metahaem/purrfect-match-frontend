import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const shortenedDescription = (description) => {
  console.log(typeof(description))
  return description
}

const PetCard = props => (

    <Card>
      <Image src={props.pet.photo} />
      <Card.Content>
        <Card.Header>{props.pet.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Age: {props.pet.age}</span>
        </Card.Meta>
        <Card.Description>{shortenedDescription(props.pet.description)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          See more about {props.pet.name}!
        </a>
      </Card.Content>
    </Card>
  )
  
  export default PetCard