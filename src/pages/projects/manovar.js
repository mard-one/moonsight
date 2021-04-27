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
import Margin from "../../components/margin"

const Manovar = () => {
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
        relativePath: { eq: "projects/manovar-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Banner: file(
        relativePath: {
          eq: "projects/manovar-project-page-section-2-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/manovar-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/manovar-project-page-section-2-carousel-2.jpg"
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
          eq: "projects/manovar-project-page-section-2-carousel-3.jpg"
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
          eq: "projects/manovar-project-page-section-2-carousel-4.jpg"
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
          eq: "projects/manovar-project-page-section-3-grid-1.jpg"
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
          eq: "projects/manovar-project-page-section-3-grid-2.jpg"
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
          eq: "projects/manovar-project-page-section-3-grid-3.jpg"
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
          eq: "projects/manovar-project-page-section-3-grid-4.jpg"
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
          eq: "projects/manovar-project-page-section-4-grid-1.jpg"
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
          eq: "projects/manovar-project-page-section-4-grid-2.jpg"
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
          eq: "projects/manovar-project-page-section-4-grid-3.jpg"
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
          eq: "projects/manovar-project-page-section-4-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid5: file(
        relativePath: {
          eq: "projects/manovar-project-page-section-4-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid6: file(
        relativePath: {
          eq: "projects/manovar-project-page-section-4-grid-6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid7: file(
        relativePath: {
          eq: "projects/manovar-project-page-section-4-grid-7.jpg"
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
    name: "MANOVAR Island building company",
    allCategories: ["Web Design", "Interaction Design", "UI/UX"],
    madeByName: "Diana Dubina",
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
              Visual, web and interaction for an Island building company,
              MANOVAR.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              Manovar builds artificial islands for private usage, from
              residential and commercial real estate and to industrial usage; is
              an innovative, environmentally friendly and offers complex
              solutions to the task of building islands around the world.
              <br />
              <br />
              Manovar always finds solutions for every client, thus the main
              objective of the creation of the website was to display all the
              information and technologies used while building the different
              types of islands, along with offering a delightful experience for
              the users.
            </Paragraph>
          </Grid>
        </Grid>
        <Video
          videoSrcURL="https://player.vimeo.com/video/274768079"
          videoTitle="Official Music Video on YouTube"
          ratio="57.81%"
        />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ISLANDS AND TECHNOLOGIES">
              MANOVAR works in a wide range of disciplines and as a part of the
              website design, the inclusion of the various activities like hydro
              technical, civil engineering, environmental protection, financial
              activities, marine biology and others was one of the main tasks.
              <br />
              <br />
              The screens and visuals are a representation of how dreams come
              true by using engineering and technologies that make feasible the
              construction of quality islands according to the customer needs,
              ideas and desires.
              <br />
              <br />
              Every screen brings in confidence and a clear message of
              innovation to all the users in all the aspects and steps of the
              project.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section2Banner.childImageSharp.fluid} />
        <Margin bxs={20} bsm={40} />
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "41.66vw", maxWidth: "500px" }}
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
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "700px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="WEBSITE PAGES" sticky>
              The landing screen and inside pages are a combination of
              attractive images and high-quality visual content in order to
              represent the creation of each island.
              <br />
              <br />
              There is a defined structure and visual hierarchy on the images as
              well as the fonts, and the user is guided through each step and
              block of information available.
              <br />
              <br />
              Finally, the website has a sticky header to make the core links
              accessible from any point of the interaction.
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
              <StyledGridItem>
                <Img fluid={data.section3Grid4.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="THE TAKE AWAY">
              MANOVAR website’s mission is to inform visitors about the
              designing, planning and building of artificial islands for private
              usage and how the combination of minds and disciplines are fully
              aligned to make people's dreams come true.
              <br />
              <br />
              Constructing an island means a huge number of disciplines and
              contractors involved in their implementation, and translating it
              into a website signifies that all that effort has to be simplified
              to offer a friendly and pleasant interaction for the customers.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ marginTop: -140, gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section4Grid1.childImageSharp.fluid} />
            <StyledGridItem
              styleMd={{ marginTop: 40 }}
              styleSm={{ marginTop: 20 }}
            >
              <Img fluid={data.section4Grid2.childImageSharp.fluid} />
            </StyledGridItem>
            <StyledGridItem
              styleMd={{ marginTop: 40 }}
              styleSm={{ marginTop: 20 }}
            >
              <Img fluid={data.section4Grid3.childImageSharp.fluid} />
            </StyledGridItem>
            <StyledGridItem
              styleMd={{ marginTop: 40 }}
              styleSm={{ marginTop: 20 }}
            >
              <Img fluid={data.section4Grid4.childImageSharp.fluid} />
            </StyledGridItem>
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section4Grid5.childImageSharp.fluid} />
            <StyledGridItem
              styleMd={{ marginTop: 40 }}
              styleSm={{ marginTop: 20 }}
            >
              <Img fluid={data.section4Grid6.childImageSharp.fluid} />
            </StyledGridItem>
            <StyledGridItem
              styleMd={{ marginTop: 40 }}
              styleSm={{ marginTop: 20 }}
            >
              <Img fluid={data.section4Grid7.childImageSharp.fluid} />
            </StyledGridItem>
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default Manovar
