// Components
import Link from 'next/link'
import Layout from '../components/layout'
import SectionContainer from '../components/sectioncontainer'
import Content from '../components/content'
import Section from '../components/section'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import GetInTouch from '../components/getintouch'
import WhyChooseYellow from '../components/whychoose'

// Images & icons
import FrostingBannerImg from '../public/images/graphics-vinyl/frosting--banner.jpg'
import Service1Img from '../public/images/graphics-vinyl/b-thumb.jpg'
import Service2Img from '../public/images/graphics-vinyl/standing-thumb.jpg'

const WindowFrosting = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Graphics & Vinyl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image={FrostingBannerImg}
              heading={"Window Frosting"}
              subheading={"Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed."}
      >
        <div className="buttons">
          <Link href="contact">
            <div className="button">
              Contact Us Now
            </div>
          </Link>
        </div>
      </Header>

      <SectionContainer>
        <Content>
          <Section>
            <div className="service-paragraph">
              <h4>Vinyl Window Graphics</h4>
              <p>Great for impressive displays of full colour images in shop windows. Vinyl allows you to create high resolution photo realistic window graphics that can be attached inside or outside. Certain self-adhesive materials can also be applied to wood, metal and plastics.</p> 
            </div>
            <div className="service-paragraph">
              <h4>Window Frosting - Frosted Glass Window Film</h4>
              <p>If you want privacy but without losing daylight then etched glass effect or frosted glass window film is the perfect choice. It can be easily combined with vinyl window graphics to create dynamic yet private window displays.</p> 
            </div>
            <div className="service-paragraph">
              <h4>Contra Vision One Way Window Film</h4>
              <p>You see contra vision every day on phone boxes, buses, offices and shop windows. It's a unique one way window film that uses tiny perforations to allow people to see out but prevent people looking in. This combines the benefits of vinyl window film and frosted glass film so you can use full colour window graphics whilst also providing privacy.</p> 
            </div>
            <div className="service-paragraph">
              <h4>Self Cling Film</h4>
              <p>Static cling film is a PVC film, that sticks/clings to smooth gloss surfaces such as glass, smooth plastic and shiny metal surfaces. It sticks to these surfaces without any adhesive and can be removed without leaving behind any residue. It can be applied to the inside or outside of windows and is ideal for things like parking permits or short term promotions.</p> 
            </div>
            <div className="service-paragraph">
              <h4>Window Tinting</h4>
              <p>Window tinting is an easy way to provide customisation and/or privacy for office windows or vehicles.</p> 
            </div>
            <div className="grid-service">
              <div className="thumb-service">
                <img src={Service1Img} />
              </div>
              <div className="thumb-service">
                <img src={Service2Img} />
              </div>
            </div>
          </Section>
        </Content>
      </SectionContainer>

      <SectionContainer bg="var(--whychoose)">
        <Content>
            <Section>

              <WhyChooseYellow />

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
    </Layout>
)

export default WindowFrosting