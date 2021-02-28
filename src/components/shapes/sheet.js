import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// childImageSharp {
//           fixed(width: 2000) {
//             ...GatsbyImageSharpFixed_withWebp_noBase64
//           }
//         }
import styled from "styled-components"

const Image = styled.img`
  position: absolute;
  width: 450px;
  height: 452px;
  top: 50%;
  left: 30%;
  z-index: -1;
`

const Sheet = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/sheet-layer-1.5.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/sheet-layer-2.5.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/sheet-layer-3.4.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/sheet-layer-4.4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/sheet-layer-5.4.png" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Image
        src={data.layer3.publicURL}
        alt="123"
        style={{
          mixBlendMode: "screen",
        }}
      />

      <Image
        src={data.layer4.publicURL}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Image
        src={data.layer1.publicURL}
        alt="123"
        style={{
          opacity: 0.5,
          mixBlendMode: "soft-light",
        }}
      />
      <Image
        src={data.layer2.publicURL}
        alt="123"
        style={{
          opacity: 0.2,
          mixBlendMode: "color-dodge",
        }}
      />
      
      <Image
        src={data.layer5.publicURL}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
      {/* <Img
        style={{
          mixBlendMode: "color-dodge",
          ...layerStyles,
        }}
        fixed={data.layer5.childImageSharp.fixed}
      /> */}

      {/* <Img
        style={{
          mixBlendMode: "soft-light",
          ...layerStyles,
        }}
        fixed={data.layer4.childImageSharp.fixed}
      /> */}

      {/* <Img
        style={{
          mixBlendMode: "soft-light",
          ...layerStyles,
        }}
        fixed={data.layer4.childImageSharp.fixed}
      /> */}

      {/* <Img
        style={{
          mixBlendMode: "screen",
          ...layerStyles,
        }}
        fixed={data.layer3.childImageSharp.fixed}
      /> */}

      {/* <Img
        style={{ ...layerStyles }}
        fixed={data.layer2.childImageSharp.fixed}
      /> */}

      {/* <Img
        style={{ ...layerStyles }}
        fixed={data.layer1.childImageSharp.fixed}
      /> */}
    </>
  )
}

export default Sheet
