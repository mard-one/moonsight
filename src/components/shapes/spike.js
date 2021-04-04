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

const Spike = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment spikeLayerImages on File {
      childImageSharp {
        fixed(width: 208) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/spike-layer-1.png" }) {
        ...spikeLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/spike-layer-2.png" }) {
        ...spikeLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/spike-layer-3.png" }) {
        ...spikeLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/spike-layer-4.png" }) {
        ...spikeLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "hard-light",
          transform: "rotate(40.48deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "screen",
          transform: "rotate(40.48deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
          transform: "rotate(40.48deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <Layer
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(40.48deg)",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
      />
    </Shape>
  )
}

export default Spike
