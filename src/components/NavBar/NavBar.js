import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import NavBarOption from './NavBarOption/NavBarOption'

const Logo = styled('img')`
  height: 40px;
`

const navigationOptions = [
  { label: 'Home', to: '../' },
  { label: 'Blog', to: '/' },
  { label: 'Pricing', to: '../pricing' },
]

const navLength = navigationOptions.length

const NavBar = ({ className }) => (
  <div className={className}>
    <div className="row">
      <Link to="/" className="col-sm-1">
        <Logo
          src="https://checkpointlive.com/img/icon.svg"
          alt="Checkpoint Live small logo"
        />
      </Link>

      {navigationOptions.map(navigation => (
        <NavBarOption
          key={navigation.label}
          to={navigation.to}
          label={navigation.label}
          numberOfNavs={navLength}
        />
      ))}
    </div>
  </div>
)

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
}

const DefaultNavBar = styled(NavBar)`
  @media (min-width: 768px) {
    top: 0px;
    position: sticky;
    background-color: #fff;
    z-index: 5;
    vertical-align: middle;
    border-bottom: 1px solid #efefef;
    text-align: center;
    height: 60px;
    width: 100%;
    line-height: 60px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export default DefaultNavBar
