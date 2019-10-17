import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, }) => (
  
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    avatar={entry.getIn('data, avatar')}
    description={entry.getIn(['data', 'description'])}
    // content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
