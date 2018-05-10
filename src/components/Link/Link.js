import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, to, href, linksOn, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal links, and <a> for others
  if (!internal || !linksOn) {
    const { exact, activeStyle, ...safeProps } = other
    return (
      <a href={to} {...safeProps}>
        {children}
      </a>
    )
  }
  return (
    <GatsbyLink to={to} {...other}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  linksOn: PropTypes.bool,
}

Link.defaultProps = {
  to: null,
  href: null,
  linksOn: true,
}

export default Link
