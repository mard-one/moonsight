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

const Starbucks = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team12.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/starbucks-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Carousel1: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-1-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      # section1Carousel2: file(
      #   relativePath: {
      #     eq: "projects/starbucks-project-page-section-1-carousel-2.jpg"
      #   }
      # ) {
      #   childImageSharp {
      #     fluid(maxWidth: 1200) {
      #       ...GatsbyImageSharpFluid_withWebp
      #     }
      #   }
      # }
      section2Banner: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-2-banner.jpg"
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
          eq: "projects/starbucks-project-page-section-3-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel2: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-3-carousel-2.jpg"
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
          eq: "projects/starbucks-project-page-section-4-grid-1.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-4-grid-2.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-4-grid-3.png"
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
          eq: "projects/starbucks-project-page-section-4-grid-4.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid5: file(
        relativePath: {
          eq: "projects/starbucks-project-page-section-4-grid-5.png"
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
    name: "Starbucks Website/App",
    allCategories: [
      projectTypes.interactiondesign,
      projectTypes.uxui,
      projectTypes.artdirection,
    ],
    madeByName: "Konstantin Zhuck",
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
              Product branding and packaging design for a Japanese tableware
              brand, KINTO.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Starbucks as the world's largest coffeehouse chain need a digitasl
              transformation on their digital channels.
              <br />
              <br />
              Hence, the aim of this project was to revamp the whole experience
              digitaly, to make it more it accesible, usable and effortless for
              all the users coming in to web or the mobile app.
              <br />
              <br />
              In accordance with it, solving the complex UX, simplying the promo
              system and updating the old looking design style were the core
              challenges of the strategy.
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
              fluid={data.section1Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer style={{ width: "85vw", maxWidth: "1200px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Web Design" clientName="002">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="Starbucks Homepage">
              The landing screen of the website is a complete and engaging
              experience for the user.
              <br />
              <br />
              Starting from the slider displaying the latest offers and
              featuring new drinks, moving on to the “Quick Access” feature to
              order coffee, visit the nearest shop, join the rewards program,
              the quick wizard or survey that helps the user to find what coffee
              fits better for them and closing with the invitation to download
              the Starbucks app, the landing screen offers all the information
              at a glance that all the users need when browsing the coffeehouse
              newest website.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section2Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Web Design" clientName="003">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="Starbucks Rewards">
              The main goal of the “Starbuck Rewards” came from the following
              problem statement - How do we gain regular customers?
              <br />
              <br />
              In order to address this dilemma, I created a brand new system
              from scratch, so the users could play with features like
              transaction list on the number of coffees they bought, different
              tasks completed, tracking of their weekly, monthly and yearly
              stats and finally the points gained to get free coffees.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "1200px" }}
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
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "1200px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section3Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Responsive Design" clientName="004" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="Starbucks App" sticky>
              As displayed in the screens below, the mobile application and the
              mobile responsive screens are design neatly and exquisitly with
              componentes and dashboards fully tested and thought for the
              distintives platforms.
              <br />
              <br />
              From cards and dashbords to placing an order, the entire
              experience has been developed to be user-centered, responsive and
              fully afaptive for the various sizes and devices available in the
              market.
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
                  <Img fluid={data.section4Grid2.childImageSharp.fluid} />
                </StyledGridItem>
              </StyledGridItem>
              <StyledGridItem
                styleMd={{ marginTop: 150, gridColumn: "2 / span 1" }}
                styleSm={{ gridColumn: "1 / span 2" }}
              >
                <Img fluid={data.section4Grid3.childImageSharp.fluid} />
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid4.childImageSharp.fluid} />
                </StyledGridItem>
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

export default Starbucks
