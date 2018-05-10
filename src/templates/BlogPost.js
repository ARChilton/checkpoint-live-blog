import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from '../components/Helmet/Helmet'
import { H1 } from '../components/Text/Text'
import BlogContent from '../components/BlogContent/BlogContent'
import TagContainer from '../components/TagContainer/TagContainer'
import TagListContainer from '../components/TagListContainer/TagListContainer'
import Link from '../components/Link/Link'
import Content, { HTMLContent } from '../components/Content/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  linksOn,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      {helmet || null}
      <BlogContent>
        <H1 style={{ textAlign: 'center' }}>{title}</H1>
        <TagListContainer>
          {tags.map(
            tag =>
              tag !== '' ? (
                <Link
                  linksOn={linksOn}
                  key={`${tag} tag`}
                  to={`/tags/${kebabCase(tag)}/`}
                >
                  <TagContainer>{kebabCase(tag)}</TagContainer>
                </Link>
              ) : null
          )}
        </TagListContainer>
        <PostContent content={content} />
      </BlogContent>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // description: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.node,
  helmet: PropTypes.instanceOf(Helmet),
  linksOn: PropTypes.bool,
}

BlogPostTemplate.defaultProps = {
  contentComponent: null,
  tags: [],
  linksOn: true,
  helmet: null,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      helmet={<Helmet post={post} />}
      linksOn
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
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
