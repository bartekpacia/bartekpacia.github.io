import React from "react"
import Layout from "../components/layout"
import Tile from "../components/tile"
import SEO from "../components/seo"
import { css } from "styled-components"

import useProfilePhoto from "../hooks/useProfilePhoto"

const ProfileImage = () => {
  const photo = useProfilePhoto()

  return <div></div>
}

const Top = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
      `}
    >
      <ProfileImage />
      <div
        css={css`
          font-size: 2rem;
        `}
      >
        Hi
      </div>

      <div
        css={css`
          margin-top: 1rem;
        `}
      >
        Welcome to my humble corner of the web.
      </div>
    </div>
  )
}

const LatestArticles = () => {
  return (
    <div>
      <div
        css={css`
          margin-top: 2rem;
          font-size: 1.5rem;
        `}
      >
        Latest articles
      </div>
      <div css={css``}>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Top />
    <LatestArticles />
  </Layout>
)

export default IndexPage
