import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  chipWrapper: {
    marginBottom: theme.spacing.unit * 5,
  },
});


class FilterDropdown extends React.Component {
    state = {
        filters: {
            maxAge: 40,
            minAge: 0,
            catOrDog: "Both",
            colours: '' ,
            open: false
        }
    }

  handleChange = key => (event, value) => {
      let filterClone = {...this.state.filters}
      filterClone[key] = value
        this.setState({
          filters: filterClone
        }, () => {
            if (this.state.filters) { 
                this.props.changeAppState(this.state.filters) 
            }
        });
        
        // debugger
        
    }
    // this.props.changeAppState(this.state.filters)


  handleDeleteExample = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  };

  componentDidMount () {
      if (this.props.filters) {
        return this.setState({filters: this.props.filters})
      }
    }


  render() {
    const { classes } = this.props;
    const { maxAge, minAge, catOrDog, colours } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>Cat or Dog?</FormLabel>
                  <RadioGroup
                    row
                    name="catOrDog"
                    aria-label="catOrDog"
                    value={catOrDog}
                    onChange={this.handleChange('catOrDog')}
                  >
                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                    <FormControlLabel value="Cat" control={<Radio />} label="Cat" />
                    <FormControlLabel value="Dog" control={<Radio />} label="Dog" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>Colour</FormLabel>
                  <RadioGroup
                    row
                    name="colours"
                    aria-label="colours"
                    value={colours}
                    onChange={this.handleChange('colours')}
                  >
                    <FormControlLabel value="All" control={<Radio />} label="All" />
                    {}
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="custom" control={<Radio />} label="custom" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

FilterDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterDropdown);