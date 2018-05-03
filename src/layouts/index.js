import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'
import theme from '../css/theme'
// import Header from '../components/header'
import NavBar from '../components/NavBar/NavBar'
import '../css/bootstrap.css'
import './index.css'
import Page from '../components/Page/Page'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        // title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
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
