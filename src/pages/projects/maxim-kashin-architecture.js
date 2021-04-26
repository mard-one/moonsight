import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "../../components/projects/carousel"
import Img from "gatsby-image"
import Paragraph from "../../components/projects/paragraph"
import ProjectDesc from "../../components/projects/projectDesc"
import Section from "../../components/projects/section"
import Layout from "../../layout/projects"
import { projectTypes } from "../work"
import styled from "styled-components"
import Video from "../../components/projects/video"

export const StyledGrid = styled.div`
  display: grid;
  ${props => props.theme.breakpoints.up("md")} {
    ${props => props.styleMd}
  }
  ${props => props.theme.breakpoints.down("sm")} {
    ${props => props.styleSm}
  }
  ${props => props.theme.breakpoints.down("xs")} {
    ${props => props.styleXs}
  }
`
export const StyledGridItem = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    ${props => props.styleMd}
  }
  ${props => props.theme.breakpoints.down("sm")} {
    ${props => props.styleSm}
  }
  ${props => props.theme.breakpoints.down("xs")} {
    ${props => props.styleXs}
  }
`

export const ResponsiveImgContainer = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    ${props => props.styleMd}
  }
  ${props => props.theme.breakpoints.down("sm")} {
    ${props => props.styleSm}
  }
  ${props => props.theme.breakpoints.down("xs")} {
    ${props => props.styleXs}
  }
`

const MaximKashinArchitecture = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team11.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Carousel1: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-1-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Carousel2: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-1-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Carousel3: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-1-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid1: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid4: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-3-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid2: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-3-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid3: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-3-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid4: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-3-grid-4.jpg"
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
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "Maxim Kashin Architecture",
    allCategories: [projectTypes.webdesign],
    madeByName: "Diana Dubina",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["UI/UX", "Web Design", "Art Direction"]}>
              Web design and style guide for Maxim Kashin is an architect based
              in Moscow
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Maxim Kashin was the chief architect in MONOLOKO design when had a
              vision of creating his personal interior and Architecture brand
              with the author's design.
              <br />
              <br />
              As the designer of the project, the biggest challenge was to
              define and set the structure and architecture of the website as
              well as designing the visual identity of the upcoming and
              ambitious venture, that wanted to reflect the sophisticated and
              award nominated creator’s work, therefore, the creation of UX
              fundamentals, as well as designing the visual identity of the
              website.
            </Paragraph>
            <Paragraph title="approach">
              The first step was to understand the business goals in order to
              design a comprehensive and user oriented website while building
              the UX fundamentals, such as research and user flows, moving into
              the creation of a design system to be developed in the website,
              creating consistency throughout as well as ensuring the
              scalability of the components and lastly, categorazing and
              grouping all the information to be included in the web as sections
              or tabs in the menu. <br />
              <br />
              All these efforts, translated into an engaging and elegant website
              that ensure the best user experience for all the customers
              browsing Maxim Kashin Architecture website.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "83.33vw", maxWidth: "1000px" }}
            styleMd={{
              marginRight: 40,
            }}
            styleSm={{ marginRight: 20 }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "700px" }}
            styleMd={{
              marginRight: 40,
            }}
            styleSm={{ marginRight: 20 }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "700px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Website" clientName="002">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="PROJECTS AND PUBLICATIONS">
              In the below examples, is clear how the website design is
              completly align with the different projects that the arquictech
              has wordked on, from country-side homes to apartments and
              restaurants both the conceps merge together and give a sense of
              modernism and style, having always in mind the usability to enhace
              the experience of each user.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Video
              videoSrcURL="https://www.youtube.com/embed/U2zFTRaaUU8?modestbranding=1"
              videoTitle="Maxim Kashin Architecture"
              ratio="56.25%"
            />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid4.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Carousel>
              <ResponsiveImgContainer
                style={{ width: "58.33vw", maxWidth: "700px" }}
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
                style={{ width: "58.33vw", maxWidth: "700px" }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section2Carousel2.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
            </Carousel>
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Branding" clientName="003" last>
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="RESPONSIVE DESIGN">
              Maxim Kashin Architecture is a website design with the highest
              design and engineering standards, therefore, UX best practices and
              responsive design were a fundamental part of the creation of the
              site.
              <br />
              <br />
              The screens reflect the same elegance and consistency as the
              desktop.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ GridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default MaximKashinArchitecture
