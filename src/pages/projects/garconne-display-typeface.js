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

const StyledBackground = styled.div`
  width: 100vw;
  height: calc(100% - 1800px);
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: -1;
  ${props => props.theme.breakpoints.down("sm")} {
    bottom: -60px;
    height: calc(100% - 2400px);
  }
  ${props => props.theme.breakpoints.down("xs")} {
    height: calc(100% - 1640px);
  }
`

const GarconneDisplayTypeface = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: {
          eq: "projects/garconne-display-typeface-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid1: file(
        relativePath: {
          eq: "projects/garconne-display-typeface-project-page-section-1-grid-1.jpg"
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
          eq: "projects/garconne-display-typeface-project-page-section-1-grid-2.jpg"
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
          eq: "projects/garconne-display-typeface-project-page-section-1-grid-3.jpg"
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
          eq: "projects/garconne-display-typeface-project-page-section-1-grid-4.jpg"
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
          eq: "projects/garconne-display-typeface-project-page-section-1-grid-5.jpg"
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
    mainCategory: projectTypes.typography,
    name: "Garçonne Display Typeface",
    allCategories: ["Typography", "Graphic Design", "Art Direction"],
    madeByName: "Maximilian Müsgens",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001" last>
        <StyledBackground />
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Typography", "Graphic Design", "Art Direction"]}
            >
              A typeface inspired by the fashion of the Flappers (garçonnes in
              french), the Garçonne Display.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Inspired by the fashion of the Flappers (called garçonnes in
              french) of the 1920s, the Garçonne Display typeface is a bridge
              between old 20th century fonts and today's fonts with modern
              character.
              <br />
              <br />
              Located somewhere between art deco, sans serif grotesque and
              antiqua, the typeface fits into the context of past and present.
              <br />
              <br />
              The final objective of the creation of the Garçonne Display was to
              design a typeface - en vogue regardless of time that would add
              style while being legible, easy to read, and comprehensive.
            </Paragraph>
            <Paragraph title="approach">
              I started brainstorming the various visual arts and the
              posibilities on using them not to mention the experimentation with
              diversified styles, playing around with the shapes and thickness
              of the lines, using contours along with fills having 32 principles
              as the baseline, legibility and readability.
              <br />
              <br />
              The result was a typeface with 6 weights plus variables, supported
              for more than 30 languajes and with features like stylistic
              alternates, standard ligatures, fractions, numerators,
              denominators, oldstyle figures, tabular figures, variable, making
              the typeface unique and modern.
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
        </StyledGrid>
      </Section>
      {/* <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      /> */}
      {/* <StyledGrid
        style={{ gridTemplateColumns: "1fr 1fr" }}
        styleMd={{ gridGap: 40 }}
        styleSm={{ gridGap: 20 }}
      >
        <StyledGridItem
          styleMd={{ marginTop: 300, gridColumn: "1 / span 1" }}
          styleSm={{ gridColumn: "1 / span 2" }}
        >
          <Img fluid={data.section4Grid1.childImageSharp.fluid} />
          <StyledGridItem
            styleMd={{ marginTop: 40 }}
            styleSm={{ marginTop: 20 }}
          >
            <Img fluid={data.section4Grid3.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGridItem>
        <StyledGridItem
          styleMd={{ gridColumn: "2 / span 1" }}
          styleSm={{ gridColumn: "1 / span 2" }}
        >
          <Img fluid={data.section4Grid2.childImageSharp.fluid} />
          <StyledGridItem
            styleMd={{ marginTop: 40 }}
            styleSm={{ marginTop: 20 }}
          >
            <Img fluid={data.section4Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGridItem>
      </StyledGrid> */}
      {/* <Carousel>
        <ResponsiveImgContainer
          style={{ width: "85vw", maxWidth: "1200px" }}
          styleMd={{
            marginRight: 40,
          }}
          styleSm={{ marginRight: 20 }}
        >
          <Img
            style={{ height: "100%" }}
            fluid={data.section2Carousel1.childImageSharp.fluid}
          />
        </ResponsiveImgContainer>
        <ResponsiveImgContainer
          style={{ width: "85vw", maxWidth: "1200px" }}
          styleMd={{
            marginRight: 40,
          }}
          styleSm={{ marginRight: 20 }}
        >
          <Img
            style={{ height: "100%" }}
            fluid={data.section2Carousel2.childImageSharp.fluid}
          />
        </ResponsiveImgContainer>
        <ResponsiveImgContainer
          style={{ width: "41.66vw", maxWidth: "500px" }}
          styleMd={{
            marginRight: 40,
          }}
          styleSm={{ marginRight: 20 }}
        >
          <Img
            style={{ height: "100%" }}
            fluid={data.section2Carousel3.childImageSharp.fluid}
          />
        </ResponsiveImgContainer>
        <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "600px" }}>
          <Img
            style={{ height: "100%" }}
            fluid={data.section2Carousel4.childImageSharp.fluid}
          />
        </ResponsiveImgContainer>
      </Carousel> */}
    </Layout>
  )
}

export default GarconneDisplayTypeface
