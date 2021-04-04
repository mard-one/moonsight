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

const Cube = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment cubeLayerImages on File {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/cube-layer-1.png" }) {
        ...cubeLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/cube-layer-2.png" }) {
        ...cubeLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/cube-layer-3.png" }) {
        ...cubeLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/cube-layer-4.png" }) {
        ...cubeLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/cube-layer-5.png" }) {
        ...cubeLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(53.24deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "multiply",
          transform: "rotate(53.24deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "screen",
          transform: "rotate(53.24deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
          transform: "rotate(53.24deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(53.24deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
    </Shape>
  )
}

export default Cube
