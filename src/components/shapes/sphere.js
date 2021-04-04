import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Shape } from "./ring"
import styled from "styled-components"

export const Layer = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const Sphere = ({ style, className, rotateDeg }) => {
  const data = useStaticQuery(graphql`
    fragment layerImages on File {
      childImageSharp {
        fixed(width: 450, height: 450) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/sphere-layer-1.png" }) {
        ...layerImages
      }
      layer2: file(relativePath: { eq: "shapes/sphere-layer-2.png" }) {
        ...layerImages
      }
      layer3: file(relativePath: { eq: "shapes/sphere-layer-3.png" }) {
        ...layerImages
      }
      layer4: file(relativePath: { eq: "shapes/sphere-layer-4.png" }) {
        ...layerImages
      }
      layer5: file(relativePath: { eq: "shapes/sphere-layer-5.png" }) {
        ...layerImages
      }
    }
  `)

  return (
    <Shape style={{ ...style }} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        style={{
          transform: `rotate(${rotateDeg}deg)`,
          objectPosition: "top",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        style={{
          transform: `rotate(${rotateDeg}deg)`,
          objectPosition: "bottom",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        style={{
          transform: `rotate(${rotateDeg}deg)`,
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        style={{
          transform: `rotate(${rotateDeg}deg)`,
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="123"
        style={{
          transform: `rotate(${rotateDeg}deg)`,
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default Sphere
