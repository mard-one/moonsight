import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Shape } from "./ring"
import Img from "gatsby-image"
import styled from "styled-components"

const Layer = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const SpiralTube = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment spiralTubeLayerImages on File {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/spiral-tube-layer-1.png" }) {
        ...spiralTubeLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/spiral-tube-layer-2.png" }) {
        ...spiralTubeLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/spiral-tube-layer-3.png" }) {
        ...spiralTubeLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/spiral-tube-layer-4.png" }) {
        ...spiralTubeLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/spiral-tube-layer-5.png" }) {
        ...spiralTubeLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(15deg)",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(15deg)",
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(15deg)",
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(15deg)",
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(15deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default SpiralTube
