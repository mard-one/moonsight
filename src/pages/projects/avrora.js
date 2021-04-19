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

const Avrora = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(relativePath: { eq: "projects/avrora-project-page-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 510) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel4: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-2-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-3-grid-1.jpg"
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
          eq: "projects/avrora-project-page-section-3-grid-2.jpg"
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
          eq: "projects/avrora-project-page-section-3-grid-3.jpg"
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
          eq: "projects/avrora-project-page-section-3-grid-4.jpg"
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
          eq: "projects/avrora-project-page-section-4-grid-1.jpg"
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
          eq: "projects/avrora-project-page-section-4-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-4-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid4: file(
        relativePath: {
          eq: "projects/avrora-project-page-section-4-grid-4.jpg"
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
    name: "Avrora Systems",
    allCategories: [
      projectTypes.appdesign,
      projectTypes.editorial,
      projectTypes.illustration,
    ],
    madeByName: "Viktor Khorobrykh",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["Graphic Design", "Web Design", "UI/UX"]}>
              Product branding and website for Avrora Systems
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Avrora specialize in the creation of systems and complexes for
              control of technical facilities of ships and vessels, also offers
              defense products, civil marine equipment, integrated solutions,
              etc, as well some services like testing centers and meteorological
              service.
              <br />
              <br />
              The company has risen from creation of a local controller up to
              implementation of integrated automated control systems and the aim
              of the project was to create a website showcasing all the services
              and solutions that the company offers by using illustrative
              images, an appropriate language and key words friendlier to all
              visitors.
            </Paragraph>
          </Grid>
        </Grid>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BRAND IDENTITY">
              Avrora Systems is recognized for their scientific and engineering
              development and for being one of the leaders in the sector.
              <br />
              <br />
              The concept of identity and branding creation was inspired by
              technology and engineering. The use of colors such as blue, dark,
              gray and white, shapes and forms of marine and river items
              represents the company's products and activity.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
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
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="THE WEBSITE">
              The website design offers an incredible user experience that
              involves the users with the mix of bright colors, big and readable
              fonts, fun and modern iconography, high-quality visuals and
              usability principles.
              <br />
              <br />
              It is important to underline that the visitors have all the
              information available at a glance, such as company information,
              certificates, partners, offices, products, services, processes,
              manufacturing, contacts, among others things, making this website
              unique and complete.
            </Paragraph>
          </Grid>
          <Grid container justify="flex-end">
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
                <StyledGridItem>
                  <Img fluid={data.section3Grid4.childImageSharp.fluid} />
                </StyledGridItem>
              </StyledGrid>
            </Grid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Illustration " clientName="004" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN">
              The mobile view of the website is being created to support
              different devices, while considering the content, the imagery and
              general design, not to mention that is ensuring the usability.
              <br />
              <br />
              Is a sleek interface that provides all the information required by
              the users.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
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
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default Avrora
