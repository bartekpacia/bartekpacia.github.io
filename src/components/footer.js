import React from "react"
import { css } from "styled-components"

const Footer = () => (
  <footer
    css={css`
      display: flex;
      flex-direction: column;
      color: #505050;
      background: #eee;
      padding: 0.5rem;

      @media (min-width: 600px) {
        padding-right: calc((100vw - 600px) / 2);
        padding-left: calc((100vw - 600px) / 2);
      }
    `}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
