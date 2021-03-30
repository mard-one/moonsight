import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const RayGrad = styled.div`
  // position: absolute;
  // padding-bottom: 100%;
  // height: 0;
  background: radial-gradient(closest-side, transparent, black),
    linear-gradient(
      179deg,
      rgb(235 117 131 / 50%) 7.05%,
      rgb(167 108 194 / 50%) 51.72%,
      rgb(131 85 230 / 50%) 100%
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
