import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import '../scss/freelancer.scss';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/fontawesome-free/css/all.min.css'
import '../vendor/magnific-popup/magnific-popup.css'
import '../css/freelancer.min.css'
// import '../vendor/jquery/jquery.min.js'
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../vendor/jquery-easing/jquery.easing.min.js'
// import '../vendor/magnific-popup/jquery.magnific-popup.min.js'






const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Purrfect Match</a>
      <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#get-started">Get Started</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#log-in">Log In</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    )
  }

  export default Navbar