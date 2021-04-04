import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Shape } from "./ring"
import Img from "gatsby-image"
import styled from "styled-components"

export const Layer = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const Spiral = ({ className, style }) => {
  const data = useStaticQuery(graphql`
    fragment spiralLayerImages on File {
      childImageSharp {
        fixed(width: 430, height: 430) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/spiral-layer-1.png" }) {
        ...spiralLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/spiral-layer-2.png" }) {
        ...spiralLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/spiral-layer-3.png" }) {
        ...spiralLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/spiral-layer-4.png" }) {
        ...spiralLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/spiral-layer-5.png" }) {
        ...spiralLayerImages
      }
    }
  `)
  return (
    <Shape style={style} className={className}>
      <Layer fixed={data.layer1.childImageSharp.fixed} alt="1231" style={{}} />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="1232"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="1233"
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="1234"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="1235"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default Spiral
