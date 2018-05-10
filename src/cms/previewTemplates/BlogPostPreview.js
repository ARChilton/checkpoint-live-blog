import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/BlogPost'
import Provider from './Provider'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Provider>
    <BlogPostTemplate
      content={widgetFor('body')}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      linksOn={false}
    />
  </Provider>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
}

export default BlogPostPreview
