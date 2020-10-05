import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/useSiteMetadata"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import theme from "../utils/theme"
import "./reset.css"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    /* font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0.5rem;

    @media (min-width: 800px) {
      padding-right: calc((100vw - 800px) / 2);
      padding-left: calc((100vw - 800px) / 2);
    }
  }
`

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`

const Layout = ({ children }) => {
  const data = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <html lang={data.lang} />
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <StyledWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
