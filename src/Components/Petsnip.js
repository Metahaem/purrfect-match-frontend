import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageAvatar from './Avatar'
import {Route, Link} from 'react-router-dom'
import PetInfo from './PetInfo'
import '../App.css';

const Petsnip = ({pet}) => {
  
    return (
        <div>
        <Link to={`/adopter/pets/${pet.id}`}>
            <ListItem key={pet.id}>
              <ListItemIcon>
                <ImageAvatar photo={pet.photo}/>
              </ListItemIcon>
              <ListItemText className='sidebar-text' primary={pet.name} />
            </ListItem>
        </Link>
        </div>
      )
  }
  
export default Petsnip