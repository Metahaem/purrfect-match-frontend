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
import heart from '../heart.png'
import cross from '../cross.png'
import {Button} from 'semantic-ui-react'




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
  
  render() {
    const { classes, pet, handleLike, handleReject, handleExpandClick, expanded, likedPets, backToUnseen } = this.props
    
    const crossButton = (<IconButton onClick={handleReject}>
    <ImageAvatar photo={cross} />
  </IconButton>)

  const heartButton = (<IconButton onClick={handleLike} src={heart}>
    <ImageAvatar photo={heart} />
  </IconButton>)

    return (
      <div style={{padding: "150px"}}>
      {likedPets.find(eachPet=>eachPet.id===pet.id) ? <Button onClick={backToUnseen}>Back to unseen pets</Button> : null}
      <Card className={classes.card}>
        <CardHeader
          avatar={
             <ImageAvatar photo={((pet.species === "cat")? cat : dog)}/>
          }
          title={pet.name}
          subheader = { 
            <div>
          <li>{pet.age} years old</li>
        
          <li>{pet.breed ? `${pet.breed}` : "" }</li>

          {pet.colour ? <li> Colour: {pet.colour}</li> : "" }
          </div>
          }
  
          />
        <CardMedia
          className={classes.media}
          image={pet.photo}
          title="Animal photo"
        />
        <CardActions className={classes.actions} disableActionSpacing>

        {likedPets.find(eachPet=>eachPet.id===pet.id) ? null : crossButton}

          <div style={{paddingRight: '4px'}}> <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </div>

        {likedPets.find(eachPet=>eachPet.id===pet.id) ? null : heartButton}

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {pet.description}
            </Typography>
            <Typography paragraph>
              {pet.name} is currently living in an adoption home. <a href={pet.link}>Click here</a> for details on how to adopt.
            </Typography>
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


