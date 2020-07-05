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
import SignageBannerImg from '../public/images/signage-banner.jpg'
import Service1Img from '../public/images/signage/harvey-thumb.jpg'
import Service2Img from '../public/images/signage/elite-thumb.jpg'
import Service3Img from '../public/images/signage/brinkleys-thumb.jpg'

const Signage = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Signage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        image={SignageBannerImg}
        heading={"Signage"}
        subheading={"Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed."}
      >

        <div className="buttons">
          <Link href="shop-fascias">
            <div className="button">
              Shop Fascias
            </div>
          </Link>
          <div className="button">
            School Signs
          </div>
          <div className="button">
            Office Signage
          </div>
          <div className="button">
            Wayfinding
          </div>
          <div className="button">
            Built Up & Flat Cut Letters
          </div>
          <div className="button">
            Laser Cutting & Engraving
          </div>
          <div className="button">
            Light Boxes
          </div>
          <div className="button">
            Plaques
          </div>
          <div className="button">
            Projecting Signs
          </div>
        </div>
      </Header>

      <SectionContainer>
        <Content>
            <Section>
              <h2>London's No.1 Sign Company</h2>
              <div className="service-paragraph">
                <p>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Est lorem ipsum dolor sit amet consectetur. Eget gravida cum sociis natoque penatibus et. Tempor nec feugiat nisl pretium fusce. </p> 
                <p>Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed. Venenatis cras sed felis eget velit aliquet. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet luctus venenatis lectus magna. Commodo quis imperdiet massa tincidunt nunc. Libero id faucibus nisl tincidunt eget nullam non nisi. Quam viverra orci sagittis eu volutpat. Quis vel eros donec ac odio tempor orci dapibus ultrices. Turpis massa sed elementum tempus. Aliquam ultrices sagittis orci a scelerisque.</p>
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

export default Signage