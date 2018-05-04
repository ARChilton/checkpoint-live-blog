import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, to, href, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.number.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
}

Link.defaultProps = {
  to: null,
  href: null,
}

export default Link
