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

const SpiralBallSecond = ({ className, style }) => {
  const data = useStaticQuery(graphql`
    fragment spiralBallSecondLayerImages on File {
      childImageSharp {
        fixed(width: 480) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-1.png" }
      ) {
        ...spiralBallSecondLayerImages
      }
      layer2: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-2.png" }
      ) {
        ...spiralBallSecondLayerImages
      }
      layer3: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-3.png" }
      ) {
        ...spiralBallSecondLayerImages
      }
      layer4: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-4.png" }
      ) {
        ...spiralBallSecondLayerImages
      }
      layer5: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-5.png" }
      ) {
        ...spiralBallSecondLayerImages
      }
    }
  `)
  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="1232"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="1233"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="1234"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="1235"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="1236"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default SpiralBallSecond
