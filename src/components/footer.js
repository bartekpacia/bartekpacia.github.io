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

      @media (min-width: 800px) {
        padding-right: calc((100vw - 800px) / 2);
        padding-left: calc((100vw - 800px) / 2);
      }
    `}
  >
    © Bartek Pacia {new Date().getFullYear()}
  </footer>
)

export default Footer
