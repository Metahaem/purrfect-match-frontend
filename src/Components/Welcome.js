import React from 'react';
// import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import LoginPage from './LoginPage'
import '../App.css'
import cat from '../cat.png'

  
class Welcome extends React.Component {

    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    scrollToTop() {
        scroll.scrollToTop();
    } 

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h2>Welcome!</h2>
                    <img src={cat} />
                    <ul className="nav navbar-nav">
                        <li><Link activeClass="active" className="test1" to="login" spy={true} smooth={true} duration={500} >Log In</Link></li>
                        <li><Link activeClass="active" className="test1" to="signup" spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                    </ul>
                </div>
             
            
            <section class="bg-primary text-white mb-0" id="login">
            <Element name="login" className="element" >
                <LoginPage />
            </Element>
            </section>



            </div>
        )
        {/* <a onClick={this.scrollToTop}>To the top!</a> */}
    }
}

export default Welcome