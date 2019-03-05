import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import {Route, Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ImageAvatars from './Avatar.js';

// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

// class PetCard extends React.Component {
//   state = { expanded: false };

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   shortenedDescription = (description) => {
//     if (description) {
//       return description.length > 100 ? description.substring(0, 100) + "..." : description
//     }
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <Card className={classes.card}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="Recipe" className={classes.avatar}>
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton>
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Dog"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/paella.jpg"
//           title="Paella dish"
//         />
//         <CardContent>
//           <Typography component="p">
//             foo
//           </Typography>
//         </CardContent>
//         <CardActions className={classes.actions} disableActionSpacing>
//           <IconButton aria-label="Add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="Share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={classnames(classes.expand, {
//               [classes.expandOpen]: this.state.expanded,
//             })}
//             onClick={this.handleExpandClick}
//             aria-expanded={this.state.expanded}
//             aria-label="Show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             <Typography paragraph>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//               minutes.
//             </Typography>
//             <Typography paragraph>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//               heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//               browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
//               chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
//               salt and pepper, and cook, stirring often until thickened and fragrant, about 10
//               minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
//             <Typography paragraph>
//               Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//               without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
//               to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
//               cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
//               minutes more. (Discard any mussels that don’t open.)
//             </Typography>
//             <Typography>
//               Set aside off of the heat to let rest for 10 minutes, and then serve.
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     );
//   }
// }

// PetCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PetCard);


const PetCard = ({pet, handleLike, handleReject}) => {

  const shortenedDescription = (description) => {
    if (description) {
      return description.length > 100 ? description.substring(0, 100) + "..." : description
    }
  }

  return (
    <div className="buddy">
    <Card>
      <Image src={pet.photo} />
      <Button.Group size='large'>
          <Button circular color='red' icon='close' onClick={handleReject} />
          <Button.Or />
          <Button circular color='green' icon='heart' onClick={handleLike} />
      </Button.Group>
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
        <Card.Description>{true ? pet.description : shortenedDescription(pet.description)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/pets/${pet.id}`}>
          <Icon name='info circle' />
          See more about {pet.name}!
        </Link>
      </Card.Content>
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