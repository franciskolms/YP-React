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

const CoronaSignage = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Coronavirus Signage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        image={SignageBannerImg}
        heading={"Coronavirus Signage"}
        subheading={"Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nec tincidunt praesent semper feugiat nibh sed."}
      >

        <div className="buttons">
          <div className="button">
            Coronavirus Floor Vinyl
          </div>
          <div className="button">
            Coronavirus Wall Vinyl
          </div>
          <div className="button">
            Coronavirus Internal Signage
          </div>
          <div className="button">
            Coronavirus External Signage
          </div>
        </div>
      </Header>

      <SectionContainer>
        <Content>
            <Section>

              <div>
                Various text'n'stuff
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

export default CoronaSignage