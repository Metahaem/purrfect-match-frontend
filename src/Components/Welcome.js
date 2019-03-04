import React from 'react';
// import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import LoginPage from './LoginPage'
import '../App.css'
import cat from '../cat.png'
import {Redirect} from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class Welcome extends React.Component {

    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    scrollToTop() {
        scroll.scrollToTop();
    } 

    render() {
            if (this.props.user) return <Redirect to="/adopter" />

        return (
            <div>
                <div>
                    <header className="bg-primary masthead text-white text-center">
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
             
            
            <section className="bg-primary text-white mb-0" id="login">
            <Element name="login" className="element" >
                <LoginPage login={this.props.login} />
            </Element>
            </section>



            </div>
        )
        {/* <a onClick={this.scrollToTop}>To the top!</a> */}
    }
}

export default Welcome