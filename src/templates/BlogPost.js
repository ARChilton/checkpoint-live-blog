import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from '../components/Helmet/Helmet'
import { H1 } from '../components/Text/Text'
import BlogContent from '../components/BlogContent/BlogContent'
import TagContainer from '../components/TagContainer/TagContainer'
import TagListContainer from '../components/TagListContainer/TagListContainer'
import Link from '../components/Link/Link'
import { HTMLContent } from '../components/Content/Content'

const BlogPost = ({
  data,
  content,
  contentComponent,
  // description,
  tags,
  title,
}) => {
  console.log(data)
  const post = data.markdownRemark
  console.log(post)
  return (
    <div>
      <Helmet post={post} />
      <BlogContent>
        <H1 style={{ textAlign: 'center' }}>{post.frontmatter.title}</H1>
        <TagListContainer>
          {post.frontmatter.tags.map(tag => (
            <Link key={`${tag} tag`} to={`/tags/${kebabCase(tag)}/`}>
              <TagContainer>{tag}</TagContainer>
            </Link>
          ))}
        </TagListContainer>
        <HTMLContent content={post.html} />
      </BlogContent>
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        img
        tags
      }
    }
  }
`

export default BlogPost
