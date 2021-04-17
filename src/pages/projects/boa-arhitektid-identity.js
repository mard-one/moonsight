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
import Margin from "../../components/margin"

const BoaArhitektidIdentity = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team14.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bgImg: file(
        relativePath: {
          eq: "projects/boa-arhitektid-identity-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Carousel1: file(
        relativePath: {
          eq: "projects/boa-arhitektid-identity-project-page-section-1-carousel-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Carousel2: file(
        relativePath: {
          eq: "projects/boa-arhitektid-identity-project-page-section-1-carousel-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Carousel3: file(
        relativePath: {
          eq: "projects/boa-arhitektid-identity-project-page-section-1-carousel-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section1Carousel4: file(
        relativePath: {
          eq: "projects/boa-arhitektid-identity-project-page-section-1-carousel-4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.branding,
    name: "BOA Arhitektid Identity",
    allCategories: ["Graphic Design", "Branding", "Art Direction"],
    madeByName: "Frank Wo",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Graphic Design", "Branding", "Art Direction"]}
            >
              Branding and graphic design for a Estonian architecture studio,
              BOA Arhitektid.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge" textAfter>
              BOA is an innovative brand, focused on architecture and designs;
              is an optimal, but always creative company.
              <br />
              <br />
              The main objective of this BOA Arhitektid initiative was to
              consolidate the branding guidelines and to design diverse printed,
              offline and design collaterals; this time the thematic of the
              project was about a Film Museum.
            </Paragraph>
            <Paragraph title="approach" textAfter>
              The way forward to address the challenge was through a set of hero
              images featuring peaceful atmospheres, landscapes and panoramics
              that evoked the history of Estonian films.
              <br />
              <br />
              The flyers and envelopes design for the Film Museum were
              consistent and harmonically layouted with the theme; the strategic
              combination of lights, gray backgrounds and blocks of information
              generate a good mood and emotional feeling for the customers.
            </Paragraph>
          </Grid>
        </Grid>
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "75vw", maxWidth: "900px" }}
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
          <ResponsiveImgContainer style={{ width: "75vw", maxWidth: "900px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel2.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
        <Margin txs={20} tsm={40} />
        <Carousel>
          <ResponsiveImgContainer
            style={{ width: "75vw", maxWidth: "900px" }}
            styleMd={{
              marginRight: 40,
            }}
            styleSm={{ marginRight: 20 }}
          >
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel3.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
          <ResponsiveImgContainer style={{ width: "75vw", maxWidth: "900px" }}>
            <Img
              style={{ height: "100%" }}
              fluid={data.section1Carousel4.childImageSharp.fluid}
            />
          </ResponsiveImgContainer>
        </Carousel>
      </Section>
    </Layout>
  )
}

export default BoaArhitektidIdentity
