import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import '../scss/freelancer.scss';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/fontawesome-free/css/all.min.css'
import '../vendor/magnific-popup/magnific-popup.css'
import '../css/freelancer.min.css'
import ImageAvatar from './Avatar'
import cat from '../cat.png'
import Grid from '@material-ui/core/Grid'
// import '../vendor/jquery/jquery.min.js'
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../vendor/jquery-easing/jquery.easing.min.js'
// import '../vendor/magnific-popup/jquery.magnific-popup.min.js'


class Navbar extends Component {

  state = {
    maxAge: '',
    minAge: '',
    catOrDog: '',
    breeds: '', 
    colours: '' 
  }

  render() {
    return (
    <Grid container spacing={6}>
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <Grid item xs={6}> 
        </Grid>
        <Grid item xs={6}>
        <ImageAvatar photo={cat}/> 
        </Grid>   
        <Grid item xs={12}>
          <div>
            <a className="navbar-brand" href="#page-top">Purrfect Match</a>
          </div>
          </Grid>
          <Grid container xs={24}>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
          <Grid item xs={12}> 
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3" href="#get-started"><i className="fas fa-bars"></i> Filter Pets</a>
            </li>
            </Grid>
            <Grid item xs={12}> 
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3" href="#log-in">Log Out</a>
            </li>
            </Grid>
          </ul>
        </div>
        </Grid>
      
      </nav>
    </Grid>
    )
  }
}

  export default Navbar