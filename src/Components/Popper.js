import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import PetCard from './PetCard'

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SimplePopper extends React.Component {


  render() {
    const { classes, open, popper } = this.props;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
        <Popper id={id} popper={popper} open={!!popper} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                    <PetCard 
                        className="ui middle aligned centered" 
                        pet={popper}
                     />
                     </Paper>
                    </Fade>
                )}
            </Popper>
      </div>
    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopper);