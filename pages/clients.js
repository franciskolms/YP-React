// Components
import Layout from '../components/layout'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'
import SectionContainer from '../components/sectioncontainer'
import Footer from '../components/footer'

// Images & icons
import SignageBannerImg from '../public/images/signage-banner.jpg'

const Clients = () => (
    <Layout>
      <Head>
        <title>Yellow Signs - Our Clients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image={SignageBannerImg}>
        <h1>Our Clients</h1>
      </Header>

      <SectionContainer>
        <Content>
          <p>This is Our Clients page</p>
        </Content>
      </SectionContainer>

      <Footer />
    </Layout>
)

export default Clients