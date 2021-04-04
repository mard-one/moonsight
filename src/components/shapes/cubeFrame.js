import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layer, Shape } from "./ring"

const CubeFrame = ({ style, className }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "shapes/cube-frame-layer-1.png" }) {
        publicURL
      }
      layer2: file(relativePath: { eq: "shapes/cube-frame-layer-2.png" }) {
        publicURL
      }
      layer3: file(relativePath: { eq: "shapes/cube-frame-layer-3.png" }) {
        publicURL
      }
      layer4: file(relativePath: { eq: "shapes/cube-frame-layer-4.png" }) {
        publicURL
      }
      layer5: file(relativePath: { eq: "shapes/cube-frame-layer-5.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Shape style={style} className={className}>
      <Layer src={data.layer1.publicURL} alt="123" style={{}} />
      <Layer
        src={data.layer2.publicURL}
        alt="123"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Layer
        src={data.layer3.publicURL}
        alt="123"
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        src={data.layer4.publicURL}
        alt="123"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        src={data.layer5.publicURL}
        alt="123"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default CubeFrame
