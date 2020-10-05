import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "styled-components"
import Image from "gatsby-image"
import useProfilePhoto from "../hooks/useProfilePhoto"

const ProfileImage = () => {
  const photo = useProfilePhoto()

  return (
    <div>
      <Image fixed={photo} />
    </div>
  )
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

const Tile = () => {
  return (
    <div
      css={css`
        margin-top: 0.5rem;
        margin-right: 1rem;

        flex-grow: 1;
        height: 150px;
        background-color: whitesmoke;
      `}
    ></div>
  )
}

const WhoIam = () => {
  return (
    <div>
      <div
        css={css`
          margin-top: 2rem;
          font-size: 1.5rem;
        `}
      >
        Who I am
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
    </div>
  )
}

const WhatIdo = () => {
  return (
    <div>
      <div
        css={css`
          font-size: 1.5rem;
        `}
      >
        What I do
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
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
    <WhoIam />
    <WhatIdo />
  </Layout>
)

export default IndexPage
