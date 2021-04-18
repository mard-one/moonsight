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

const Sibmet = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(relativePath: { eq: "projects/sibmet-project-page-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-1-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-3-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid2: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-3-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid3: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-3-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/sibmet-project-page-section-4-grid-1.jpg"
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
          eq: "projects/sibmet-project-page-section-4-grid-2.jpg"
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
          eq: "projects/sibmet-project-page-section-4-grid-3.jpg"
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
          eq: "projects/sibmet-project-page-section-4-grid-4.jpg"
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
    mainCategory: projectTypes.webdesign,
    name: "SIBMET",
    allCategories: ["Interaction Design", "Web Design", "UI/UX"],
    madeByName: "Kirill Kim",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Interaction Design", "web DESIGN", "UI/UX"]}
            >
              Web and interaction design for a precious metals company, SIBMET.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              SIBMET is a company that makes precious metals affordable.
              <br />
              <br />
              Sibmetal consists of two divisions, the Affinage division produces
              precious metals in ingots, granules, powders, and in the form of
              chemical compounds; on the other side, Jewelry division launches
              chains and machine-made bracelets.
              <br />
              <br />
              Hence, my key objective of this initiative was to create a
              promotional website for the company, telling about the work of
              divisions and products of the brand while being very clear and
              attractive for all customers.
            </Paragraph>
            <Paragraph title="approach">
              The process was defined by 3 main activities; the first one was to
              understand the company domain and the customer needs around it.
              <br />
              <br />
              Second step was to build the UX patterns and create a usable
              interface for the users coming into the website, who wanted to
              acquire the products and understand more about the brand.
              <br />
              <br />
              And the third and last, was the creation of a visual system, where
              in the designs represented sophistication and elegance. The images
              used in the website reflect and showcase the highest level of
              detail.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="DIVISION LADING PAGE">
              Each section or division focus on different activities, from
              offering the metals as commodity to the luxurious and finished
              product as bracelets, neckless, watches, rings between others,
              therefore, it was crucial to explain throughout the design and
              language used in each page the purpose of the products, in order
              to reach to a wider audience across the world.
              <br />
              <br />
              The screens display an intuitive design, including attractive
              images and videos to clearly convey the message to the users.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "56.66vw", maxWidth: "700px" }}
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
            style={{ width: "50vw", maxWidth: "600px" }}
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
            style={{ width: "56.66vw", maxWidth: "700px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="PRODUCT PAGES">
              Simbet’s jewelry boosts creative self-expression, glamorous and
              fashionable, therefore, the website is layout to display the
              various products of the actual collections, in which the user is
              given the possibility to explore the quality, prestige and
              elegance of each jewel.
              <br />
              <br />
              The end to end experience of Sibmet, from the website to when the
              customer wears their accessories, makes a simple gift into the
              most brilliant moment.
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

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN">
              Simbet products can be found via boutiques, retail partners and
              the company website, hence while designing the website, the mobile
              view of the website had to be exquisite, and had to include all
              the details and descripcion as the desktop view.
              <br />
              <br />
              The company creates high quality precious metals product
              collections, without mentioning that the memorable experience when
              the customers wear their jewels or accessory, in that sense the
              website design displays that message evidently.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{}}
          styleMd={{ gridTemplateColumns: "1fr 1fr", gridGap: 40 }}
          styleSm={{ gridTemplateColumns: "1fr", gridGap: 20 }}
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

export default Sibmet
