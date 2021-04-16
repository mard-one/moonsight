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

const StyledBackground = styled.div`
  width: 100vw;
  height: calc(100% - 250px);
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ec4e27;
  z-index: -1;
  ${props => props.theme.breakpoints.down("sm")} {
    top: -50px;
    height: calc(100% - 80px);
  }
`

const ResponsiveImgContainer = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    ${props => props.styleMd}
  }
  ${props => props.theme.breakpoints.down("sm")} {
    ${props => props.styleSm}
  }
  ${props => props.theme.breakpoints.down("xs")} {
    ${props => props.styleXs}
  }
`

const MelomanVideoCompany = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team7.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(
        relativePath: {
          eq: "projects/meloman-video-company-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/meloman-video-company-project-page-section-1-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 740) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel1: file(
        relativePath: {
          eq: "projects/meloman-video-company-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/maxim-kashin-architecture-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Banner: file(
        relativePath: {
          eq: "projects/meloman-video-company-project-page-section-3-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "Meloman Video Company",
    allCategories: [projectTypes.branding, projectTypes.webdesign],
    madeByName: "Viktor",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <StyledBackground />
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["Branding", "Web Design"]}>
              Branding and web design for a live-streaming web, Meloman Video.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Meloman Video is a web based application for live streaming and
              entertainment service that allows users to watch movies and tv.
              <br />
              <br />
              As the designer of the project, the focus area to work on was a
              typical user dilemma - What should I watch today? In that sense,
              researching the user's needs along with their desires and
              aspirations on the live-streaming website and translating it into
              a visual solution was the key point of the initiative.
            </Paragraph>
            <Paragraph title="approach">
              The first and more important step was the research made with the
              consumers of the platform to understand their needs and pain
              points. Moving forwards, I created a set of wireframes to design
              the interaction and experience within the platform and finally,
              moved to the interface and visuals.
              <br />
              <br />
              The new interface of Meloman Video solves the problem of the users
              by ranking the movies and giving accurate suggestions to the users
              from the array of movies and entertainment options considered in
              the platform, they would also have a full description of the movie
              and a trailer so the users can make a conscious and informed
              decision about what to watch.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BUSINESS CARDS">
              The stationary and design collaterals were designed completely
              align with the brand identity and guidelines. to keep the branding
              consistent.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "61.66vw", maxWidth: "740px" }}
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
            style={{ width: "70.83vw", maxWidth: "850px" }}
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
            style={{ width: "66.66vw", maxWidth: "800px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003" last>
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="HOMEPAGE">
              Meloman Video’s landing page shows a great proposition to delight
              the consumers.
              <br />
              <br />
              Features like personalization in order to understand what kind of
              movies the users would like, or In Trend where the members know
              about the live events, the ranking and categorization of
              performance, along with the description of the movie make Meloman
              Video an outstanding and user-centered initiative.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section3Banner.childImageSharp.fluid} />
      </Section>
    </Layout>
  )
}

export default MelomanVideoCompany
