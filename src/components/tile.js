import React from "react"
import { css } from "styled-components"

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

export default Tile
