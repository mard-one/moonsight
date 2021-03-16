import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const RayGrad = styled.div`
  // position: absolute;
  // padding-bottom: 100%;
  // height: 0;
  background: radial-gradient(closest-side, transparent, #030303),
    linear-gradient(
      314deg,
      #a49b5080 11.55%,
      #eb758380 26.63%,
      #a946b980 51.72%,
      #55e6e680 90.25%
    ),
    black;
  // border-radius: 50%;
  z-index: -2;
`

const Ray = ({ style, className, children }) => {
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
  return (
    <RayGrad style={style} className={className}>
      {children}
    </RayGrad>
  )
}

export default Ray
