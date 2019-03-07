import React from 'react';
// import { Card, Button, Icon, Image } from 'semantic-ui-react'
import {Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageAvatar from './Avatar.js';
import cat from '../cat.png'
import dog from '../dog.png'


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PetCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  shortenedDescription = (description) => {
    if (description) {
      return description.length > 100 ? description.substring(0, 100) + "..." : description
    }
  }

  render() {
    const { classes, pet, handleLike, handleReject } = this.props
    
    return (
      <div style={{padding: "150px"}}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
             <ImageAvatar photo={((pet.species === "cat")? cat : dog)}/>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={pet.name}
          subheader = { `${pet.age} years old` }
        />
        <CardMedia
          className={classes.media}
          image={pet.photo}
          title="Animal photo"
        />
        <CardContent>
          <Typography component="p">
          {pet.breed ? `${pet.breed}` : "" }
          </Typography>
          <Typography component="p">
          {pet.colour ? `Colour: ${pet.colour}` : "" }
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {pet.description}
            </Typography>
            {/* <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography> */}
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }
}

PetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCard);


// const PetCard = ({pet, handleLike, handleReject}) => {

//   const shortenedDescription = (description) => {
//     if (description) {
//       return description.length > 100 ? description.substring(0, 100) + "..." : description
//     }
//   }

//   return (
//     <div style={{padding: "150px"}}>
//     <Card>
//       <Image src={pet.photo} />
//       <Button.Group size='large'>
//           <Button circular color='red' icon='close' onClick={handleReject} />
//           <Button.Or />
//           <Button circular color='green' icon='heart' onClick={handleLike} />
//       </Button.Group>
//       <Card.Content>
//         <Card.Header>{pet.name}</Card.Header>
//         <Card.Meta>
//           <span className='date'>{pet.breed}</span>
//         </Card.Meta>
//         <Card.Meta> 
//           <span className='date'>{pet.colour ? `Colour: ${pet.colour}` : "" }</span>
//         </Card.Meta>
//         <Card.Meta> 
//           <span className='date'>Age: {pet.age}</span>
//         </Card.Meta>
//         <Card.Description>{true ? pet.description : shortenedDescription(pet.description)}</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//           <Icon name='info circle' />
//           See more about {pet.name}!
//       </Card.Content>
//     </Card>
//     </div> 
    
//     )
// }

//   export default PetCard

