// Components
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import SectionContainer from '../components/sectioncontainer'
import Content from '../components/content'
import Section from '../components/section'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import GetInTouch from '../components/getintouch'

// Images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const mapStyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
}

const mapContainerStyle = {
  position: 'relative',
}

const Contact = props => (
    <Layout>
      <Head>
        <title>Yellow Signs - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        // image={SignageBannerImg}
        height={"5.5rem"}
        // heading={"Contact"}
        // subheading={"Whether you have a comment, enquiry, quote or site survey request just fill in the form below or give us a call and we will do the rest!"}
      >
      </Header>
      <SectionContainer >
        <Content>
          <Section>

          <div className="grid">
            <div className="address">
              <h2>Contact</h2>
              <h3>
                <div className="email">{emailIcon}</div>
                <a href="mailto:info@yellowsigns.co.uk">info@yellowsigns.co.uk</a><br/>
              </h3>
              <h3>
                <div className="phone">{phoneIcon}</div>
                <a href="tel:02089448984">020 8944 8984</a>
              </h3>

              <h4>Branches</h4>
              <p className="address">Yellow Signs Southfields<br/>40 Replingham Road, London SW18 5LR</p>
              <p className="address">Yellow Signs East Sheen<br/>369 Upper Richmond Road, London SW14 7NX</p>
              <p className="address">Yellow Signs Shepherds Bush<br/>140 Askew Road, London W12 9BX</p>
              
              <h4>HQ & Production Centre</h4>
              <p className="address">Unit 5, River Reach, Gartons Way, London SW11 3SX</p>
              <p className="comment">
                <div className="arrows">▾</div>
                <div className="find-out">Find out more</div>
                <div className="arrows">▾</div>
              </p>
            </div>
            <div className="map">
            <Map 
              google={props.google}
              style={mapStyle}
              containerStyle={mapContainerStyle}
              zoom={13}
              initialCenter={{
              lat: 51.466222,
              lng: -0.1827786
              }} >
              <Marker name={'Yellow Signs'} />
            </Map>
            </div>
          </div>

          </Section>
        </Content>
      </SectionContainer>

      <SectionContainer bg="var(--teal)">
        <Content>
          <Section>

            <GetInTouch />
            {/* <h3 className="contact-info">Email us <a href="mailto:info@yellowsigns.co.uk">info@yellowsigns.co.uk</a> | Call us now <a href="tel:02089448984">020 8944 8984</a></h3> */}

          </Section>
        </Content>
      </SectionContainer>

      <Footer />
      <style jsx>{`
            .grid {
              display:grid;
              grid-template-columns:1fr 1fr;
              grid-column-gap:1rem;
            }
            p.address {
              font-weight: 300;
              font-size: .9rem;
            }
            .address h2 {
              margin-top: 0;
            }
            .address h3 a {
              color:var(--teal);
            }
            .comment {
              color:var(--teal);
              font-weight:500!important;
              font-size:1rem;
            }
            .find-out {
              display:inline-block;
              padding-top: 1rem;
            }
            .arrows {
              font-size:1.5rem;
              display:inline-block;
            }
            .email,
            .phone {
              width: 1rem;
              display: inline-block;
              margin-right: .5rem;
              color:var(--teal);
              transition:.3s;
            }
            .address h3:hover > .email,
            .address h3:hover > .phone {
              color:var(--yellow);
            }
        `}
      </style>
    </Layout>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDBCcJPr94ThJjBv5Hnwf63p5PU9cDLFkI')
 })(Contact);