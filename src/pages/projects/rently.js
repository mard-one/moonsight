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

const Rently = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team18.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(relativePath: { eq: "projects/rently-project-page-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/rently-project-page-section-1-banner.jpg"
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
          eq: "projects/rently-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/rently-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel5: file(
        relativePath: {
          eq: "projects/rently-project-page-section-2-carousel-5.jpg"
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
    name: "Enterprise Smart Home Solutions Rently",
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
              features={["Web-Design", "Illustration", "Development"]}
            >
              Illustration, web design and development for a real estate,
              Rently.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Rently is a real estate technology innovator focused entirely on a
              self-touring solution for residential rental vacancies.
              <br />
              <br />
              The target and main objective of this initiative, was to offer a
              delightful experience and a easy end-to-end for all the customer,
              starting from finding a new home for the renter, while being
              smooth and efficient for the landlord, to offer simple
              technologies to help property managers, investment managers, and
              real estate agents make the most out of their showings with
              minimal time invested.
              <br />
              <br />
              Thus having a website that includes the latest technologies and
              showcases the development and solution for the real estate market
              was the core of the strategy to make Rently a digital and smart
              solution by all means.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Web Design" clientName="002" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ILLUSTRATION LIBRARY">
              We created a set of multipurpose and versatile illustrations with
              the same format and style in order to create consistency. In
              addition to it, the selection of colors and shades and the whole
              pack was in line with the brand guidelines of Rently.
              <br />
              <br />
              The importance of the usage of illustrations in the website was to
              visually represent the different features and solutions that the
              company offers to fulfill renters, agents and landlords needs;
              also to add a decorative and friendly environment to the web.
              <br />
              <br />
              Solutions such as Single Family or Multifamily Self-Touring
              combined with a particular illustration that would represent the
              insight or key point of the solution, helps the user understand
              them easily and faster while providing an enjoyable experience.
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
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "600px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel5.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>
    </Layout>
  )
}

export default Rently
