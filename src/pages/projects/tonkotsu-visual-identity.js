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

const TonkotsuVisualIdentity = () => {
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
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-1-banner.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid4: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-grid-4.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-carousel-1.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-2-carousel-3.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-3-grid-1.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-3-grid-2.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-3-grid-3.jpg"
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
          eq: "projects/tonkotsu-visual-identity-project-page-section-3-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid5: file(
        relativePath: {
          eq: "projects/tonkotsu-visual-identity-project-page-section-3-grid-5.jpg"
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
    mainCategory: projectTypes.branding,
    name: "Tonkotsu Visual Identity",
    allCategories: [
      projectTypes.branding,
      projectTypes.graphicdesign,
      projectTypes.typography,
    ],
    madeByName: "Viktor",
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
              Branding and visual identity for a Japanese Japanese ramen chain
              in London, Tonkotsu.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              The key objective of this project was to create for Tonkotsu the
              brand guidelines and visual identity for the Japanese ramen chain
              newly launched in London.
              <br />
              <br />
              My response to their concept being where modern Japan and modern
              London meet was a unique mark combining kotsu kanji 骨 with a
              geometric wordmark.
              <br />
              <br />
              Geometric plains and patterns were textured by hand to represent
              the craftsmanship of the restaurant.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="THE STORE">
              The brand identity and its implementation represents the
              traditional Japanese food.
              <br />
              <br />
              The colors, geometric forms along with the flavours and textures,
              offer an engaging experience for the customers visiting the
              restaurants.
              <br />
              <br />
              The restaurant, the menu and placemats designs talk about the
              place, food and style, making this an important part of the visual
              identity.
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
            <Img fluid={data.section2Grid1.childImageSharp.fluid} />
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
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 3" }}
            styleSm={{ gridColumn: "1 / span 3" }}
          >
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
                style={{ width: "85vw", maxWidth: "1200px" }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section2Carousel2.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
            </Carousel>
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Branding" clientName="003" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="SHAPES">
              The restaurant shows the modernism of both the cultures, London
              and Japan. Also the restaurant’s menu is aligned with the initial
              concept and shapes, giving consistency to the whole proposition
              and brand identity.
              <br />
              <br />
              The packaging of the products and use of menu pictures provide a
              competitive advantage and make the designs more attractive and
              enjoyable.
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
              <StyledGridItem>
                <Img fluid={data.section3Grid5.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default TonkotsuVisualIdentity
