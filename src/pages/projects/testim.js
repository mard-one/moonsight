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

const Testim = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(relativePath: { eq: "projects/testim-project-page-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/testim-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/testim-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Banner: file(
        relativePath: {
          eq: "projects/testim-project-page-section-3-banner.jpg"
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
    name: "Online Auto-Test Platform Testim",
    allCategories: ["Web-Design", "Illustration", "Development"],
    madeByName: "Ivan Ermakov",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["ILLUSTRATION", "WEB DESIGN", "DEVELOPMENT"]}
            >
              Illustration and web design for a Software company in Sunnyvale,
              Testim.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              Testim is the ultimate testing automation platform, designed to
              provide a complete testing solution, all in one place. The
              platform allows users to create tests, report bugs, and run tests
              in the cloud for web apps.
              <br />
              <br />
              In the industry of software engineering and the digital
              transformation world, the testing for all the web and native based
              app is crucial; therefore the challenge that came across was to
              set and design a reliable and efficient environment for companies
              as well as testers to complete to fully test and replicate the
              different scenarios, while guaranteeing a good journey for all
              users
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
            <Paragraph title="ILLUSTRATION LIBRARY">
              Being the testing one of the most challenging and crucial stages
              of the software development, the strategy on the inclusion of a
              pack of fresh and youthful illustrations was to make the
              experience fun and pleasant.
              <br />
              <br />
              The illustrations were inspired by the testing and automation
              processes, and they were used in key screens of the journeys so
              that the user could relate the information that was communicated
              to him on the scenarios like onboarding, success, errors, bugs and
              more.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "66.66vw", maxWidth: "800px" }}
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
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "600px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Web Design" clientName="003">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="THE WEBSITE" sticky>
              The result was a explanatory website filled in with quality
              processes, development and new technologies, with descriptive
              illustrations and supportive messages, making it in general a
              pleasant interface with an enjoyable and fun look and feel.
              <br />
              <br />
              There is also an active community of testers and engineers with a
              set of features for them to connect and be aware of the latest
              trends and technologies, not to mention, the presence of the
              company in the relevant social media.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img fluid={data.section3Banner.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default Testim
