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

const Superdry = () => {
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
        relativePath: { eq: "projects/superdry-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/superdry-project-page-section-1-banner.jpg"
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
          eq: "projects/superdry-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/superdry-project-page-section-2-carousel-2.jpg"
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
          eq: "projects/superdry-project-page-section-2-carousel-3.jpg"
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
          eq: "projects/superdry-project-page-section-3-grid-1.jpg"
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
          eq: "projects/superdry-project-page-section-3-grid-2.jpg"
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
          eq: "projects/superdry-project-page-section-4-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel1: file(
        relativePath: {
          eq: "projects/superdry-project-page-section-4-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel2: file(
        relativePath: {
          eq: "projects/superdry-project-page-section-4-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel3: file(
        relativePath: {
          eq: "projects/superdry-project-page-section-4-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "Superdry® Website Redesign",
    allCategories: ["Web-Design", "UI/UX", "Interaction Design"],
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
              features={[
                "Web-Design",
                "UI/UX",
                "Interaction Design",
                "Responsive Design",
              ]}
            >
              Website redesign for UK brand, Superdry.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Superdry is an exciting contemporary brand which focuses on
              high-quality products. They are characterised by quality fabrics,
              authentic vintage washes, unique detailing, world leading
              hand-drawn graphics and tailored fits with diverse styling.
              <br />
              <br />
              The goal of this project was to revamp the ecommerce site of
              Superdry, keeping in mind the brand distinctiveness and exclusive
              appeal, that should be translated into digital for the customers
              coming in to the online store while ensuring a seamless experience
              for all users
            </Paragraph>
            <Paragraph title="approach">
              In order to create the Superdry ecommerce website that allows
              users to browse the different categories, find the product they
              like and make a purchase in a secure way, the approach we took was
              to divide in different phases the end to end journey.
              <br />
              <br />
              We started by making the search of the desired product very easy,
              for that categorizing the various products and listing them in
              order of preference by using the filter options was a key,
              continuing with account creation and finalizing with the checkout
              order were part of the goal of creating a meaningful customer
              journey.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="HOME PAGE">
              The landing screen broadcasts different messages, to cover the
              different scenarios and type of users coming to the website, such
              us presentation of clothings categories, the discounts and offers,
              seasonal collections and more
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
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="PRODUCT CARD">
              From the product listing page to the product detail page, the
              design reveals the freshness and authenticity of the brand.
              <br />
              <br />
              Designs made for desktop as well as mobile responsive focus on the
              spirit and vision of Superdry.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
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

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN" sticky>
              The final delivery was a refreshing ecommerce website filled with
              fun and colors with an engaging user experience, that describes
              the brand principles from the home page to the check out.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img fluid={data.section4Banner.childImageSharp.fluid} />
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
              fluid={data.section4Carousel1.childImageSharp.fluid}
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
              fluid={data.section4Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "700px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section4Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>
    </Layout>
  )
}

export default Superdry
