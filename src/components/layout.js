/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "styled-components"

import Header from "./header"
import "./reset.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main
          css={css`
            border: 1px solid red;
            margin-top: 2rem;

            @media (min-width: 800px) {
              margin-left: calc((100vw - 800px) / 2);
              margin-right: calc((100vw - 800px) / 2);
            }
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            border: 1px solid red;

            @media (min-width: 800px) {
              margin-left: calc((100vw - 800px) / 2);
              margin-right: calc((100vw - 800px) / 2);
            }
          `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
