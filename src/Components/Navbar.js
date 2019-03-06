import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import '../scss/freelancer.scss';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/fontawesome-free/css/all.min.css'
import '../vendor/magnific-popup/magnific-popup.css'
import '../css/freelancer.min.css'
import ImageAvatar from './Avatar'
import cat from '../cat.png'
// import '../vendor/jquery/jquery.min.js'
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../vendor/jquery-easing/jquery.easing.min.js'
// import '../vendor/magnific-popup/jquery.magnific-popup.min.js'






const Navbar = ({logout}) => {
    return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <ImageAvatar photo={cat}/>    
      <div className="container">
      <a className="navbar-brand" href="#page-top">Purrfect Match</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3" href="#get-started">Get Started</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3" href="#about">About</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3" onClick={logout}>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    )
  }

  export default Navbar