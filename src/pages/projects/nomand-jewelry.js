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

const NomandJewelry = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team11.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/nomand-jewelry-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-1-banner.jpg"
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
          eq: "projects/nomand-jewelry-project-page-section-2-grid-1.jpg"
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
          eq: "projects/nomand-jewelry-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-2-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid4: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-2-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-3-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Grid2: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-3-grid-2.jpg"
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
          eq: "projects/nomand-jewelry-project-page-section-3-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-4-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-4-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid3: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-4-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid4: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-4-grid-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid5: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-4-grid-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Carousel1: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-5-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section5Carousel2: file(
        relativePath: {
          eq: "projects/nomand-jewelry-project-page-section-5-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.webdesign,
    name: "Nomand Jewelry Brand",
    allCategories: ["Web-Design", "UI/UX", "Art Direction"],
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
              features={["PRODUCT BRANDING", "PACKAGING DESIGN", "LOGO DESIGN"]}
            >
              Product branding and packaging design for a Japanese tableware,
              Nomand Jewelry.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              New jewelry brand Nomand founded on the principles of understated
              modern and innovation. Based in London, the brand's silhouettes
              are informed by nature and reveal an organic interpretation of
              visual art. Nomand is a blend of design, quality and
              sustainability that is fused in every piece
              <br />
              <br />
              The challenge of this project was to create an e-commerce website
              with user-centered design as the core, applying all the usability
              methods and UX fundamentals, not to mention the creation of an
              interface elegant and classy for all our users and target
              audience.
            </Paragraph>
            <Paragraph title="approach">
              The starting point of the project was to run some research and
              create the usability foundations of the website, focusing on
              patterns, interacción and the various flows inside the e-commerce
              site, such as registration and login, or checkout. Moving forward
              with the creation of a visual system in line with the logo and the
              brand concept to keep visual consistency and harmony with Nomand
              identity, finalizing with the cart or checkout order.
              <br />
              <br />
              All that along with the categories, imagery and visual
              representation of the elements were placed strategically to
              provide a good user experience in the website.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="BRAND IDENTITY">
              The landing screen has a sliding banner showcasing the various
              products and accessories that the brand offers.
              <br />
              <br />
              The combination of the models, fonts and lights and pictures
              create a high-quality visual content to promote the jewels and
              accessories, having a clear visual hierarchy that made the website
              easy to scan and pleasant to the eye.
              <br />
              <br />
              With the menu and cart always visible, so the key actions are
              accessible and available in all the interactions for the users.
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
            <Img fluid={data.section2Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid3.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Website" clientName="003">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={6}>
            <Paragraph title="VIDEOS AND PRODUCT FEATURES">
              The landing screen has videos of models wearing the products,
              captured in an elegant and classic environment, that allows the
              user to have a better understanding of the particular item, in
              terms of size, color, etc.
              <br />
              <br />
              It also has a catalog with the new collection, inside it, a
              description of the new products and an illustrative image,
              displaying the modern and innovative jewels of the brand.
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
            <Video
              videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
              videoTitle="Official Music Video on YouTube"
            />
          </StyledGridItem>
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
            <Img fluid={data.section3Grid3.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Catalogue Page" clientName="004">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="product listing page">
              The product listing page has a small description and key features
              of the listed products, along with the price of each item.
              <br />
              <br />
              Is a well balanced composition, the design is neat, clean, shows
              the brand's concept and reveals the visual art, quality and
              sustainability of every piece.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledGrid
              style={{ gridTemplateColumns: "1fr" }}
              styleMd={{ gridGap: 40 }}
              styleSm={{ gridGap: 20 }}
            >
              <StyledGridItem>
                <Img fluid={data.section4Grid1.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section4Grid2.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section4Grid3.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section4Grid4.childImageSharp.fluid} />
              </StyledGridItem>
              <StyledGridItem>
                <Img fluid={data.section4Grid5.childImageSharp.fluid} />
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Branding" clientName="005" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="product detail page">
              The product detail page contains a whole description and features
              of the selected product.
              <br />
              <br />
              The layout allows to scan quickly the information in the screen,
              from top to button there is clear hierquization and order of the
              elements, finalizing with the main action in the screen “Add to
              Cart”
              <br />
              <br />
              Is a very light screen, that reduces the cognitive effort of the
              user, making it real easy for the customer to intectac with and
              finally to make purchase of the item.
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
              fluid={data.section5Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "66.66vw", maxWidth: "800px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section5Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>
    </Layout>
  )
}

export default NomandJewelry
