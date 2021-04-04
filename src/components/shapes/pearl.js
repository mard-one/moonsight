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

const Pearl = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment pearlLayerImages on File {
      childImageSharp {
        fixed(width: 260) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/pearl-layer-1.png" }) {
        ...pearlLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/pearl-layer-2.png" }) {
        ...pearlLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/pearl-layer-3.png" }) {
        ...pearlLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/pearl-layer-4.png" }) {
        ...pearlLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/pearl-layer-5.png" }) {
        ...pearlLayerImages
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
        style={{}}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{}}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
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
          mixBlendMode: "overlay",
        }}
      />
    </Shape>
  )
}

export default Pearl
