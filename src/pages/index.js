import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import useProfilePhoto from "../hooks/useProfilePhoto"

const Text = styled.p`
  font-family: Menlo, "Roboto Mono", Courier New, monospace;
`

const ProfileImage = () => {
  const photo = useProfilePhoto()

  return (
    <div>
      <h1>Hello gatsby-image</h1>
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
      <Text
        css={css`
          font-size: 2rem;
        `}
      >
        Hi
      </Text>

      <Text
        css={css`
          margin-top: 1rem;
        `}
      >
        Welcome to my humble corner of the web.
      </Text>
    </div>
  )
}

const Tile = () => {
  return (
    <div
      css={css`
        margin-top: 0.5rem;
        margin-right: 1rem;

        width: 150px;
        height: 150px;
        background-color: whitesmoke;
      `}
    ></div>
  )
}

const WhoIam = () => {
  return (
    <div>
      <Text
        css={css`
          margin-top: 2rem;
          font-size: 1.5rem;
        `}
      >
        Who I am
      </Text>
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
      <Text
        css={css`
          font-size: 1.5rem;
        `}
      >
        What I do
      </Text>
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
