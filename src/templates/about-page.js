import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../component/Layout'
// import Content, { HTMLContent } from '../component/Content'

export const AboutPageTemplate = ({ title, description,avatar}) => {
  // const PageContent = contentComponent || Content
  console.log(avatar)
  return (
    <section className="section section--gradient" style={{backgroundColor:'rgba(254, 247, 230, 0.87)', height:'100vh'}}>
      <div className="container" >
        {/* <div className="columns"> */}
          {/* <div className="column is-10 is-offset-1"> */}
            <div className="section">
              <h2 className="title has-text-weight-bold is-bold-light" style={{
          
          backgroundColor: 'rgba(30, 26, 26, 0.79)',
          color: 'white',
          padding: '1rem',
          marginTop:'0em',
          width:'100%'
        }}>
                {title}
              </h2>
              {avatar?
                 avatar.map((data)=>{
                let photo ={
                  src: data.image.childImageSharp.fluid.src,
                  text: data.text
                }
                console.log(photo)
                return(
                    <div className='row'>
                      <div className='col s3'>
                      <img src={photo.src}></img>
                      <p>{data.text}</p>
                      </div>
                    </div>
                  )
              }):
              <div></div>}
              {/* <PageContent style={{color:'rgba(254, 247, 230, 0.87)'}} content={content} /> */}
              <h6>{description}</h6>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
  // content: PropTypes.string,
  // contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.frontmatter)
  return (
    <Layout>
      
      <AboutPageTemplate
        
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        avatar={post.frontmatter.avatar}
        // content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        avatar {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        text
        }
      }
    }
  }
`
