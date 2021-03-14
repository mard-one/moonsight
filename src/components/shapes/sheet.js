import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

const Shape = styled.div`
  position: absolute;
  width: 450px;
  height: 452px;
`

const Layer = styled.img`
  position: absolute;
  width: 100%;
`

const Sheet = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/sheet-layer-1.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/sheet-layer-2.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/sheet-layer-3.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/sheet-layer-4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/sheet-layer-5.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer src={data.layer1.publicURL} alt="123" style={{}} />
      <Layer src={data.layer2.publicURL} alt="123" style={{}} />
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

      {/* <Img
        style={{ ...layerStyles }}
        fixed={data.layer1.childImageSharp.fixed}
      /> */}
    </Shape>
  )
}

export default Sheet
