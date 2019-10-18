import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/Index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  if (data) {
    
    console.log("index"+data.intro)
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        // subheading={data.subheading}
        // description={data.description}
        intro={ data.intro.blurbs}
        
        // mainpitch={data.mainpitch || {}}
      /> 
    )
    
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
