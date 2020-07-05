// Components
import Layout from '../components/layout'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'
import SectionContainer from '../components/sectioncontainer'
import Footer from '../components/footer'

// Images & icons
import YSBuildingImg from '../public/images/about/YSbuilding.jpg'
import Staff1Img from '../public/images/about/david-wright.jpg'
import Staff2Img from '../public/images/about/daniel-wright.jpg'
import Staff0Img from '../public/images/about/placeholder.jpg'


const About = () => (
  <Layout>
    <Head>
      <title>Yellow Signs - About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header 
        height={"6rem"}
      ></Header>

    <SectionContainer>
      <Content>
        <h2>About Us</h2>
        <div className="grid">
          <div className="about-text">
            <p>We are a family owned business and established in 2012 we have grown into a London multi-branch company with a 'can do' philosophy which has allowed us to work with a huge range of clients. Whether it be start-ups and SMEs or larger corporate clients who require fast, accurate and high quality signage solutions without compromise.</p>
            <p>In 2017 we also acquired Easisigns and are proud to still serve their clients. They were based in Wimbledon and this acquisition allowed us to increase our capacity as well as strong customer base.</p>
            <p>Our main production centre and HQ is based in Battersea which means we can quickly and easily serve all of London and the South East. We also have 3 branches in West and South-West London making us really accessible to clients. We have many clients in our surrounding areas of Clapham, Wandsworth, Southfields, Earlsfield, Putney, Barnes, East Sheen, Roehampton, Richmond, Wimbledon, Hammersmith, Fulham and Parsons Green, as well as most of London, the West End and the City.</p>
            <p>Our experienced team and ability to produce most products in-house allow us flexibility to serve all of London with a personal and reliable service with fast turnaround and bespoke solutions which are tailored to our customers, rather than fitting existing products around the customer's requirements.</p>
            <p>We are proud to keep most of our manufacturing and production in-house, ensuring maximum control and allowing us to supply our clients with exactly the right product on time.</p>
          </div>
          <div className="pic">
            <img src={YSBuildingImg} />
          </div>
        </div>
      </Content>
    </SectionContainer>

    <SectionContainer bg="var(--lightgreygrad)">
      <Content>
        <h2>Our Team</h2>
        <div className="grid-service">
          <div className="team-card">
            <div className="overlay">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>Risus feugiat in ante metus dictum at tempor commodo. Vivamus arcu felis bibendum ut tristique. <br/><br/>Amet nisl suscipit adipiscing bibendum est ultricies. Tempus urna et pharetra pharetra massa.
            </div>
            <h4>David Wright</h4>
            <p>Managing Director</p>
            <img src={Staff1Img}/>
          </div>
          <div className="team-card">
            <div className="overlay">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>Risus feugiat in ante metus dictum at tempor commodo. Vivamus arcu felis bibendum ut tristique. <br/><br/>Amet nisl suscipit adipiscing bibendum est ultricies. Tempus urna et pharetra pharetra massa.
            </div>
            <h4>Daniel Wright</h4>
            <p>Managing Director</p>
            <img src={Staff2Img}/>
          </div>
          <div className="team-card">
            <h4>Name Surname</h4>
            <p>Position</p>
            <img src={Staff0Img}/>
          </div>
          <div className="team-card">
            <h4>Name Surname</h4>
            <p>Position</p>
            <img src={Staff0Img}/>
          </div>
          <div className="team-card">
            <h4>Name Surname</h4>
            <p>Position</p>
            <img src={Staff0Img}/>
          </div>
          <div className="team-card">
            <h4>Name Surname</h4>
            <p>Position</p>
            <img src={Staff0Img}/>
          </div>
        </div>
      </Content>
    </SectionContainer>

    <Footer />
    <style jsx>{`

      .about-text p {
        font-size:.85rem;
        font-weight:500;
      }

      .grid {
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-column-gap:1rem;
      }
      .grid-service {
        grid-column-gap:2rem;
        grid-row-gap:2rem;
      }
      .grid-service h4 {
        position: absolute;
        margin-top: 15.4rem;
        padding: .3rem .75rem 1.2rem .75rem;
        background: black;
        color: var(--yellow);
        width: 14.7rem;
        text-align: center;
        font-weight: 300;
      }

      .grid-service p {
        position: absolute;
        margin-top: 16.4rem;
        color: white;
        font-size: .75rem;
        text-align:center;
        width: 14.7rem;
      }
      .overlay {
        position: absolute;
        background: #060606de;
        width: 14.65rem;
        height: 17rem;
        color: white;
        padding: 1rem;
        font-size: .75rem;
        opacity:0;
        transition:.3s;
        cursor:default;
      }
      .team-card:hover > .overlay {
        opacity:1;
      }

    `}
    </style>
  </Layout>
)

export default About