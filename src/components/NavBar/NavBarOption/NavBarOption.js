import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import Link from 'gatsby-link'
import theme from '../../../css/theme'

const activeStyle = {
  borderBottom: `${theme.color.navActive} 2px solid`,
}

const NavBarOption = ({ className, label, to, numberOfNavs }) => (
  <Link
    to={to}
    exact
    activeStyle={activeStyle}
    className={cx(
      className,
      'col-sm-2',
      `col-sm-push-${Math.ceil(11 - numberOfNavs * 2)}`
    )}
  >
    {label}
  </Link>
)

NavBarOption.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  numberOfNavs: PropTypes.number.isRequired,
}

const DefaultNavBarOption = styled(NavBarOption)`
  height: 60px;
  /* padding:16px 2px; */
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
  :hover {
    border-bottom: ${props => props.theme.color.primary} 2px solid;
    color: ${props => props.theme.color.primary};
    text-decoration: none;
  }
  :active {
    border-bottom: ${props => props.theme.color.primary} 2px solid;
    color: ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.navigationActive};
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :focus {
    text-decoration: none;
    outline: none;
  }
`

export default DefaultNavBarOption
