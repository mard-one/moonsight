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

const Noosphera = () => {
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
        relativePath: { eq: "projects/noosphera-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-1-banner.jpg"
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
          eq: "projects/noosphera-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/noosphera-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel4: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-2-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-3-grid-1.jpg"
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
          eq: "projects/noosphera-project-page-section-3-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-4-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-4-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section5Banner: file(
        relativePath: {
          eq: "projects/noosphera-project-page-section-5-banner.jpg"
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
    mainCategory: projectTypes.webdesign,
    name: "Noosphera",
    allCategories: ["Web Design", "Interaction Design", "UI/UX"],
    madeByName: "Viktor Khorobrykh",
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
              Identity and web design for a Russian company, Noosphera.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              Noosphera is an space to convert peoples ideas into reality. The
              company offer they guidance and knowledge about collecting and
              finding financial support to not let their ideas fail and instead
              help the customers to develop them and make themcome true;
              basivally is a company majorly focused on helping potential
              projects find investors.
              <br />
              <br />
              The main goal of this project was to create the brand style
              guideline foundations and a marketing website to promote the
              company services, while keeping visual consistency with the
              identity concept.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BUSINESS CARDS">
              The business cards are minimalistic however it has a classy
              design, where the focus or attention is towards the logo and brand
              name and contact details of the staff member of the company.
              <br />
              <br />
              Within the card there is also a representation of connecting the
              logo shapes, symbolizing the linking between an idea with the
              investor and how things smoothly happen with Noosphera help.
            </Paragraph>
          </Grid>
        </Grid>
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
            style={{ width: "41.66vw", maxWidth: "500px" }}
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
          <ResponsiveImgContainer
            style={{ width: "41.66vw", maxWidth: "500px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ONLINE AND OFFLINE DESIGN">
              The design is consistent throughout the different platforms and
              applications, whether is the website or the company stationary,
              the usage of the logo, style guidelines and the look and feel in
              general remains consistent and harmonic with the brand concept.
              <br />
              <br />
              The web pages along with the printed material feature a
              well-balanced combination of white and deep dark backgrounds that
              becomes lively with the logo colors, textures and animation, is
              basically an eye-pleasing design.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40, gridTemplateColumns: "1fr 1fr" }}
          styleSm={{ gridGap: 20, gridTemplateColumns: "1fr" }}
        >
          <StyledGridItem>
            <Img fluid={data.section3Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section3Grid2.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Branding" clientName="004">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="PRODUCT CARD">
              The website displays three different types of visuals, from one
              side there are photos mainly used in the “News” seccion, from the
              other side there are illustrations and animations which are used
              to describe the services of the company.
              <br />
              <br />
              The inside pages of the website follow a clear hierarchization of
              the information and visual content, making them scannable and
              highly readable, while the animation of the logo sets a nice and
              dynamic visual atmosphere.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img fluid={data.section4Grid1.childImageSharp.fluid} />
          </Grid>
        </Grid>
        <Img fluid={data.section4Grid2.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Responsive Design" clientName="005" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN" sticky>
              In order to make the website usable and accessible from any
              device, I have designed the mobile adaptation and optimization of
              the pages while following the principles of mobile interactions
              and behaviors.
              <br />
              <br />
              Essentially the creation of Noospera branding and the company
              website, was the result of the collaboration between the business
              goals and the understanding of the user needs, to finally deliver
              a solution appealing and useful for the consumers.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img fluid={data.section5Banner.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default Noosphera
