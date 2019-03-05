import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import API from '../API'
import {Redirect, Route} from 'react-router-dom'
import ImageAvatar from './Avatar'
import cat from '../cat.png'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Grid, GridColumn } from 'semantic-ui-react'




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
    password: null
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

  render() {
    if (localStorage.token && localStorage.token !== "undefined") return <Redirect to="/adopter" />

      return (
        <div className='bg text-white mb-0'> 
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <GridColumn>
                    <div>
                        <header className="masthead text-white text-center">
                            <div className="container">
                                <h3 className="font-weight-light mb-0">Find your</h3>
                                    <img className="img-fluid mb-5 d-block mx-auto" src={cat} />
                                <h2 className="mb-0">Purrfect Match</h2>
                            </div>

                            <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li><Link activeClass="active" className="test1" to="login" spy={true} smooth={true} duration={500} delay={100} >Log In</Link></li>
                                <li><Link activeClass="active" className="test1" to="signup" spy={true} smooth={true} duration={500} delay={100}>Sign Up</Link></li>
                            </ul>
                            </div>
                        </header>
                    </div>
                    </GridColumn> 
                    <GridColumn> 
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
