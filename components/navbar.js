// Components
import Link from 'next/link'
import React from 'react'
import Content from '../components/content'
import Section from '../components/section'
import GetInTouch from '../components/getintouch'

// Images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import YSLogoImg from '../public/images/ys-logo.svg'

const hamburger = <FontAwesomeIcon icon={faBars} />;
const buttonX = <FontAwesomeIcon icon={faTimesCircle} />;
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const open = buttonX;
const close = hamburger;

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      menu:close,
      contact:close
    };
    this.triggerMenu = this.triggerMenu.bind(this);
    this.triggerContactModal = this.triggerContactModal.bind(this);
  }

  triggerMenu(){
    // const menuState = this.state.menu == open ? close : open;
    // this.setState({menu: menuState});
    if(this.state.menu == open){
      this.setState({menu: close})
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    } else {
      this.setState({
        contact: close,
        menu: open
      });
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }

  triggerContactModal(){
    if(this.state.contact == open){
      this.setState({contact: close})
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    } else {
      this.setState({
        contact: open,
        menu: close
      })
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }

  closeAll(){
    this.setState({
      menu: close,
      contact: close
    });
  };

  enableScroll(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  render() {
    return(
      <nav>

        <div className="menu-wrapper">

          <Link href="/">
            <a onClick={this.enableScroll} className="logo">
              <img src={YSLogoImg}/>
            </a>
          </Link>
        
          <div className="contact-icons">
            <a className="email-icon" onClick={this.triggerContactModal}>{emailIcon}</a>
            <a className="phone-icon">{phoneIcon}</a>
            <div className="trigger-menu" onClick={this.triggerMenu}>{this.state.menu}</div>
          </div>

        </div>

        <div className="contact-modal">
          <Content>
            <Section>

              <GetInTouch />
              <h3 className="contact-info">Email us <a href="mailto:info@yellowsigns.co.uk">info@yellowsigns.co.uk</a> | Call us now <a href="tel:02089448984">020 8944 8984</a></h3>
            </Section>
          </Content>
        </div>

        <div className="main-links">
          <Link href="/">
            <a onClick={this.enableScroll} className="link">Home</a>
          </Link>
          <Link href="signage">
            <a onClick={this.enableScroll} className="link">Signage</a>
          </Link>
          <Link href="graphics-vinyl">
            <a onClick={this.enableScroll} className="link">Graphics & Vinyl</a>
          </Link>
          <Link href="coronavirus-signage">
            <a onClick={this.enableScroll} className="link">Coronavirus Signage</a>
          </Link>
          <Link href="process">
            <a onClick={this.enableScroll} className="link">Sign Making Process</a>
          </Link>
          <Link href="clients">
            <a onClick={this.enableScroll} className="link">Our Clients</a>
          </Link>
          <Link href="blog">
            <a onClick={this.enableScroll} className="link">Blog</a>
          </Link>
          <Link href="about">
            <a onClick={this.enableScroll} className="link">About</a>
          </Link>
          <Link href="contact">
            <a onClick={this.enableScroll} className="link">Contact</a>
          </Link>
        </div>

        <style jsx global>{`
          nav {
            width:100%;
          }

          .contact-icons {
            position: absolute;
            z-index: 2;
            padding: 1.6rem 1rem 1rem 1rem;
            right: 15%;
          }

          .contact-icons a {
            display: inline-block;
            width: 1.6rem;
            color: var(--yellow);
            margin-right: 1rem;
            transition:0.3s;
          }

          .trigger-menu {
            /* width: 1.75rem; */
            position: absolute;
            z-index: 2;
            /* margin: 1.75rem 1rem 1rem 3rem; */
            display: inline;
            transition:0.3s;
            cursor: pointer;
          }

          .trigger-menu .svg-inline--fa,
          .contact-icons .svg-inline--fa {
            width:1.65rem!important;
            height:1.65rem!important;
          }

          .email-icon,
          .phone-icon {
            cursor:pointer;
          }

          .main-links {
            text-align: center;
            height:100vh;
            width:100%;
            background:var(--yellow);
            opacity:0.90;
            position:absolute;
            transition:0.3s;
            padding-top:5rem;
            z-index:1;
          }

          a.link {
            font-family:'Roboto',sans-serif;
            font-weight:400;
            display:block;
            color:black;
            padding:1%;
            text-decoration:none;
            font-size:1.5rem;
            transition:.3s;
          } 

          a.link:hover {
            color:var(--teal);
          }
          .contact-modal {
            text-align: center;
            height:100vh;
            width:100%;
            background:var(--teal);
            opacity:0.9;
            position:absolute;
            transition:0.3s;
            padding-top:5rem;
            z-index: 1;
          }
          h3.contact-info {
            text-align:left;
            color:white;
            margin-top: 0;
          }
          h3.contact-info a {
            color:var(--yellow);
            transition:.3s;
          }
          .menu-wrapper {
            width: 1000px;
            margin:0 auto;
          }
        `}
        </style>
        <style jsx>{`
          .get-in-touch h2 {
            text-align:left;
          }
          `}
        </style>
        <style jsx>{`
          .main-links {
              opacity:${this.state.menu == open ? "0.9" : "0"};
              pointer-events:${this.state.menu == open ? "auto" : "none"}; 
            }
          .contact-modal {
              opacity:${this.state.contact == open ? "0.95" : "0"};
              pointer-events:${this.state.contact == open ? "auto" : "none"};
          }
          .contact-icons a,
          .trigger-menu {
            color:${this.state.menu == open ? "black" : "white"};
          }
          .trigger-menu:hover {
            color: ${this.state.menu == open ? "black" : "var(--yellow)"}!important;
          }
          .email-icon:hover,
          .phone-icon:hover {
            color: ${this.state.contact == open ? "white" : "var(--teal)"}!important;
          }
          `}
        </style>
      </nav>
    )
  }  
}

export default NavBar