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

const DottedSphere = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment dottedSphereLayerImages on File {
      childImageSharp {
        fixed(width: 390) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/dotted-sphere-layer-1.png" }) {
        ...dottedSphereLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/dotted-sphere-layer-2.png" }) {
        ...dottedSphereLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/dotted-sphere-layer-3.png" }) {
        ...dottedSphereLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/dotted-sphere-layer-4.png" }) {
        ...dottedSphereLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/dotted-sphere-layer-5.png" }) {
        ...dottedSphereLayerImages
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
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default DottedSphere
