import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import FilterDropdown from './FilterDropdown'

const styles = theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
  });

class Filters extends React.Component {
    state = {
        open: false
      }

      handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
    
        this.setState({ open: false });
      };
    
      
  render() {
    const { classes, filters } = this.props;
    const { open } = this.state;

    return (
        <div> 
            <Button
                buttonRef={node => {
                  this.anchorEl = node
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
                className="nav-link py-3 px-0 px-lg-3"
            >
                <i className="fas fa-bars"></i> Filter Pets
            </Button>

            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <FilterDropdown filters={filters} changeAppState={this.props.changeAppState}/>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
            </Popper>
        </div>
  );
}
}

Filters.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filters);