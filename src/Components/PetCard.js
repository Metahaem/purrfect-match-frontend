import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'



const PetCard = ({pet, handleLike, handleReject}) => {

  const shortenedDescription = (description) => {
    if (description) {
      return description.length > 100 ? description.substring(0, 100) + "..." : description
    }
  }

  let infoSwitch = false

  const moreInfo = () => {
    // infoSwitch = true
    console.log("moreinfo!!")
  }
  
  return (
    <div className="buddy">
    <Card>
      <Image src={pet.photo} />
      <Card.Content>
        <Card.Header>{pet.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{pet.breed}</span>
        </Card.Meta>
        <Card.Meta> 
          <span className='date'>{pet.colour ? `Colour: ${pet.colour}` : "" }</span>
        </Card.Meta>
        <Card.Meta> 
          <span className='date'>Age: {pet.age}</span>
        </Card.Meta>
        <Card.Description>{infoSwitch ? pet.description : shortenedDescription(pet.description)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/pets/${pet.id}`}>
          <Icon name='info circle' />
          See more about {pet.name}!
        </Link>
      </Card.Content>
      <Button circular positive icon='heart' onClick={handleLike} />
      <Button circular negative icon='close' onClick={handleReject} />
    </Card>
    </div> 
    
    )
}

  
  export default PetCard

//   <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css">
// <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
// <script src="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>
// </head>
// <body>
//   <div id="container">
//     <div class="buddy" style="display: block;"><div class="avatar"  style="display: block; background-image: url(https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg)"></div></div>
//     <div class="buddy"><div class="avatar" style="display: block; background-image: url(http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg)"></div></div>  
//     <div class="buddy"><div class="avatar" style="display: block; background-image: url(http://w1nd.cc/promo/347.jpg)"></div></div>  
// <div class="buddy"><div class="avatar" style="display: block; background-image: url(http://ell.h-cdn.co/assets/cm/15/01/54a769be3112d_-_elle-rata-insta-1-24375723.png)"></div></div>  
//     <div class="buddy"><div class="avatar" style="display: block; background-image: url(http://hircsarda.hu/wp-content/uploads/2016/03/orban1.jpeg)"></div></div>  
//   </div>
// </body>
// </html>