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

const LithiumKitchens = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team11.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/lithium-kitchens-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/lithium-kitchens-project-page-section-1-banner.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-2-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel2: file(
        relativePath: {
          eq: "projects/lithium-kitchens-project-page-section-2-carousel-2.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-2-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Carousel4: file(
        relativePath: {
          eq: "projects/lithium-kitchens-project-page-section-2-carousel-4.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-3-grid-1.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-3-grid-2.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-3-grid-3.jpg"
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
          eq: "projects/lithium-kitchens-project-page-section-3-grid-4.jpg"
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
    name: "Lithium Kitchens",
    allCategories: ["Web-Design", "Concept", "Branding"],
    madeByName: "Diana Dubina",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc features={["Web Design", "Branding", "UI/UX"]}>
              Web design and branding for a Russian furniture company, Lithium .
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Lithium Kitchens is a Russian company that aims to create the
              perfect personal space, home, a source of serenity and daily
              aesthetic pleasure.
              <br />
              <br />
              A new level of Russian furniture engineering, with innovative
              materials and impeccable premium kitchens that meet the highest
              international standards at an attractive price for the Russian
              consumer.
              <br />
              <br />
              Lithium Kitchens wanted our expertise to reflect on their digital
              presence the essence of innovation and impeccability of the
              company, not only to engage the russian market but also to connect
              with new customers in order to increase their revenue and set a
              new standard in the market.
            </Paragraph>
            <Paragraph title="approach">
              Starting with the concept designs, building the branding and
              continuing with the creation of the website following the web
              guidelines and best practices and finalizing by enhancing the
              experience for the users in the digital world to extend the
              experience of the users on the stores.
              <br />
              <br />
              Having in mind the stakeholders feedback and results from the
              customer needs, we created a brand new website to reflect the
              vision of Lithium Kitchens.
            </Paragraph>
          </Grid>
        </Grid>
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ACCESSORIES">
              In Lithium Kitchens the accessories, materials and elements are
              meticulously designed and placed to make the spaces enjoyable and
              as comfortable as possible.
              <br />
              <br />
              The web design is a clear representation of it, as shown in the
              below cards, where the layout is combined with the spaces to
              create balance, harmony, modernism and classy atmosphere.
            </Paragraph>
          </Grid>
        </Grid>
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
              fluid={data.section2Carousel1.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer
            style={{ width: "58.33vw", maxWidth: "700px" }}
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
            style={{ width: "58.33vw", maxWidth: "700px" }}
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
          <ResponsiveImgContainer
            style={{ width: "58.3350vw", maxWidth: "700px" }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section2Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>

      <Section sectionName="Website" clientName="003" last>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="THE WEBSITE">
              Lithium Kitchens website that conveys the elegance and classic
              concept of each of their kitchen designs tailor-made for the
              specific project and to meet the individual needs of the future
              owner.
              <br />
              <br />
              The look and feel of the website is fresh, delightfull and brings
              in the minimalism and creativity of the designers as well as
              engineers commited to the customer to provide the best of the
              experiencies online and offline.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          styleMd={{
            gridGap: 40,
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
          styleSm={{
            gridGap: 20,
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
          }}
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
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default LithiumKitchens
