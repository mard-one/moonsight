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

const Coin = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment coinLayerImages on File {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/coin-layer-1.png" }) {
        ...coinLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/coin-layer-2.png" }) {
        ...coinLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/coin-layer-3.png" }) {
        ...coinLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/coin-layer-4.png" }) {
        ...coinLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/coin-layer-5.png" }) {
        ...coinLayerImages
      }
      layer6: file(relativePath: { eq: "shapes/coin-layer-6.png" }) {
        ...coinLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
          mixBlendMode: "screen",
        }}
      />
      <Layer
        fixed={data.layer6.childImageSharp.fixed}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="123"
        style={{
          transform: "rotate(62.71deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default Coin
