import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { PrimaryH2, LinkP } from '../components/Text/Text'
import { BackgroundImg } from '../components/Images/Images'
import LinkContainer from '../components/LinkContainer/LinkContainer'
import { HrBottomOnly } from '../components/Hr/Hr';

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <section>
        <h1 style={{ textAlign: 'center' }}>
          Welcome to the {data.site.siteMetadata.title}
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="col-xs-12">
            <LinkContainer className="col-xs-12">
              <Link to={node.fields.slug}>
                <div className="col-xs-2" style={{ height: '100%' }}>
                  {/* {node.frontmatter.featuredImg ? ( */}
                  <BackgroundImg src={node.frontmatter.featuredImg} />
                  {/* ) : null} */}
                </div>
                <div className="col-xs-9 col-xs-offset-1">
                  <PrimaryH2>{node.frontmatter.title}</PrimaryH2>
                  <LinkP>{node.excerpt}</LinkP>
                </div>
              </Link>
            </LinkContainer>

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
            featuredImg
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
