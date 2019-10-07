import React from 'react'

import Layout from '../../component/Layout'
import BlogRoll from '../../component/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout style={{backgroundColor:'rgba(254, 247, 230, 0.87)', height:'100vh'}}>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            width:'100%',
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        > */}
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 rgba(30, 26, 26, 0.79), -0.5rem 0 0 rgba(30, 26, 26, 0.79)',
              backgroundColor: 'rgba(30, 26, 26, 0.79)',
              color: 'white',
              padding: '1rem',
              textAlign: 'center',
              marginTop:'0em',
            }}
          >
            Current Projects
          </h1>
        {/* </div> */}
        <section className="section" style={{backgroundColor:'rgba(254, 247, 230, 0.87)', height:'100%'}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
