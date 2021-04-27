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

const Fuga = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team30.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(relativePath: { eq: "projects/fuga-project-page-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid1: file(
        relativePath: { eq: "projects/fuga-project-page-section-2-grid-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid2: file(
        relativePath: { eq: "projects/fuga-project-page-section-2-grid-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid3: file(
        relativePath: { eq: "projects/fuga-project-page-section-2-grid-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid4: file(
        relativePath: { eq: "projects/fuga-project-page-section-2-grid-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid1: file(
        relativePath: { eq: "projects/fuga-project-page-section-3-grid-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid2: file(
        relativePath: { eq: "projects/fuga-project-page-section-3-grid-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid3: file(
        relativePath: { eq: "projects/fuga-project-page-section-3-grid-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section3Grid4: file(
        relativePath: { eq: "projects/fuga-project-page-section-3-grid-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid1: file(
        relativePath: { eq: "projects/fuga-project-page-section-4-grid-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid2: file(
        relativePath: { eq: "projects/fuga-project-page-section-4-grid-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section4Grid3: file(
        relativePath: { eq: "projects/fuga-project-page-section-4-grid-3.jpg" }
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
    name: "FUGA - Online Store",
    allCategories: ["Web Design", "Interaction Design", "UI/UX"],
    madeByName: "Anton Lugovskoy",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["web DESIGN", "interaction DESIGN", "ui/ux"]}
            >
              Web and interaction design for FUGA.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              FUGA is a company focused on designing and creating dishes and
              decor items made of wood, such as, manual production of
              high-quality and unique cutting and serving boards, bowls, plates,
              trays, decorative drawers and vases.
              <br />
              <br />
              This hand made products complies with all industry requirements
              and certifications in order to provide safety and warranty to the
              final customers.
              <br />
              <br />
              The main objective of this project was to create a place where all
              customers and users could see and buy the various products that
              the company produces.
            </Paragraph>
          </Grid>
        </Grid>
        <Video
          videoSrcURL="https://player.vimeo.com/video/401333449?background=1&amp;amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
          videoTitle="Web and interaction design for FUGA."
          ratio="56.25%"
        />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ONLINE STORE">
              FUGA is inspired by ancient times when humans lived in harmony
              with nature, and homewares beauty always came along with
              functionality.
              <br />
              <br />
              Therefore the scheme color and palette of the online store, as
              well as the composition and imagery reflect that connection with
              nature.
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
            <Paragraph title="THE ONLINE STORE">
              Each FUGA object is a harmony of traditions and modernity,
              functionality and connection with nature, so the concept of the
              e-commerce website comes from there.
              <br />
              <br />
              The orange color has earth tones, the photos of the décor products
              as bowls, plates, trays between others clearly show the wood and
              textures in an elegant and aesthetic way and the additional
              imagery is in accordance to the brand style guideline.
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
            <Img fluid={data.section3Grid1.childImageSharp.fluid} />
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
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section3Grid4.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Catalogue Page" clientName="004" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <Paragraph title="RESPONSIVE DESIGN" sticky>
              The e-commerce website is properly responsive and adaptive to the
              different devices; for the mobile view the cart is always
              available for the user to make any purchase at any given time.
              <br />
              <br />
              Starting from the fact that in FUGA each piece is designed
              meticulously in order to reflect the respect and commitment with
              the consumers and continuing with the online store that follows
              the best practices of UX, there is no doubt that whether is from
              the desktop view or from the mobile view, the end to end user
              experience is enjoyable and delightful.
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
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default Fuga
