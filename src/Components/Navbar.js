import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import '../scss/freelancer.scss';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/fontawesome-free/css/all.min.css'
import '../vendor/magnific-popup/magnific-popup.css'
import '../css/freelancer.min.css'
import {Button} from 'semantic-ui-react'
import ImageAvatar from './Avatar'
import cat from '../cat.png'
import Grid from '@material-ui/core/Grid'
import Filters from './Filters'
// import '../vendor/jquery/jquery.min.js'
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../vendor/jquery-easing/jquery.easing.min.js'
// import '../vendor/magnific-popup/jquery.magnific-popup.min.js'



const Navbar = (props) => {
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
            
            <Filters 
              filtersVisible={props.filterMenu} 
              filters={props.filters} 
              setFilters={props.setFilters}
              changeAppState={props.changeAppState}
            />
            </li>
            </Grid>
            <Grid item xs={12}> 
            <li className="nav-item mx-0 mx-lg-1">
              <Button onClick={props.logout}>
                Log Out
              </Button>
            </li>
            </Grid>
          </ul>
        </div>
        </Grid>
      
      </nav>
    </Grid>
    )
  }

  export default Navbar