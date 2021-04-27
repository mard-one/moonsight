import React from "react"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "../../components/projects/carousel"
import Img from "gatsby-image"
import Paragraph from "../../components/projects/paragraph"
import ProjectDesc from "../../components/projects/projectDesc"
import Section from "../../components/projects/section"
import Layout from "../../layout/projects"
import { projectTypes } from "../work"
import styled from "styled-components"
import {
  ResponsiveImgContainer,
  StyledGrid,
  StyledGridItem,
} from "./maxim-kashin-architecture"
import Video from "../../components/projects/video"

const PosterCollection = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team7.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/poster-collection-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid1: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid2: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid3: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid4: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid5: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid6: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid7: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-7.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid8: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-8.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid9: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-9.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid10: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-10.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid11: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-11.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid12: file(
        relativePath: {
          eq: "projects/poster-collection-project-page-section-1-grid-12.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.branding,
    name: "Poster Collection / 2018 — 2020",
    allCategories: ["Graphic Design", "Illustration", "Poster Design"],
    madeByName: "Oleg Kulik",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Graphic Design", "Illustration", "Poster Design"]}
            >
              Selected work from my typographic poster exercises
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              The posters were designed with different purposes, contexts and
              brands. My work has been featured digitally as well as in the
              printed media.
              <br />
              <br />
              Some of the concepts are to convey the brand's message and reach a
              wider audience and some others represent a propest of today's
              reality in the world.
              <br />
              <br />
              The use of photos and illustrations is important, however the
              common area on all the posters is the strength and dynamism of the
              use of typographies with its various sizes, weights and colors.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem>
            <Img fluid={data.section1Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid4.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid5.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid6.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid7.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid8.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid9.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid10.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid11.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid12.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default PosterCollection
