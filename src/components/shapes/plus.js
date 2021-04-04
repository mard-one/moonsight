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

const Plus = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment plusLayerImages on File {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/plus-layer-1.png" }) {
        ...plusLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/plus-layer-2.png" }) {
        ...plusLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/plus-layer-3.png" }) {
        ...plusLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/plus-layer-4.png" }) {
        ...plusLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/plus-layer-5.png" }) {
        ...plusLayerImages
      }
      layer6: file(relativePath: { eq: "shapes/plus-layer-5.png" }) {
        ...plusLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "multiply",
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        style={{
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        style={{
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "screen",
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer5.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer6.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(25.77deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
    </Shape>
  )
}

export default Plus
