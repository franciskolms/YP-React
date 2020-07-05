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

const GraphicsVinyl = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Graphics & Vinyl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image={SignageBannerImg}
              heading={"Graphics & Vinyl"}
              subheading={"Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed."}
      >
        <div className="buttons">
          <Link href="window-frosting">
          <div className="button">
            Window Frosting
          </div>
          </Link>
          <div className="button">
            Digital Wallpaper
          </div>
          <div className="button">
            Vehicle Graphics
          </div>
          <div className="button">
            Decals & Stickers
          </div>
        </div>
      </Header>

      <SectionContainer>
        <Content>
          <Section>
            <h2>Advertise your business with bright energetic graphics</h2>
            <div className="service-paragraph">
              <p>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Est lorem ipsum dolor sit amet consectetur. Eget gravida cum sociis natoque penatibus et. Tempor nec feugiat nisl pretium fusce. </p> 
            </div>
            <div className="grid-service">
              <div className="thumb-service">
                <img src="/images/graphics-vinyl/zoocars-thumb.jpg" />
              </div>
              <div className="thumb-service">
                <img src="/images/graphics-vinyl/new-river-thumb.jpg" />
              </div>
              <div className="thumb-service">
                <img src="/images/graphics-vinyl/britain-thumb.jpg" />
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

export default GraphicsVinyl