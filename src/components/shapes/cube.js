import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layer, Shape } from "./ring"

const Cube = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/cube-layer-1.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/cube-layer-2.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/cube-layer-3.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/cube-layer-4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/cube-layer-5.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer
        src={data.layer1.publicURL}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(53.24deg)",
        }}
      />
      <Layer
        src={data.layer2.publicURL}
        alt="123"
        style={{
          mixBlendMode: "multiply",
          transform: "rotate(53.24deg)",
        }}
      />
      <Layer
        src={data.layer3.publicURL}
        alt="123"
        style={{
          mixBlendMode: "screen",
          transform: "rotate(53.24deg)",
        }}
      />
      <Layer
        src={data.layer4.publicURL}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
          transform: "rotate(53.24deg)",
        }}
      />
      <Layer
        src={data.layer5.publicURL}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
          transform: "rotate(53.24deg)",
        }}
      />
    </Shape>
  )
}

export default Cube