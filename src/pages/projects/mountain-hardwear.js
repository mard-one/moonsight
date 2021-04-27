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

const MountainHardwear = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team15.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/mountain-hardwear-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-1-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid1: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-2-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid4: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-2-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid5: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-2-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel1: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-3-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel2: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-3-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel3: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-3-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Carousel4: file(
        relativePath: {
          eq: "projects/mountain-hardwear-project-page-section-3-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.branding,
    name: "Mountain Hardwear Logowear 2020",
    allCategories: ["Graphic Design", "Fashion", "Typography"],
    madeByName: "Tomomi Maezawa",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["Graphic Design", "Fashion", "Typography"]}>
              Branding and typography design for a Californian brand, Mountain
              Hardwear.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              In collaboration with a Californian outdoor brand, I created
              graphic artworks for their 2020 spring-summer collection. Studying
              the different shapes, uses and materials of climbing equipment, I
              aimed to create designs that evoke the physical climbing
              experience.
              <br />
              <br />
              Climbing needs a lot of focus and attention to details, from
              securing a rope or an axe.
              <br />
              <br />
              These moments should be sticking to a climber's head along with
              the intense emotion of achievement afterwards. I wanted to
              celebrate the sensation by creating abstract illustrations
              representing the climbing tools and actions.
            </Paragraph>
            <Paragraph title="approach">
              The starting point of the project was to understand the brand and
              the context of it.
              <br />
              <br />
              California is famous for its outdoor recreation, therefore, the
              proposition for the new collection had to be towards the brand
              values and aligned with the customer surroundings, lifestyle and
              way of living.
              <br />
              <br />
              The designs are inspired on one of the most characteristic
              activities, rock climbing, where in, the combination of the shapes
              and colors translated into several prints for clothing and
              accessories.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="PRINTS AND DESIGNS" sticky>
              Each and every design, print, texture and pattern are inspired by
              nature, outdoor activities and the different tools used while
              climbing.
              <br />
              <br />
              The balance between the colors and the shapes, lead to a fresh and
              unique collection for the brand.
              <br />
              <br />
              The designs are meant to encourage people to explore and push
              themselves to another level, creating challenges and seeing the
              world from different perspectives.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem>
                <Img fluid={data.section2Grid1.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section2Grid2.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section2Grid3.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section2Grid4.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section2Grid5.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Branding" clientName="003" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="PHOTOGRAPHY">
              The imagery and photos were crucial in the launch of the new
              collection of Mountain Hardwear.
              <br />
              <br />
              Hence, one of the focus areas on the phoshotting was not only to
              showcase the prints and designs in the sportswear and accessories,
              but also to reflect the company commitment with the environment,
              taking care and protecting nature.
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
              fluid={data.section3Carousel1.childImageSharp.fluid}
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
              fluid={data.section3Carousel2.childImageSharp.fluid}
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
              fluid={data.section3Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "41.66vw", maxWidth: "500px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section3Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>
    </Layout>
  )
}

export default MountainHardwear
