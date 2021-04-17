import React from "react"
import { Grid, Typography } from "@material-ui/core"
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
import Margin from "../../components/margin"

const StyledBackground = styled.div`
  width: 100vw;
  height: calc(100% - 820px);
  position: absolute;
  top: 900px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: -1;
  ${props => props.theme.breakpoints.down("sm")} {
    top: 1000px;
    height: calc(100% - 920px);
  }
  ${props => props.theme.breakpoints.down("xs")} {
    top: 570px;
    height: calc(100% - 530px);
  }
`

const Medigate = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team18.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/medigate-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-1-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid1: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-2-grid-2.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-2-grid-3.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid4: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-2-grid-4.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-3-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid2: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-3-grid-2.jpg"
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
          eq: "projects/medigate-project-page-section-3-grid-3.jpg"
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
          eq: "projects/medigate-project-page-section-4-grid-1.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-4-grid-2.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-4-grid-3.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid4: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-4-grid-4.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Banner: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-5-banner.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Carousel1: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-5-carousel-1.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Carousel2: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-5-carousel-2.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Carousel3: file(
        relativePath: {
          eq: "projects/medigate-project-page-section-5-carousel-3.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "Medigate",
    allCategories: ["Branding", "Photography", "Development"],
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
              features={[
                "EXPERIENCE STRATEGY",
                "CONTENT STRATEGY",
                "CONTENT GUIDELINES",
                "CREATIVE DIRECTION",
                "UI/UX DESIGN",
                "ART DIRECTION",
                "ACCESSIBILITY",
                "STYLE GUIDE",
                "ENGINEERING",
              ]}
              websiteLink="link"
            >
              Medigate.com — A digital transformation that enhances the Medigate
              brand experience.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Medigate Healthcare is a security and analytics company, whereby,
              the complexity and difficulty of the terminology, context and
              services becomes a challenge to be translated into an accessible
              manner.
              <br />
              <br />
              The ultimate goal was not only to create a new and friendlier
              interface for all the existing consumers but also to be clearer
              and reachable in terms of the services and value proposition of
              the company, in order to address and acquire more revenue along
              with enhancing the experience of the existing one.
            </Paragraph>
            <Paragraph title="APPROACH">
              As a part of the strategy and by understanding Medigate Healthcare
              needs and concerns, along with running our own market research we
              understood that the terminology and communication approach on the
              company was difficult to digest for the users to understand what
              exactly cyber healthcare security is, how it works, and what
              Medigate can offer.
              <br />
              <br />
              To address this issue the aim was to create a website with all the
              information laid out strategically, moreover a visual and
              simplified solution and explanation about the services and
              expertises of the company.
            </Paragraph>
          </Grid>
        </Grid>
        <Img
          fluid={data.section1Banner.childImageSharp.fluid}
          style={{ minHeight: 200 }}
        />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="">
              It was a crucial step to revise the existing branding, to find new
              imagery, photography, design solutions to suit the new approach
              and mission of the company.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 3" }}
            styleSm={{ gridColumn: "1 / span 3" }}
          >
            <Img
              fluid={data.section2Grid1.childImageSharp.fluid}
              style={{ minHeight: 200 }}
            />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 3" }}
          >
            <Img fluid={data.section2Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 3" }}
          >
            <Img fluid={data.section2Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "3 / span 1" }}
            styleSm={{ gridColumn: "1 / span 3" }}
          >
            <Img fluid={data.section2Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Web Design" clientName="003">
        <StyledBackground />
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="">
              As a result from this effort, and by integrating the new identity
              and branding, through a friendlier and crispier communication
              approach that could explain easily the users about all the
              services and by including a set of tech plus health photography
              related, the output was a sleek, enjoyable and modern website that
              would help the customers quickly scan and get the information and
              make a better decision.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img
              fluid={data.section3Grid1.childImageSharp.fluid}
              style={{ minHeight: 200 }}
            />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid3.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Web Design" clientName="004">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVENESS">
              In the designing and development phase, the inclusion of
              responsive web design was highly importante; the goal was to
              provide a good user experience to all people browsing the website
              by accommodating the resolution of the device, resizing the image
              and components along with the text.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              styleMd={{ gridGap: 40, gridTemplateColumns: "1fr 1fr" }}
              styleSm={{ gridGap: 20, gridTemplateColumns: "1fr" }}
            >
              <StyledGridItem>
                <Img fluid={data.section4Grid1.childImageSharp.fluid} />
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid2.childImageSharp.fluid} />
                </StyledGridItem>
              </StyledGridItem>
              <StyledGridItem
                styleMd={{ marginTop: 300 }}
                styleSm={{ marginTop: 0 }}
              >
                {" "}
                <Img fluid={data.section4Grid3.childImageSharp.fluid} />
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid4.childImageSharp.fluid} />{" "}
                </StyledGridItem>
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Web Design" clientName="005" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="">
              The website is not only user-friendly, easy to navigate and
              interactive with, but also represented as guidance to the
              consumers through an educational system that explains exactly what
              Medigate does, the processes and the benefits of their services.
              <br />
              <br />
              The positive impact by bringing in this visual and interactive
              solution, translated into the growth and acquisition of new
              customers.
            </Paragraph>
          </Grid>
        </Grid>
        <Img
          fluid={data.section5Banner.childImageSharp.fluid}
          style={{
            marginBottom: 40,
            minHeight: 200,
          }}
        />
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
              fluid={data.section5Carousel1.childImageSharp.fluid}
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
              fluid={data.section5Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "600px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section5Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
        <Margin txs={100} tsm={200} />
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Typography variant="h3">
              Medigate.com — A digital transformation that enhances the Medigate
              brand experience.
            </Typography>
            <Margin bxs={60} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="FINAL THOUGHTS" noMarginBottom>
              The most meaningful take away from this project was the research
              that highlighted the importance of using accessible and
              understandable terminology, in order to interact and acquire new
              customers, that could make growth the revenue of the company.
              <br />
              <br />
              The combination of the new communication approach with a lighter
              and comprehensive use of images, photographs, icons, tiles and
              more, turns a complicated concept into a much simpler and smoother
              idea, that could be consumed by a wider audience.
            </Paragraph>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default Medigate
