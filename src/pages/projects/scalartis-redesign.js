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

const ScalartisRedesign = () => {
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
        relativePath: { eq: "projects/scalartis-redesign-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid1: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-1-grid-1.jpg"
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
          eq: "projects/scalartis-redesign-project-page-section-1-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel4: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-2-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel5: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-2-carousel-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/scalartis-redesign-project-page-section-3-grid-1.jpg"
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
          eq: "projects/scalartis-redesign-project-page-section-3-grid-2.jpg"
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
          eq: "projects/scalartis-redesign-project-page-section-3-grid-3.jpg"
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
    mainCategory: projectTypes.appdesign,
    name: "Scalartis Redesign",
    allCategories: ["Branding", "Web Design"],
    madeByName: "Viktor Khorobrykh",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["BRANDING", "WEB DESIGN"]}>
              Branding and web design for a software development consultancy,
              Scalartis.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Scalartis is a boutique consultancy providing end-to-end expertise
              for software development and support.
              <br />
              <br />
              Implementing agile as a way of working, in Scalartis the idea of
              building a stable core while mainting the ability of to adapt and
              change quickly.
              <br />
              <br />I was in charge of setting the design principles, the design
              system and finally the patterns and rules for the different
              interactions within the website.
            </Paragraph>
            <Paragraph title="approach">
              A software development consultancy should provide the users a way
              to connect and interact digitally with the brands and their
              multiple platforms available in the market, such us native and web
              based applications.
              <br />
              <br />
              That’s why having research in place, building a UX library pattern
              not only for the interactions but also for the visuals and keeping
              in mind the best practices were the key points to design a
              successful Scalartis website, always aligning with the trends, new
              technologies and rapid movement of the digital world.
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
        </StyledGrid>
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BRANDING">
              Scalartis website is a representation of the characteristics and
              essence of the boutique.
              <br />
              <br />
              The visual identity of the web, is a define but neat demonstration
              on the importance of the concepts of design and tech development
              components for the consultancy, inspired and based on the
              end-to-end customer journeys.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "75vw", maxWidth: "900px" }}
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
            style={{ width: "75vw", maxWidth: "900px" }}
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
            style={{ width: "75vw", maxWidth: "900px" }}
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
          <ResponsiveImgContainer
            style={{ width: "75vw", maxWidth: "900px" }}
            styleMd={{
              marginRight: 40,
            }}
            styleSm={{ marginRight: 20 }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer style={{ width: "75vw", maxWidth: "900px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel5.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="WEBSITE">
              The final aim of this project was to create an engaging channel,
              allowing the companies to identify and fulfil the problems or
              needs of their final customer.
              <br />
              <br />
              Therefore, a balance between the visual communication along with
              the creation and development of new platforms for end users that
              consume the services and products was a vital part of making an
              impact and positioning Scalartis as a successful boutique on the
              fast paced life of the digital consultancies.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem>
                <Img fluid={data.section3Grid1.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section3Grid2.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section3Grid3.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default ScalartisRedesign
