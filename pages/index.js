// Components
import Link from 'next/link'
import Layout from '../components/layout'
import Content from '../components/content'
import Section from '../components/section'
import Head from 'next/head'
import Header from '../components/header'
import SectionContainer from '../components/sectioncontainer'
import GetInTouch from '../components/getintouch'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'

// Images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import YSBuildingImg from '../public/images/home/ys-building.jpg'
import HomeBannerImg from '../public/images/home-banner.jpg'
import Service1Img from '../public/images/home/signage-thumb.jpg'
import Service2Img from '../public/images/home/graphics-vinyl-thumb.jpg'
import Service3Img from '../public/images/home/covid-thumb.jpg'

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;

const Home = () => (

  <Layout>
    <Head>
      <title>Yellow Signs</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Header image={HomeBannerImg}
            heading={"Signage Specialists in London"}
            subheading={"Eget gravida cum sociis natoque penatibus et. Tempor nec feugiat nisl pretium fusce. Venenatis cras sed felis eget velit aliquet."}>
    
    <div className="buttons">
      <Link href="signage">
        <div className="button">
          Signage
        </div>
      </Link>
      <Link href="graphics-vinyl">
        <div className="button">
          Graphics & Vinyl
        </div>
      </Link>
      <Link href="coronavirus-signage">
        <div className="button">
          Coronavirus Signage
        </div>
      </Link>
      <Link href="process">
        <div className="button">
          Sign Making Process
        </div>
      </Link>
    </div>
    
    </Header>

    <SectionContainer>
      <Content>
        <Section>
          <div className="intro-grid">
            <div>
              <p className="bold">Based in Battersea in London, Yellow Signs offers signage that builds brands. </p>
              <p>A focused team of our dedicated experts provide solutions to a wide range of clients, from SMEs and non-profit organisations to corporate clients and the education sector. Together with a solution-led  approach Yellow Signs offers signage, wayfinding, graphics & vinyl, bespoke projects and a wide range of coronavirus signage.</p>
            </div>
            <div>
              <img src={YSBuildingImg}/>
            </div>
          </div>
        </Section>
      </Content>
    </SectionContainer>

    <SectionContainer 
      bg="var(--lightgreygrad)"
    >
      <Content>
        <Section>
          <div className="services-grid">

            <Link href="signage">
            <div className="service">
              <img src={Service1Img} />
              <div className="service-name">Signage</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a className="find-out-more">
                Find out more<div className="arrow-right">{arrowRight}</div>
              </a>
            </div>
            </Link>

            <Link href="graphics-vinyl">
            <div className="service">
              <img src={Service2Img}/>
              <div className="service-name">Graphics & Vinyl</div>
              <p>Nulla aliquet enim tortor at auctor urna nunc id cursus. At tempor commodo ullamcorper a lacus vestibulum. Velit ut tortor pretium viverra.</p>
                <a className="find-out-more">
                  Find out more<div className="arrow-right">{arrowRight}</div>
                </a>
            </div>
            </Link>

            <Link href="coronavirus-signage">
            <div className="service">
              <img src={Service3Img} />
              <div className="service-name">Coronavirus Signage</div>
              <p>Etiam erat velit scelerisque in dictum non consectetur a. Amet consectetur adipiscing elit pellentesque habitant morbi.</p>
                <a className="find-out-more">
                  Find out more<div className="arrow-right">{arrowRight}</div>
                </a>
            </div>
            </Link>
            
          </div>
        </Section>
      </Content>
    </SectionContainer>

    <SectionContainer paddingBottom="2rem">
      <Content>
        <Section>
          <h2>Recent Case Studies</h2>

          <div className="case-study">
            <div className="case-study-pic1"></div>
            <div className="case-study-title">
              <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</h3>
              <a>Read more</a>
            </div>
            <div className="case-study-pic2"></div>
            <div className="case-study-title">
              <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</h3>
              <a>Read more</a>
            </div>
          </div>

        </Section>
      </Content>
    </SectionContainer>

    <SectionContainer bg="var(--lightgreygrad)">
      <Content>
        <Section>
          <Testimonials />
        </Section>
      </Content>
    </SectionContainer>

    <SectionContainer bg="var(--teal)">
      <Content>
        <Section>
          <GetInTouch />
        </Section>
      </Content>
    </SectionContainer>

    <Footer />
    <style jsx>{`

    .intro-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-column-gap:1rem;
    }

    .intro-grid p.bold {
      font-weight:500;
    }

    .service:hover > .service-name {
      background:var(--yellow-light);
      transition:.3s;
    }
    .services-grid {
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }
    .service-name {
      font-family: 'Roboto',sans-serif;
      font-weight: 400;
      background: var(--yellow);
      color: var(--black);
      padding: .4rem 1rem;
      margin-top: -.25rem;
      letter-spacing: 1px;
    }
    .service img {
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
    }
    .service p {
      font-size: .75rem;
      padding: .5rem 1rem;
      background: white;
      min-height:5.5rem;
      font-weight:500;
    }
    a.find-out-more {
      background: var(--black);
      color: var(--yellow);
      padding: .25rem 1rem;
      display: block;
      font-size: .75rem;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .arrow-right {
      display: inline-block;
      opacity:0;
      width: 1.2rem;
      padding-left: .5rem;
      margin-top: .05rem;
      margin-left: -.3rem;
      vertical-align: middle;
      transition:.3s;
    }

    .find-out-more:hover > .arrow-right {
      opacity:1;
      margin-left: 0;
    }

    .case-study {
      display:grid;
      grid-template-columns:1fr 3fr;
      grid-row-gap: 1rem;
    }

    .case-study h3 {
      font-size: 1rem;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
    }
    .case-study-title {
      background: var(--lightgray);
      transition:.3s;
      cursor:pointer;
      padding: 1rem 2rem;
    }
    .case-study-title a {
      font-size:.75rem;
      font-size: .75rem;
      text-decoration: underline;
      transition:.3s;
    }
    .case-study-title a:hover {
      color:var(--teal);
    }
    .case-study-title:hover {
      background:#eaeaea;
    }
    .case-study-pic1 {
      background:url(${"/images/graphics-vinyl/new-river-thumb.jpg"});
    }
    .case-study-pic2 {
      background:url(${"/images/signage/elite-thumb.jpg"});
    }
    .case-study-pic1,
    .case-study-pic2, {
      background-size:cover;
      background-position:center;
      cursor:pointer;
    }
    .case-study-pic1:hover,
    .case-study-pic2:hover {
      filter: brightness(1.1);
      transition:.3s;
    }
  `}
  </style>
  </Layout>
)

export default Home
