import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from './Sidebar'
import Navbar from '../component/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        {/* <link rel= 'stylesheet' href='./App.css'/> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div className="container-fluid" style={{backgroundColor:'#6f6f73'}}>
      <div className ="row" style={{margin:'0em'}}>
        <div className=" show-on-medium-and-down hide-on-large-only">
          <Navbar />
        </div>
        <div className=" hide-on-med-and-down">
          <Sidebar />
        </div>
        {}
        <div  className='col m10 offset-m2' style={{padding:"0em", alignContent:'center'}} >
          <div >
           {children}
          </div>
        </div>
       
      </div>
      
    </div>
      </div>
      
  )
}

export default TemplateWrapper
