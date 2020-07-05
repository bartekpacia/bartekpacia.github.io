import React from "react"
import { css } from "styled-components"

const Footer = () => (
  <footer
    css={css`
      // border: 1px solid red;
      margin-top: 2rem;

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
)

export default Footer
