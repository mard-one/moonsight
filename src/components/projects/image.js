import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({src, alt, style = {}}) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1230) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `)
  const image = allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === src
  )
  // console.log("image", image)
  if (!image) {
    return null
  }
  return <Img fluid={image.node.fluid} alt={alt} style={style} />
}

export default Image
