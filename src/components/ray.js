import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Ray = styled(Img)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  // left: 195px;
  // top: -823px;
`
const RayGrad = styled.span`
  position: absolute;
  width: 1500px;
  height: 1500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(closest-side, transparent, #030303),
    linear-gradient(
      336deg,
      rgb(166 155 80),
      rgb(235 117 131) 25%,
      rgb(169 70 185) 50%,
      rgb(85 230 230) 90%
    );
  // mix-blend-mode: normal;
  // conic-gradient(#eb7583, #a76cc2, #8355e6, #61008d);
  // background: radial-gradient(
  //     ellipse closest-side,
  //     rgba(255, 255, 255, 1) 100%,
  //     rgba(255, 255, 255, 0.84) 75%,
  //     rgba(139, 139, 139, 0.37) 0%
  //   );
  // linear-gradient(red, blue, green);
  // linear-gradient(
  //   163deg,
  //   rgb(235 117 131 / 30%) 7.05%,
  //   rgb(167 108 194 / 40%) 51.72%,
  //   rgb(131 85 230 / 40%) 90.25%,
  //   rgb(97 0 141 / 0%) 97.53%
  // );
  // linear-gradient(
  //   314.93deg,
  //   #eb7583 7.05%,
  //   #a76cc2 51.72%,
  //   #8355e6 90.25%,
  //   rgba(97, 0, 141, 0) 97.53%
  // );
  // background: linear-gradient(
  //   314.93deg,
  //   #eb7583 7.05%,
  //   #a76cc2 51.72%,
  //   #8355e6 90.25%,
  //   rgba(97, 0, 141, 0) 97.53%
  // );
  // opacity: 0.4;
  // filter: blur(200px);
  border-radius: 50%;
`

const Gradient = ({ style, children }) => {
  const data = useStaticQuery(graphql`
    query {
      ray: file(relativePath: { eq: "ray.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return <RayGrad style={style}>{children}</RayGrad>
  // return (
  //   <Ray
  //     style={{ position: "absolute" }}
  //     fluid={data.ray.childImageSharp.fluid}
  //   />
  // )
}

export default Gradient
