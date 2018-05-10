/* eslint react/no-danger: 0 */
// dangerouslySetInnerHTML is required by Gatsby to work
import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

Content.defaultProps = {
  content: null,
  className: null,
}

HTMLContent.propTypes = Content.propTypes

export default Content
