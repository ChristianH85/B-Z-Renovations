// import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../component/Layout'
// import Content, { HTMLContent } from '../component/Content'

// export const ListingsPageTemplate = ({ title, content, contentComponent }) => {
//     const PageContent = contentComponent || Content
  
//     return (
//       <section className="section section--gradient" style={{backgroundColor:'rgba(254, 247, 230, 0.87)', height:'100vh'}}>
//         <div className="container" >
//           {/* <div className="columns"> */}
//             {/* <div className="column is-10 is-offset-1"> */}
//               <div className="section">
//                 <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{
            
//             backgroundColor: 'rgba(30, 26, 26, 0.79)',
//             color: 'white',
//             padding: '1rem',
//             marginTop:'0em',
//             width:'100%'
//           }}>
//                   {title}
//                 </h2>
//                 <PageContent style={{color:'rgba(254, 247, 230, 0.87)'}} content={content} />
//               </div>
//             {/* </div> */}
//           {/* </div> */}
//         </div>
//       </section>
//     )
//   }
  
//   ListingsPageTemplate.propTypes = {
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string,
//     contentComponent: PropTypes.func,
//   }
  
//   const ListingsPage = ({ data }) => {
//     const { markdownRemark: post } = data
//     console.log(post)
  
//     return (
//       <Layout>
//         {/* <ListingsPageTemplate
//           contentComponent={HTMLContent}
//           title={post.frontmatter.title}
//           content={post.html}
//         /> */}
//       </Layout>
//     )
//   }
  
//   ListingsPage.propTypes = {
//     data: PropTypes.object.isRequired,
//   }
  
//   export default ListingsPage
  
//   export const listingsPageQuery = graphql`
//     query ListingsPage($id: String!) {
//       markdownRemark(id: { eq: $id }) {
//         html
//         frontmatter {
//           title
//           tags
//           heading
//         }
//       }
//     }
//   `