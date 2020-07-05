// Components
import Content from '../components/content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Images & icons
import YSLogoImg from '../public/images/ys-logo.svg'
import InstaLogoImg from '../public/images/social/instagram.svg'

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const Footer = () => (
  <footer>
    <div className="main-section">
      <Content>
        <div className="grid">
          <ul>
            <li>Yellow Signs</li>
            <li>Our Clients</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Signage</li>
            <li>Shop Fascias</li>
            <li>School Signs</li>
            <li>Office Signage</li>
            <li>Wayfinding</li>
            <li>Hoarding</li>
            <li>Built Up & Flat Cut Letters</li>
            <li>Laser Cutting & Engraving</li>
            <li>Light Boxes</li>
            <li>Plaques</li>
            <li>Projecting Signs</li>
          </ul>
          <ul>
            <li>Graphics & Vinyl</li>
            <li>Window Frosting</li>
            <li>Digital Wallpaper</li>
            <li>Vehicle Graphics</li>
            <li>Decals & Stickers</li>
          </ul>
          <ul>
            <li>Coronavirus Signage</li>
            <li>Coronavirus Floor Vinyl</li>
            <li>Coronavirus Wall Vinyl</li>
            <li>Coronavirus Internal Signage</li>
            <li>Coronavirus External Signage</li>
          </ul>
          <ul>
            <li>Sign Making Process</li>
            <li>Design & Job Brief</li>
            <li>Production</li>
            <li>Installation</li>
            <li>Sign Maintenance</li>
          </ul>
        </div>
      </Content>
    </div>

    <div className="lower-section">
      <Content>
        <div className="small-footer">
          <div className="footer-logo">
            <img src={YSLogoImg} />
          </div>
          <div className="address">
            Unit 5, River Reach Business Park, Gartons Way, Battersea, London SW11 3SX<br></br>
            <div className="contact-icon">{emailIcon} </div> info@yellowsigns.co.uk <div className="contact-icon phone">{phoneIcon}</div> 020 8944 8984
          </div>
          <div className="social">
            <a href="https://www.instagram.com/yellow_signs/" target="_blank"><img src={InstaLogoImg} /></a>
          </div>
        </div>
      </Content>
    </div>

    <style jsx>{`

    footer {
        font-size:.65rem;
        width: 100%;
        min-height: 100px;
        background:var(--black);
      }

    ul {
      padding:0;
    }

    li {
      color:white;
      list-style: none;
      font-weight:300;
      line-height: 1rem;
    }

    li:first-child {
      font-weight:600;
      padding-bottom:.5rem;
    }

    .address {
      display: inline-block;
      font-weight: 300;
    }

    .contact-icon {
      width: .5rem;
      display: inline-block;
      margin-right: .3rem;
    }

    .phone {
      margin-left: .4rem;
    }

    .grid {
      display:grid;
      grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    }

    .lower-section {
      color:white;
      background:#252525;
    }

    .small-footer {
      display:grid;
      grid-template-columns:1fr 5fr 1fr;
      align-items: center;
      grid-column-gap: 1rem;
    }
    .footer-logo img {
      width: 7rem;
    }
    .social img {
      width:1.5rem;
      color:white;
    }

  `}</style>
  </footer>
);

export default Footer