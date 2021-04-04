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

const CoinSmall = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment coinSmallLayerImages on File {
      childImageSharp {
        fixed(width: 455) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/coin-small-layer-1.png" }) {
        ...coinSmallLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/coin-small-layer-2.png" }) {
        ...coinSmallLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/coin-small-layer-3.png" }) {
        ...coinSmallLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/coin-small-layer-4.png" }) {
        ...coinSmallLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/coin-small-layer-5.png" }) {
        ...coinSmallLayerImages
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
          transform: "rotate(29.62deg)",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          transform: "rotate(29.62deg)",
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
          transform: "rotate(29.62deg)",
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
          transform: "rotate(29.62deg)",
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
          transform: "rotate(29.62deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default CoinSmall
