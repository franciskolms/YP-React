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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import FasciasBannerImg from '../public/images/signage/shop-fascias-banner.jpg'
import Service1Img from '../public/images/signage/lockonego-thumb.jpg'
import Service2Img from '../public/images/signage/naz-thumb.jpg'
import Service3Img from '../public/images/signage/handmade-thumb.jpg'

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const ShopFascias = () => (
    <Layout>
      <Head>
        <title>Shop Fascias | Yellow Signs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image={FasciasBannerImg}
              heading={"Shop Fascias"}
              subheading={"We are London's leading specialists in shop fascia signs and exterior signage."}
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
              <p>Fascia signs provide a familiar identity for your clients and indicate who you are and what your business does. We use a variety of methods such as built-up or flat cut lettering to make your signage really stand out. A fascia sign is a highly visible type of exterior signage that is used to promote and advertise business premises or events. We can make your sign in any shape or size.</p> 
            </div>
            <div className="service-paragraph">
              <p>Most signs can be back illuminated so that the letters and logos on the fascia glow and catch the eye in the day time or at night.</p> 
            </div>
            <div className="service-paragraph">
              <p>Popular types of shop signs include:</p> 
              <div className="service-grid">
                <h4><div>{checkIcon}</div>Flat-Cut Lettering</h4>
                <h4><div>{checkIcon}</div>Built-Up Lettering</h4>
                <h4><div>{checkIcon}</div>Projecting Signs</h4>
                <h4><div>{checkIcon}</div>Aluminium Tray Signs</h4>
                <h4><div>{checkIcon}</div>Illuminated Fascias</h4>
                <h4><div>{checkIcon}</div>LED Signs</h4>
              </div>
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
      <style jsx>{`
        .service-grid {
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
        }
        .service-grid h4 div {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          margin-right:.25rem;
          color: var(--teal);
        }
      `}
      </style>
    </Layout>
)

export default ShopFascias