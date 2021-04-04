import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Shape } from "./ring"
import Img from "gatsby-image"
import styled from "styled-components"

const Layer = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const SpiralBallFirst = ({ className, style }) => {
  const data = useStaticQuery(graphql`
    fragment spiralBallFirstLayerImages on File {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-1.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
      layer2: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-2.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
      layer3: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-3.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
      layer4: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-4.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
      layer5: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-5.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
      layer6: file(
        relativePath: { eq: "shapes/spiral-ball-first-layer-6.png" }
      ) {
        ...spiralBallFirstLayerImages
      }
    }
  `)
  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="1231"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="1232"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="1233"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="1234"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="1235"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer6.childImageSharp.fixed}
        alt="1236"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(-45deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default SpiralBallFirst
