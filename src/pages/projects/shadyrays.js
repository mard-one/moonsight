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

const ShadyRays = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team7.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/shadyrays-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-1-banner.jpg"
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
          eq: "projects/shadyrays-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel3: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-2-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-3-grid-1.jpg"
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
          eq: "projects/shadyrays-project-page-section-3-grid-2.jpg"
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
          eq: "projects/shadyrays-project-page-section-3-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel1: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel2: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel3: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel4: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Carousel5: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-carousel-5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid2: file(
        relativePath: {
          eq: "projects/shadyrays-project-page-section-4-grid-2.jpg"
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
    name: "ShadyRays Online Store",
    allCategories: ["Web Design", "UX/UI", "Interaction Design"],
    madeByName: "Oleg Kulik",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Web Design", "UI/UX", "Interaction Design"]}
            >
              Web and interaction design for an England brand, ShadyRays.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              ShadyRays is an American-founded England brand, created in 1982 by
              the American company Ray-Ban. Focus on the developing, replacement
              if lost or broken and reselling quality, polarized sunglasses and
              eyeglasses to give people great shades that will never have to
              worry about breaking or losing because no matter what happens.
              <br />
              <br />
              For this project, we were onboarded to create the concept of the
              web-design and our UX/UI mission consisted on creating a unique
              online store to stand out from typical online stores, the ultimate
              goal was to design an easy and comprehensive stylish store.
            </Paragraph>
            <Paragraph title="approach">
              We started from research and benchmarking to understand the
              specifications of the products and the industry standard online
              stores. Continuing setting up the foundations on the user
              experience, to categorize the products and build a logic and order
              to the hierarchy with the information and the accesories and
              finally, we moved towards the creation of designing the visuals
              and a system that could help us bring in the style and the spirit
              of the brand.
              <br />
              <br />
              Different iterations were made in order to make this website, a
              successful and stylish online store.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="CARDS AND IMAGERY">
              As a part of our visual strategy, the implementation of cards was
              a key point in the store.
              <br />
              <br />
              Along with the cards and the information within them, showcasing
              the shades in a cool and youthfull photoprafhy in a particular
              context was importat for us to convey the brand’s values.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "41.66vw", maxWidth: "500px" }}
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
            style={{ width: "52vw", maxWidth: "750px" }}
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
          <ResponsiveImgContainer style={{ width: "52vw", maxWidth: "650px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Branding" clientName="003">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="DETAILS PRODUCT PAGE" sticky>
              From the desktop to the responsive mobile view, the detail page of
              each shades have a clear hierarchization of the information.
              <br />
              <br />
              The design is neat and clean and shows the particular shades, the
              description, benefits and the characteristics are noticeable at
              all times; the main call to action, “Buy Now”, is always visible
              in both the formats, so the users can easily get the sunglasses
              they came for.
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
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>

      <Section sectionName="Branding" clientName="004" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={5}>
            <Paragraph title="CATALOG">
              The new design of the online store ShadyRays offers a new whole
              experience to user, to search, find and buy the shades they like
              at their fingertips.
              <br />
              <br />
              The quality, catalogs, filters and features of the sunglasses
              along with the neat design and youthful imagery were the main
              focus to have a unique and out-of-the-box online store.
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
            <Carousel>
              <ResponsiveImgContainer
                style={{ width: "58.33vw", maxWidth: "700px" }}
                styleMd={{
                  marginRight: 40,
                }}
                styleSm={{ marginRight: 20 }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section4Carousel1.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
              <ResponsiveImgContainer
                style={{ width: "53.33vw", maxWidth: "650px" }}
                styleMd={{
                  marginRight: 40,
                }}
                styleSm={{ marginRight: 20 }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section4Carousel2.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
              <ResponsiveImgContainer
                style={{ width: "53.33vw", maxWidth: "650px" }}
                styleMd={{
                  marginRight: 40,
                }}
                styleSm={{ marginRight: 20 }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section4Carousel3.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
              <ResponsiveImgContainer
                style={{ width: "60vw", maxWidth: "750px" }}
                styleMd={{
                  marginRight: 40,
                }}
                styleSm={{ marginRight: 20 }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section4Carousel4.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
              <ResponsiveImgContainer
                style={{ width: "60vw", maxWidth: "750px" }}
              >
                <Img
                  style={{ height: "100%" }}
                  fluid={data.section4Carousel5.childImageSharp.fluid}
                />
              </ResponsiveImgContainer>
            </Carousel>
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section4Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section4Grid2.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
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

export default ShadyRays
