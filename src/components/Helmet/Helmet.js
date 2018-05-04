import React from 'react'
import PropTypes from 'prop-types'
import ReactHelmet from 'react-helmet'

const Helmet = ({ post }) => (
  <ReactHelmet>
    <title>{post.frontmatter.title}</title>
    <meta
      name="description"
      content={
        post.frontmatter.description
          ? post.frontmatter.description
          : post.excerpt
      }
    />
    <meta name="og:description" content={post.excerpt} />
    <meta name="twitter:description" content={post.excerpt} />
    <meta name="og:title" content={post.frontmatter.title} />
    <meta name="og:type" content="article" />
  </ReactHelmet>
)

Helmet.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Helmet
