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

const CubeFrame = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment cubeFrameLayerImages on File {
      childImageSharp {
        fixed(width: 260) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/cube-frame-layer-1.png" }) {
        ...cubeFrameLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/cube-frame-layer-2.png" }) {
        ...cubeFrameLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/cube-frame-layer-3.png" }) {
        ...cubeFrameLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/cube-frame-layer-4.png" }) {
        ...cubeFrameLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/cube-frame-layer-5.png" }) {
        ...cubeFrameLayerImages
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
          transform: "rotate(30deg)",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(30deg)",
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
          transform: "rotate(30deg)",
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
          transform: "rotate(30deg)",
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
          transform: "rotate(30deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default CubeFrame
