import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Layer, Shape } from "./ring"

const SpiralBallFirst = ({ className, style }) => {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-1.png" }
      ) {
        publicURL
      }
      layer2: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-2.png" }
      ) {
        publicURL
      }
      layer3: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-3.png" }
      ) {
        publicURL
      }
      layer4: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-4.png" }
      ) {
        publicURL
      }
      layer5: file(
        relativePath: { eq: "shapes/spiral-ball-second-layer-5.png" }
      ) {
        publicURL
      }
    }
  `)
  return (
    <Shape style={style} className={className}>
      <Layer
        src={data.layer1.publicURL}
        alt="1232"
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        src={data.layer2.publicURL}
        alt="1233"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
      <Layer
        src={data.layer3.publicURL}
        alt="1234"
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Layer
        src={data.layer4.publicURL}
        alt="1235"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Layer
        src={data.layer5.publicURL}
        alt="1236"
        style={{
          mixBlendMode: "color-dodge",
        }}
      />
    </Shape>
  )
}

export default SpiralBallFirst
