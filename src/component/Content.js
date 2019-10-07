import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}> {console.log(content)}{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}
console.log(Content.propTypes)
HTMLContent.propTypes = Content.propTypes

export default Content
