import React from 'react'
import PropTypes from 'prop-types'
import Helmet from '../components/Helmet/Helmet'
import { H1 } from '../components/Text/Text'
import BlogContent from '../components/BlogContent/BlogContent'

const BlogPost = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <div>
      <Helmet post={post} />
      <BlogContent>
        <H1 style={{ textAlign: 'center' }}>{post.frontmatter.title}</H1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogContent>
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
        description
        img
      }
    }
  }
`

export default BlogPost
