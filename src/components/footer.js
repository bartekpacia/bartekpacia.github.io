import React from "react"
import { css } from "styled-components"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaStackOverflow,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa"

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
    <a href="https://github.com/bartekpacia">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/in/bartekpacia">
      <FaLinkedin />
    </a>
    <a href="https://www.youtube.com/c/BartekPacia">
      <FaYoutube />
    </a>
    <a href="https://stackoverflow.com/users/7009800/bartek-pacia">
      <FaStackOverflow />
    </a>
    <a href="https://t.me/bartekpacia">
      <FaTelegram />
    </a>
    <a href="mailto:barpac02@gmail.com">
      <FaEnvelope />
    </a>
  </footer>
)

export default Footer
