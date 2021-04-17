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
import {
  ResponsiveImgContainer,
  StyledGrid,
  StyledGridItem,
} from "./maxim-kashin-architecture"

const CleanBowlClub = () => {
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
        relativePath: { eq: "projects/clean-bowl-club-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-1-banner.jpg"
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
          eq: "projects/clean-bowl-club-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section2Grid3: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-2-grid-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Carousel1: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-3-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 630) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section3Carousel2: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-3-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 630) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid1: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-4-grid-1.png"
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
          eq: "projects/clean-bowl-club-project-page-section-4-grid-2.png"
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
          eq: "projects/clean-bowl-club-project-page-section-4-grid-3.png"
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
          eq: "projects/clean-bowl-club-project-page-section-4-grid-4.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section4Grid5: file(
        relativePath: {
          eq: "projects/clean-bowl-club-project-page-section-4-grid-5.png"
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
    name: "Clean Bowl Club Dog Project",
    allCategories: ["Web Design", "UX/UI Design", "Branding"],
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
              features={["PRODUCT BRANDING", "PACKAGING DESIGN", "LOGO DESIGN"]}
            >
              Product branding and web design for a New York brand, Clean Bowl
              Club.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              Clean Bowl Club delivers healthy fresh dog food in New York. This
              venture cooks healthy meals for the New Yorkers dogs with products
              100% natural, without artificial ingredients, using prime cuts of
              meat and fresh vegetables.
              <br />
              <br />
              The aim of this endeavor is to give the customers the best product
              and make the pets happy. Hence, humans best friend deserves the
              number one pick, so I created the design of the website where all
              users can find the brand’s products to give quility gifts and
              meals to their dogs.
            </Paragraph>
          </Grid>
        </Grid>
        <Img
          fluid={data.section1Banner.childImageSharp.fluid}
          style={{ minHeight: 200 }}
        />
      </Section>

      <Section sectionName="Web Design" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="WEBSITE">
              Clean Bowl Club offer products that can be used for all dog races
              and make them happy every day.
              <br />
              <br />
              To convey that message, I created a special feature in the
              website, where users can place orders and set up a delivery time.
              Is an effortless journey, in which the user selects the desired
              meal, the delivery option (fresh or frozen), check it’s
              ingredientes, preparation and finally hits the “Getch My First
              Delivery '' button.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{
            gridTemplateColumns: "1fr 1fr",
          }}
          styleMd={{ columnGap: 40, rowGap: 10, gridTemplateRows: "auto auto" }}
          styleSm={{ gridGap: 20, gridTemplateRows: "auto" }}
        >
          <StyledGridItem
            styleMd={{ gridColumn: "1 / span 1", gridRow: "1 / span 2" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1", gridRow: "1 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid2.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem
            styleMd={{ gridColumn: "2 / span 1", gridRow: "2 / span 1" }}
            styleSm={{ gridColumn: "1 / span 2" }}
          >
            <Img fluid={data.section2Grid3.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Web Design" clientName="003">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="ORDERING PROCESS">
              In order to enhance the experience and get to now the dogs needs
              better, I design a form in the website for the company to collect
              information about the pets such as weight, age, body shape,
              activity level, between others, in order to personalize the
              portions with the specific amount of calories that the dog needs.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "50vw", maxWidth: "630px" }}
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
          <ResponsiveImgContainer style={{ width: "50vw", maxWidth: "630px" }}>
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
            <Paragraph title="RESPONSIVE DESIGN">
              Delivering quality and freshness to the pets and their owners, is
              the key point of the project, therefore the design has been
              thoughtfully made to communicate so. The food arrives in a
              sustainable packaging that has a friendly environment design.
              <br />
              <br />
              And lastly, the responsive design is a meticulous adaption of the
              desktop view, keeping the same search, view and delivery features
              as the desktop view, ensuring an end-to-end good user experience.
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
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid3.childImageSharp.fluid} />
                </StyledGridItem>
              </StyledGridItem>
              <StyledGridItem
                styleMd={{ marginTop: 200 }}
                styleSm={{ marginTop: 0 }}
              >
                <Img fluid={data.section4Grid4.childImageSharp.fluid} />
                <StyledGridItem
                  styleMd={{ marginTop: 40 }}
                  styleSm={{ marginTop: 20 }}
                >
                  <Img fluid={data.section4Grid5.childImageSharp.fluid} />{" "}
                </StyledGridItem>
              </StyledGridItem>
            </StyledGrid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default CleanBowlClub
