import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

export const Shape = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const Layer = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: left;
`

const Ring = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/ring-layer-1.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/ring-layer-2.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/ring-layer-3.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/ring-layer-4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/ring-layer-5.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        src={data.layer1.publicURL}
        alt="123"
        style={{
          mixBlendMode: "hard-light",
        }}
      />
      <Layer
        src={data.layer2.publicURL}
        alt="123"
        style={{
          mixBlendMode: "hard-light",
        }}
      />
      <Layer
        src={data.layer3.publicURL}
        alt="123"
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        src={data.layer4.publicURL}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        src={data.layer5.publicURL}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default Ring
