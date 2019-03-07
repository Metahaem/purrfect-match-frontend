import React from 'react';
import ImageAvatar from './Avatar'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Route, Link} from 'react-router-dom'
import '../App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
    width: '100%',
    height: '50px'
  },
});



function Petsnip(props) {
  const { classes, pet, handleSnipClick, handleSnipDelete } = props;
  const {deleteIcon} = classes


  return (
    <div className={classes.root}>
   
      <Chip
        key={pet.id}
        avatar={<Avatar alt="Pet Image" src={pet.photo} />}
        label={pet.name}
        onDelete={(e) => handleSnipDelete(e, pet.id)}
        onClick={(e) => handleSnipClick(e, pet.id)}
        className={classes.chip}
      />
      
    </div>
  );
}

Petsnip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Petsnip);

