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

const MdPersonalBranding = () => {
  const data = useStaticQuery(graphql`
    query {
      madeByImg: file(relativePath: { eq: "team/team31.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bgImg: file(
        relativePath: {
          eq: "projects/md-personal-branding-project-page-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid1: file(
        relativePath: {
          eq: "projects/md-personal-branding-project-page-section-1-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section1Grid2: file(
        relativePath: {
          eq: "projects/md-personal-branding-project-page-section-1-grid-2.jpg"
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
          eq: "projects/md-personal-branding-project-page-section-2-grid-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      section2Grid2: file(
        relativePath: {
          eq: "projects/md-personal-branding-project-page-section-2-grid-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log("data", data)
  const projectInfo = {
    mainCategory: projectTypes.appdesign,
    name: "MD 2020 — Personal Branding",
    allCategories: ["Branding", "Typography", "Graphic Design"],
    madeByName: "Mike Dziambor",
    madeByImg: data.madeByImg.childImageSharp.fixed,
    bgImg: data.bgImg.childImageSharp.fluid,
  }
  return (
    <Layout projectInfo={projectInfo}>
      <Section first sectionName="Project Description" clientName="001">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} style={{ position: "relative" }}>
            <ProjectDesc
              features={["Branding", "Typography", "Graphic Design"]}
            >
              Branding and graphic design for my personal branding, MD 2020.
            </ProjectDesc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph title="challenge">
              I am Mike, a communication design student and freelancer based in
              Hamburg. My specialities are in print, typography and type design
              and I am always looking for inspirational projects in those areas,
              cause it is my passion.
              <br />
              <br />
              By creating my personal branding with its own identity, reinforced
              by a digital presence and with the use of merchandising objects,
              the main goal is to attract new, relevant connections and keep a
              high level of engagement with them.
              <br />
              <br />
              Therefore and since I am positioning myself in graphic design as
              well as typography creation, all the content, visuals and the
              structure needed to be in accordance with my principes and
              specialties, in order to increase my audience and generate new
              revenue as a freelancer.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          style={{ gridTemplateColumns: "1fr 3fr" }}
          styleMd={{ gridGap: 40 }}
          styleSm={{ gridGap: 20 }}
        >
          <StyledGridItem>
            <Img fluid={data.section1Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section1Grid2.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>

      <Section sectionName="Branding" clientName="002">
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Paragraph title="DIGITAL AND PRINT PRESENCE">
              To build a strong presence digitally, I have strategically planned
              my existence in different social media platforms such as Instagram
              and Behance, along with a website in order to showcase my
              education, my work and the various projects I have worked on.
              <br />
              <br />
              Also, as a part of my personal branding planning I keep my
              aducience updated on the new designs I am creating, while ensuring
              that the content I share is relevant and attractive.
            </Paragraph>
          </Grid>
        </Grid>
        <StyledGrid
          styleMd={{ gridGap: 40, gridTemplateColumns: "1fr 3fr" }}
          styleSm={{ gridGap: 20, gridTemplateColumns: "1fr" }}
        >
          <StyledGridItem>
            <Img fluid={data.section2Grid1.childImageSharp.fluid} />
          </StyledGridItem>
          <StyledGridItem>
            <Img fluid={data.section2Grid2.childImageSharp.fluid} />
          </StyledGridItem>
        </StyledGrid>
      </Section>
    </Layout>
  )
}

export default MdPersonalBranding
