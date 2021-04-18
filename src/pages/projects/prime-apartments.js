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

const PrimeApartments = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/prime-apartments-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-3-grid-1.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid2: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-3-grid-2.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid3: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-3-grid-3.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid4: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-3-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-4-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-4-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-4-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid4: file(
        relativePath: {
          eq: "projects/prime-apartments-project-page-section-4-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.appdesign,
    name: "Prime Apartments – Premium real estate",
    allCategories: ["Web Design", "Interaction Design", "UI/UX"],
    madeByName: "Stanislav Kozlov",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Web Design", "Interaction Design", "UI/UX"]}
            >
              Web and interaction design for a Russian Real Estate company,
              Prime Apartments.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              This project was developed for the premium class apart-complex.
              The house is located in the center of Moscow — center of
              attraction for success, inspiration and strength. The perfect
              location in a quiet side street guarantees the owners privacy and
              solitude.
              <br />
              <br />
              The project is designed in a minimalistic style with an emphasis
              on user-friendliness and focusing on the most important aspects,
              the research.
              <br />
              <br />
              As a part of the process, a competitive analysis of 10 sites, a
              visual analysis of the "real estate” domain, a brief and prototype
              have been compiled in order for it to be a successful project.
            </Paragraph>
          </Grid>
        </Grid>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="INSIDE PAGES">
              The concept was inspired by the original architecture of the house
              itself. Geometric elements of the front façade that attract
              attention, bright and spacious rooms with five-meter ceilings,
              immediately refer to the aesthetics of American classic art Deco.
              <br />
              <br />
              While designing the website for Prime Apartments, it was crucial
              to have all those elements in mind, so the final output could
              reflect the values and aesthetics of the creators of the project.
              <br />
              <br />
              The final layout of the apartments as well as the website,
              represents a balance between the refined evening dresses,
              energetic dancing to the sounds of jazz, fun and the spirit of
              freedom with a minimalistic design.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "85vw", maxWidth: "1100px" }}
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
          <ResponsiveImgContainer style={{ width: "75vw", maxWidth: "900px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Illustration" clientName="003">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN">
              The prime apt, has seven floors and a total of 90 apartments
              Moscow-city, the world trade center, famous theaters, museums, the
              best restaurants- the center of Moscow is the center of attraction
              for success inspiration and strength, so in the responsive design
              I have strategically layout all the details in order to show the
              information with a clean and neat design.
              <br />
              <br />
              Therefore, every detail was thought when making the composition of
              the website along with its categories and inside pages.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr 1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem
                styleMd={{ marginTop: 250, gridColumn: "1 / span 1" }}
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
                styleMd={{ gridColumn: "1 / span 2" }}
                styleSm={{ gridColumn: "1 / span 2" }}
              >
                <Img fluid={data.section3Grid3.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem
                styleMd={{ gridColumn: "1 / span 2" }}
                styleSm={{ gridColumn: "1 / span 2" }}
              >
                <Img fluid={data.section3Grid4.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="THE FINAL OUTPUT">
              The final website of prime apartments is based on the research
              done and the understanding of the real estate domain as well as
              the customers needs while vieween or buying their properties.
              <br />
              <br />
              The landing page along with the description pages and the website
              include various media assets and photos of the apartments,
              showcasing to the user the features and characteristics of the
              flats. It is an intuitive and user-friendly design for all
              customers browsing the web and its offers and interactive and
              enjoyable experience.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          styleMd={{ gridGap: 40, gridTemplateColumns: "1fr 1fr" }}
          styleSm={{ gridGap: 20, gridTemplateColumns: "1fr" }}
        >
          <StyledGridItem>
            <Img fluid={data.section4Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section4Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section4Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section4Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default PrimeApartments
