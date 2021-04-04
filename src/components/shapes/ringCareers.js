import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Shape } from "./ring"

const Layer = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const RingCareers = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment ringCareersLayerImages on File {
      childImageSharp {
        fixed(width: 326) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/ring-careers-layer-1.png" }) {
        ...ringCareersLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/ring-careers-layer-2.png" }) {
        ...ringCareersLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/ring-careers-layer-3.png" }) {
        ...ringCareersLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/ring-careers-layer-4.png" }) {
        ...ringCareersLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/ring-careers-layer-5.png" }) {
        ...ringCareersLayerImages
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
          mixBlendMode: "color-dodge",
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

export default RingCareers
