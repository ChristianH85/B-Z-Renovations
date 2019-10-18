import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../component/Layout'
import Features from '../component/Features'
// import BlogRoll from '../component/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  // subheading,
  // mainpitch,
  description,
  available,
  askingPrice,
  intro,
 
}) => (

  // console.log(title)
  <div style={{alignContent:"center"}}>
    <img style={{width:'100vw',height:'100vh'}} src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt='full img missing'/>
   {/* {console.log(title,askingPrice,available, description)} */}
    {/* <div
      className="margin-top-1"
      style={{
        width:"40%",
        height:"40%",
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    > */}
      {/*<div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        {console.log(title)}
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
           {title} 
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>*/}
    {/* </div> */}
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>*/}
                {console.log(heading)}
                <Features gridItems={intro} heading={heading} description={description}available={available} askingPrice={askingPrice}/>
                {/* <div className="columns">
                  <div className="column is-11 has-text-centered"> */}
                    {/* <Link className="btn" to="/blog">
                      Current Listings
                    </Link> */}
                  {/* </div>
                </div>
                <div className="column is-11">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
              {/*</div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {console.log(intro)}
  </div>
  
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  askingPrice: PropTypes.string,
  available: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  // console.log(frontmatter.intro)
  let imageList=frontmatter.intro.blurbs
  // if(frontmatter.intro){
  //   let listImages= frontmatter.intro.blurbs
  //   // listImages.push(frontmatter.intro)
  //   console.log(listImages)
  //   listImages.map((data)=>{
  //     <div>
  //    {/* { console.log(data.image)} */}
  //     <img src={data.image}></img>
  //     </div>
  //   })
  // }else{
  //   console.log('nothing')
  // }
  return (
    <Layout>
      {console.log (frontmatter)}
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.intro.heading}
        askingPrice={frontmatter.asking_price}
        available={frontmatter.available}
        description={frontmatter.intro.description}
        intro={imageList}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        available
        heading
        asking_price
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
