import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import Bootstrap from '../components/Bootstrap/Bootstrap'
import NavBar from '../components/NavBar/NavBar'
import Page from '../components/Page/Page'
import '../css/custom-css.css'
import theme from '../css/theme'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'fb:app_id', content: '223113445127689' },
          { name: 'description', content: 'The blog for Checkpoint Live' },
          {
            name: 'keywords',
            content:
              'event management, hikes, races, incident hike, checkpoint, base, competition, monitoring, event, scouts, guides',
          },
        ]}
      />
      <Bootstrap>
        <NavBar />
        <Page>{children()}</Page>
      </Bootstrap>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
