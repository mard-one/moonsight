import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// childImageSharp {
//           fixed(width: 2000) {
//             ...GatsbyImageSharpFixed_withWebp_noBase64
//           }
//         }
import { Layer, Shape } from "./ring"

const Sheet = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/sphere-layer-1.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/sphere-layer-2.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/sphere-layer-3.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/sphere-layer-4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/sphere-layer-5.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Shape
      style={{ ...style, backgroundColor: "#4b2243", borderRadius: "50%" }}
      className={className}
    >
      <Layer
        src={data.layer1.publicURL}
        alt="123"
        style={{
          transform: "rotate(-150deg)",
          objectPosition: "top",
        }}
      />
      <Layer
        src={data.layer2.publicURL}
        alt="123"
        style={{
          transform: "rotate(-150deg)",
          objectPosition: "bottom",
        }}
      />
      <Layer
        src={data.layer3.publicURL}
        alt="123"
        style={{
          transform: "rotate(-150deg)",
          mixBlendMode: "screen",
        }}
      />
      <Layer
        src={data.layer4.publicURL}
        alt="123"
        style={{
          transform: "rotate(-150deg)",
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        src={data.layer5.publicURL}
        alt="123"
        style={{
          transform: "rotate(-150deg)",
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default Sheet
