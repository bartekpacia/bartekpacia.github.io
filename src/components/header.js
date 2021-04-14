import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"

const NavHeading = styled(Link)`
  color: #2d2d2d;
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #2d2d2d;
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  position: relative;
  text-decoration: none;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  &.current-page {
    border-bottom: 2px solid white;
  }
`

const Header = () => {
  const { shortTitle } = useSiteMetadata()

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: whitesmoke;
        padding: 0.5rem;

        @media (min-width: 800px) {
          padding-left: calc((100vw - 800px) / 2);
          padding-right: calc((100vw - 800px) / 2);
        }
      `}
    >
      <NavHeading href="/">{shortTitle}</NavHeading>
      <nav>
        <NavLink to="/about/" activeClassName="current-page">
          me
        </NavLink>
        <NavLink to="/projects" activeClassName="current-page">
          projects
        </NavLink>
        <NavLink to="/blog" activeClassName="current-page">
          blog
        </NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
