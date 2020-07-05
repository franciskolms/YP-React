// Components
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
import SignageBannerImg from '../public/images/signage-banner.jpg'
import Service1Img from '../public/images/graphics-vinyl/zoocars-thumb.jpg'
import Service2Img from '../public/images/graphics-vinyl/new-river-thumb.jpg'
import Service3Img from '../public/images/graphics-vinyl/britain-thumb.jpg'

const Process = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Process</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image={SignageBannerImg}
              heading={"Process"}
              subheading={"Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed."}
      >
        <div className="buttons">
          <div className="button">
            Design & Job Brief
          </div>
          <div className="button">
            Production
          </div>
          <div className="button">
            Installation
          </div>
          <div className="button">
            Sign Maintenance
          </div>
        </div>
      </Header>

      <SectionContainer>
        <Content>
          <Section>
            <h2>Sign Making Process</h2>
            <div className="service-paragraph">
              <p>Our team of installers and production staff understand that signage often needs to stand the test of time and even more temporary installs can require some form of maintenance to ensure the product is working properly and gives the client the best results possible. We have a range of products, tips and recommendations to ensure each product is utilities affectively. </p> 
            </div>
            <div className="grid-service">
              <div className="thumb-service">
                <img src={Service1Img} />
              </div>
              <div className="thumb-service">
                <img src={Service2Img} />
              </div>
              <div className="thumb-service">
                <img src={Service3Img} />
              </div>
            </div>
            <div className="service-paragraph">
              <p>Venenatis cras sed felis eget velit aliquet. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet luctus venenatis lectus magna. Commodo quis imperdiet massa tincidunt nunc. Libero id faucibus nisl tincidunt eget nullam non nisi. Quam viverra orci sagittis eu volutpat. Quis vel eros donec ac odio tempor orci dapibus ultrices. Turpis massa sed elementum tempus.</p>
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

export default Process