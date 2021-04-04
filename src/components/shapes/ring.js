import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const Shape = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const Layer = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: left;
`
const LayerTemp = styled(Img)`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

const Ring = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    fragment ringLayerImages on File {
      childImageSharp {
        fixed(width: 300, height: 230) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    query {
      layer1: file(relativePath: { eq: "shapes/ring-layer-1.png" }) {
        ...ringLayerImages
      }
      layer2: file(relativePath: { eq: "shapes/ring-layer-2.png" }) {
        ...ringLayerImages
      }
      layer3: file(relativePath: { eq: "shapes/ring-layer-3.png" }) {
        ...ringLayerImages
      }
      layer4: file(relativePath: { eq: "shapes/ring-layer-4.png" }) {
        ...ringLayerImages
      }
      layer5: file(relativePath: { eq: "shapes/ring-layer-5.png" }) {
        ...ringLayerImages
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <LayerTemp
        fixed={data.layer1.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "hard-light",
        }}
      />
      <LayerTemp
        fixed={data.layer2.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "hard-light",
        }}
      />
      <LayerTemp
        fixed={data.layer3.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <LayerTemp
        fixed={data.layer4.childImageSharp.fixed}
        alt="123"
        imgStyle={{
          objectFit: "contain",
        }}
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <LayerTemp
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

export default Ring
