import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { H1, H3, PrimaryH2, LinkP } from '../components/Text/Text'
import { BackgroundImg } from '../components/Images/Images'
import LinkContainer from '../components/LinkContainer/LinkContainer'
// import { HrBottomOnly } from '../components/Hr/Hr';

const IndexPage = ({ data }) => {
  console.log(data)
  const numberOfPosts = data.allMarkdownRemark.edges.length
  return (
    <div>
      <section>
        <H1 style={{ textAlign: 'center' }}>
          Welcome to the {data.site.siteMetadata.title}
        </H1>
        <H3>{numberOfPosts} post{numberOfPosts > 1 ? 's' : null}:</H3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="col-xs-12">
            <Link to={node.fields.slug}>
              <LinkContainer>
                <div
                  className="col-xs-2"
                  style={{ height: '100%', minHeight: '100px' }}
                >
                  {/* {node.frontmatter.featuredImg ? ( */}
                  <BackgroundImg
                    src={node.frontmatter.img}
                    style={{ height: '100%', minHeight: '100px' }}
                  />
                  {/* ) : null} */}
                </div>
                <div className="col-xs-9 col-xs-offset-1">
                  <PrimaryH2>{node.frontmatter.title}</PrimaryH2>
                  <LinkP>{node.excerpt}</LinkP>
                </div>
              </LinkContainer>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            img
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
