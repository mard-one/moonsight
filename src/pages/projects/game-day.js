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

const GameDay = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team18.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/game-day-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-1-banner.jpg"
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
          eq: "projects/game-day-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel1: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-3-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel2: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-3-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/game-day-project-page-section-4-grid-1.png"
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
          eq: "projects/game-day-project-page-section-4-grid-2.png"
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
          eq: "projects/game-day-project-page-section-4-grid-3.png"
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
          eq: "projects/game-day-project-page-section-4-grid-4.png"
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
          eq: "projects/game-day-project-page-section-4-grid-5.png"
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
          eq: "projects/game-day-project-page-section-4-grid-6.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "GameDay Vodka Website Revamp",
    allCategories: ["Web Design", "Photography", "Branding"],
    madeByName: "Ivan Ermakov",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["WEB DESIGN", "PHOTOGRAPHY", "BRANDING"]}>
              Web design and branding for an American brand, GameDay Vodka.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              GameDay is a brand fueled by an unrivaled passion for community,
              quality and fun, two friends with a combined 30 years of
              experience in the industry set out on a journey to create a brand
              that combined their love for sports and premium vodka. As a
              result, an All-American vodka for the fan was created in a package
              that captures the true essence of the game.
              <br />
              <br />
              My role as the designer of this project was to create and
              consolidate the identity of the brand, for both offline and online
              channels, bringing in consistency to the brand's communication and
              creating a strategic presence in the digital world.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="PRODUCT PHOTOGRAPHY">
              As a part of the project, we made a photoshoot of the various
              products that the brand offers, maintaining a set of guidelines
              and the company vision while shooting the photos.
              <br />
              <br />
              The style of the imagery followed several guidelines such as,
              lifestyle imagery along with the logo and slogan on every picture,
              inclusion of people using the product, showcasing the products
              packaging and, lastly, a strategy of product-placement in
              different scenarios where people would normally drink or have the
              GameDay vodka.
              <br />
              <br />
              The colors, scenography, lights and models represent the perfect
              balance and combination for each product photography.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "54vw", maxWidth: "650px" }}
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
            style={{ width: "54vw", maxWidth: "650px" }}
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
          <ResponsiveImgContainer style={{ width: "54vw", maxWidth: "650px" }}>
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
            <Paragraph title="WEBSITE REDESIGN">
              The digital transformation of the brand started by revamping the
              whole experience of the website.
              <br />
              <br />
              In that matter, the new design showcase the attributes,
              characteristics, colors and spirit of the vodka company.
              <br />
              <br />
              Features like “Order Now”, ”Cocktails” and “For the Fans” are a
              combination between sports, fun and the celebration on what they
              call “GameDay”.
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
              fluid={data.section3Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "66.66vw", maxWidth: "800px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section3Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="MOBILE VERSION">
              GameDay website was designed by following the mobile-first
              approach to ensure the flexibility and fully adaptability of each
              screen, while supporting a large number of devices.
              <br />
              <br />
              The product cards, the images, reads and detail page of the vodka
              follow a structured and hierquized order to enhance the user
              experience and engage all our customers on their end-to-end
              journey, as in, all the way from the web to the taste of the
              vodka.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr 1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem
                styleMd={{ marginTop: 150, gridColumn: "1 / span 1" }}
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
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default GameDay
