// Components
import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'
import SectionContainer from '../components/sectioncontainer'
import Footer from '../components/footer'

// Images & icons
import SignageBannerImg from '../public/images/signage-banner.jpg'

const appUrl = "http://3.87.220.225/wp-json/wp/v2/";
const getPosts = `${appUrl}posts`;

class Blog extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      posts: [] 
    }
  }

  componentDidMount(){
    let postUrl = `${getPosts}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }

  render(){

    let listposts = this.state.posts.map((post, index) => {
      return(
        <div key={index}>
          <img src={post.jetpack_featured_media_url} />
          <h4>{post.title.rendered}</h4>
          <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </div>
      )
    })
    
    console.log(this.state.posts[1])

    return(
      <Layout>
        <Head>
          <title>Yellow Signs - Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header image={SignageBannerImg}>
          <h1>Blog</h1>
        </Header>

        <SectionContainer>
          <Content>
            {listposts}
          </Content>
        </SectionContainer>

        <Footer />
      </Layout>
    )
  }
}

export default Blog