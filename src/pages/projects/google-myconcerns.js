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

const GoogleMyconcern = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team9.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: { eq: "projects/google-myconcerns-project-page-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Banner: file(
        relativePath: {
          eq: "projects/google-myconcerns-project-page-section-1-banner.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.branding,
    name: "Google MyConcerns",
    allCategories: ["Illustration", "Motion Graphics", "Animation"],
    madeByName: "Brian Gossett",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001" last>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Illustration", "Motion Graphics", "Animation"]}
            >
              My concerns is an illustrative and visual project for Google.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              The goal of this Google project was to create a centralized
              platform for concerns, questions and learning about Google
              policies. Where in all googlers could communicate directly to the
              management and human resources, in order to request support with
              different concerns or needs that they may have as well as when
              seeking for guidance.
              <br />
              <br />
              The animation revolves around a single hand drawn line that
              supports the bold shapes, communicating a clear and positive
              message.
            </Paragraph>
          </Grid>
        </Grid>
        <Video
          videoSrcURL="https://player.vimeo.com/video/402301965"
          videoTitle="Google myconcerns"
          ratio="56.25%"
        />
        <Margin txs={80} tsm={160} />
        <Img fluid={data.section1Banner.childImageSharp.fluid} />
      </Section>
    </Layout>
  )
}

export default GoogleMyconcern
