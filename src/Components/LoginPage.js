import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import API from '../API'
import {Redirect, Route} from 'react-router-dom'
import ImageAvatar from './Avatar'
import cat from '../cat.png'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import '../App.css';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginPage extends Component {
  state = {
    username: null,
    password: null,
    loginShown: false
  }
  

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    API.login(this.state)
    .then(data => {
      if (data.error) {
        console.log("bad")
        alert("Incorrect Details")
      } else {
        console.log("good")
        this.props.login(data)
        this.props.history.push("/adopter")
      }
    }) 
    // this.props.onLogin(this.state);
  }

  showLogin = () => {
    this.setState({loginShown: true})
  }

  render() {
    if (localStorage.token && localStorage.token !== "undefined") return <Redirect to="/adopter" />
    const login = (
        <div> 
          <section className="text-white mb-0" id="login">
              <Element name="login" className="element" >
                <Paper className={this.props.classes.paper}>
                  <ImageAvatar photo={cat}/>
                  <Typography component="h1" variant="h5">
                    Log in
                  </Typography>
              <form onSubmit={this.handleSubmit} className={this.props.classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input onChange={this.handleChange} id="username" name="username" autoComplete="username" autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input onChange={this.handleChange} name="password" type="password" id="password" autoComplete="current-password" />
                  </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.props.classes.submit}
                >
                  Log in
                </Button>
                </form>
                </Paper>
              </Element>
          </section>
        </div>
    )

    const about = (
      <section className="bg-primary text-white mb-0" id="about">
      <div className="container" style={{padding: "150px"}}>
        <h3 className="text-center text-white">
          <p>Purrfect Match helps find homes for animals in need.</p> 
          <p>You can make a page for animals who are looking for a new family, or scroll through the pets on the site until you find your Purrfect Match.</p> </h3>
        <hr className="star-light mb-5"/>
        <div className="row">
          <Button onClick={this.showLogin} >Log In</Button>
        </div>
      </div>
    </section>
    )

      return (
        <div className='bg text-white mb-0'> 
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <GridColumn>
                    <div>
                        <header className="masthead text-white text-center">
                            <div className="container">
                                    <img className="img-fluid mb-5 d-block mx-auto" src={cat} />
                                <h2 className="font-weight-light mb-0">Find your</h2>
                                <hr class="star-light"/>
                                <h1 className="mb-0">Purrfect Match</h1>
                            </div>
                        </header>
                    </div>
                    </GridColumn> 
                    <GridColumn> 
                      {this.state.loginShown ? login : about}
                    </GridColumn> 
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

  LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LoginPage);
