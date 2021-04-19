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

const StampEcommerce = () => {
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
        relativePath: { eq: "projects/stamp-ecommerce-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-1-banner.jpg"
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
          eq: "projects/stamp-ecommerce-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel4: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-2-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel1: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-3-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel2: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-3-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel3: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-3-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Banner: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-4-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section5Banner: file(
        relativePath: {
          eq: "projects/stamp-ecommerce-project-page-section-5-banner.jpg"
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
    mainCategory: projectTypes.webdesign,
    name: "STAMP E-commerce",
    allCategories: ["Web-Design", "Branding", "UI/UX"],
    madeByName: "Kirill Kim",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["BRANDING", "Web DESIGN", "UI/UX"]}>
              Branding and web design for a ecommerce website, STAMP.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Stamp is a new modern online store that demonstrates a
              contemporary look at street culture and fashion around the world.
              <br />
              <br />
              The challenge was to create the brand fundamentals of STAMP, while
              designing a new web style guideline or system that invites the
              users to place orders and to make different purchases through the
              online store being efficient and intuitive for the customers and
              while having a pleasant and fun experience.
            </Paragraph>
            <Paragraph title="approach">
              The creation of the upcoming digital brand along with the design
              system, the strategy, user experience and the interactions in the
              ecommerce website were our focus while designing the upcoming
              platform, where in the concept and ideology was to provide a new
              and crispy way to connect between the digital and urban fashion
              around the world.
              <br />
              <br />
              As a result, we created a brand new ecommerse website following
              the best practices of user experience to ensure an enjoyable
              customer journey
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="PRODUCT LISTING PAGE">
              As a new and modern online store, the website design, imagery and
              general look and feel should demonstrate the vision, objectives
              and values of the brand.
              <br />
              <br />
              The photos, models and use of the font shows the young and stylish
              proposition.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "50vw", maxWidth: "600px" }}
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
            style={{ width: "58.33vw", maxWidth: "700px" }}
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
          <ResponsiveImgContainer style={{ width: "85vw", maxWidth: "1200px" }}>
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
            <Paragraph title="PRODUCT CARD">
              STAMP’s idea is to offer a summarized and categorized view of the
              various producs that the store offers.
              <br />
              <br />
              Is an interface that allows the users to search, find and buy
              exactly the clothes and accesories they fancy, in a easy and safe
              way, whenever the want.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "50vw", maxWidth: "600px" }}
            styleMd={{
              marginRight: 40,
            }}
            styleSm={{ marginRight: 20 }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section3Carousel1.childImageSharp.fluid}
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
              fluid={data.section3Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "600px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section3Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="004">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="PRODUCT CARD">
              From the visual perspective, the website design keeps a visual
              consistency and also fully aligns to the values and the brand’s
              identity concept.
              <br />
              <br />
              From the user experience standpoint, it allows the users to
              quickly scan the page, review the benefits of the product and
              finally, make a purchase.
              <br />
              <br />
              The consolidation of the two concepts above mentioned, provides a
              seamless user experience and an enjoyable journey from all the
              consumers.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img fluid={data.section4Banner.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Section>
      <Section sectionName="Responsive Design" clientName="005" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN">
              Below there is a look at the mobile screens, wherein the users can
              see the same information and actions as if they would be browsing
              the desktop view.
              <br />
              <br />
              The information and call to actions are always visible, making the
              task of purchasing really easy.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section5Banner.childImageSharp.fluid} />
      </Section>
    </Layout>
  )
}

export default StampEcommerce
