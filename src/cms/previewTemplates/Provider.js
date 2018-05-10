import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../css/theme'
import Page from '../../components/Page/Page'
import Bootstrap from '../../components/Bootstrap/Bootstrap'

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Bootstrap>
      <Page>{children}</Page>
    </Bootstrap>
  </ThemeProvider>
)

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
