import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'
import theme from '../css/theme'
// import Header from '../components/header'
import NavBar from '../components/NavBar/NavBar'
import '../css/bootstrap.css'
// import '../css/index.css'
import '../css/custom-css.css'
import Page from '../components/Page/Page'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        // title={data.site.siteMetadata.title}
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <NavBar />
      <Page>{children()}</Page>
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
