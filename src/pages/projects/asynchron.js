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

const Asynchron = () => {
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
        relativePath: { eq: "projects/asynchron-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-1-banner.jpg"
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
          eq: "projects/asynchron-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/asynchron-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-3-grid-1.jpg"
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
          eq: "projects/asynchron-project-page-section-3-grid-2.jpg"
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
          eq: "projects/asynchron-project-page-section-3-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid4: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid5: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid6: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-4-grid-6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section5Banner: file(
        relativePath: {
          eq: "projects/asynchron-project-page-section-5-banner.png"
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
    mainCategory: projectTypes.appdesign,
    name: "Asynchron Book & Application",
    allCategories: ["App Design", "Editorial", "Illustration"],
    madeByName: "Maximilian Müsgens",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["PRODUCT BRANDING", "PACKAGING DESIGN", "LOGO DESIGN"]}
            >
              Illustration, editorial and native design for an app, Asynchron.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Asynchron is In the form of a book, the viewer learns something
              about the topic of chronotypes and his own sleep rhythm. In
              addition, a calendar app is used to schedule appointments
              according to this individual rhythm. The viewer also learns
              something about his own chronotype and his sleep rhythm. The more
              displaced the rhythm of the viewer, the more displaced the design
              of »asynchron«.
              <br />
              <br />
              The challenge was to simplify the complexity of the concept by
              building and designing an app interacive and easy to comprenhend.
            </Paragraph>
            <Paragraph title="approach">
              If a person knows their own chronotype, they also know
              theoretically the best time for any activity, like the time to go
              to bed, work, eat, exercise and practice any hobbies. Thus, the
              app knows the ideal time for sports, work, medical appointments or
              for taking your medicine.
              <br />
              <br />
              In that sense, we needed to create a visual solution for the
              suggestions given by the app. Hence the creation of an interface
              that allows the user to understand and interpret this information
              was crucial.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="THE BOOK">
              Asynchron book helps each user to understand how their body works,
              followed by a suggestion of how they can enhance their lives and
              habits in their daily’s routine, that is by using the time more
              efficiently and methodically.
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
          <ResponsiveImgContainer style={{ width: "80vw", maxWidth: "900px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Illustration" clientName="003">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BOOKS ILLUSTRATIONS">
              The different illustrations of the book showcase the seven main
              categories and the 35 subcategories for which the book suggests
              what and when is the best time during the day to appoint the
              reader different tasks and activities, while recommending an
              organized and structured proposals on how to order their routines.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 1fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img
              fluid={data.section3Grid3.childImageSharp.fluid}
              style={{ minHeight: 300 }}
            />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="App design " clientName="004" last>
        <Grid container justify="space-between" direction="row-reverse">
          <Grid item xs={12} sm={5}>
            <Paragraph title="THE APP" sticky>
              The app has various journeys, from the login and registration,
              continuing with finding a chronotype and the user circadian
              rhythm, for that they have to answer some questions about their
              sleep habits; moving into the calendar overview that will give
              them a feedback on their chronotype, to the appointment feature,
              where is advised the best time to order the user activities and
              suggesting a daily routine and finalizing with the settings and
              statistics, so users are able to import their calendar and see
              statistics and update their chronotype according with your life
              style.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr 1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem
                styleMd={{ gridColumn: "1 / span 1" }}
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
              </StyledGridItem>
              <StyledGridItem
                styleMd={{ marginTop: 200, gridColumn: "2 / span 1" }}
                styleSm={{ gridColumn: "1 / span 2" }}
              >
                <Img fluid={data.section4Grid4.childImageSharp.fluid} />
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid5.childImageSharp.fluid} />
                </StyledGridItem>
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid6.childImageSharp.fluid} />
                </StyledGridItem>
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
        <Img fluid={data.section5Banner.childImageSharp.fluid} />
      </Section>
      {/* <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      /> */}
      {/* <StyledGrid
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
      </StyledGrid> */}
      {/* <Carousel>
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
      </Carousel> */}
    </Layout>
  )
}

export default Asynchron
