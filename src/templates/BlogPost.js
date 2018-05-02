import React from 'react'
import PropTypes from 'prop-types'
import ReactHelmet from 'react-helmet'

const BlogPost = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <div>
      <ReactHelmet title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
