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

const PosterSeries = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team31.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/poster-series-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid1: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid2: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid3: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid4: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid5: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid6: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid7: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-7.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid8: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-8.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid9: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-9.jpg"
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
          eq: "projects/poster-series-project-page-section-1-grid-10.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid11: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-11.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid12: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-12.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid13: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-13.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid14: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-14.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid15: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-15.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid16: file(
        relativePath: {
          eq: "projects/poster-series-project-page-section-1-grid-16.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.branding,
    name: "Poster Series 001",
    allCategories: ["Graphic Design", "Print Design", "Typography"],
    madeByName: "Mike Dziambor",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Graphic Design", "Print Design", "Typography"]}
            >
              Poster Series
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              The designs of the creatives are based on experimentation with the
              fonts, sizes, colors, contrasts and textures.
              <br />
              <br />
              The posters reveal the boldness of the propositions and the
              combination between the progressive ideas along with my
              inspirational touch, that makes them dynamic, powerful and very
              attractive for all users and customers in which the posters were
              featured.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          styleMd={{ gridGap: 40, gridTemplateColumns: "repeat(12, 1fr)" }}
          styleSm={{ gridGap: 20, gridTemplateColumns: "1fr" }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "7 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "5 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid4.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "9 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid5.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid6.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid7.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "7 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid8.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 12" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid9.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid10.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "7 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid11.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid12.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "5 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid13.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "9 / span 4" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid14.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid15.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "7 / span 6" }}
            styleSm={{ gridColumn: "1 / span 1" }}
          >
            <Img fluid={data.section1Grid16.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default PosterSeries
