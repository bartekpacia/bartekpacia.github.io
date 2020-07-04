import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProfileImage from "../components/image"
import SEO from "../components/seo"
import styled, { css } from "styled-components"

const Text = styled.p`
  font-family: "JetBrains Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        @media (max-width: 800px) {
          flex-direction: column;
        }
      `}
    >
      <ProfileImage />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <Text
          css={css`
            font-size: 2rem;
            border: 1px solid green;
          `}
        >
          Hi
        </Text>

        <Text
          css={css`
            border: 1px solid green;
          `}
        >
          Welcome to my humble corner of the web.
        </Text>
      </div>
    </div>
  </Layout>
)

export default IndexPage
