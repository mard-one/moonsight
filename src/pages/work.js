import { Grid, Typography } from "@material-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, Fragment, useState } from "react"
import Margin from "../components/margin"
import Button from "../components/button"
import HeaderText from "../components/headerText"
import Ray from "../components/ray"
import Layout from "../layout"
import styled from "styled-components"

const ProjectName = styled(Typography)`
  position: absolute;
  width: 70%;
  bottom: 28px;
  left: 20px;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.1s linear;
  font-size: 30px;
  line-height: 1.15;
  ${props => props.theme.breakpoints.down("sm")} {
  }
`
const TextBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, black, transparent);
  bottom: 0px;
  left: 0px;
  opacity: 0;
  transition: all 0.1s linear;
`
const Project = styled.div`
  position: relative;
  height: 100%;
  &:hover {
    > ${ProjectName} {
      transform: translateY(0px);
      opacity: 1;
    }
    > ${TextBackdrop} {
      opacity: 0.7;
    }
  }
  ${props => props.theme.breakpoints.down("sm")} {
  }
`

export const projectTypes = {
  webdesign: "Web Design",
  appdesign: "App Design",
  development: "Development",
  branding: "Branding",
  graphicdesign: "Graphic Design",
  typography: "Typography",
  editorial: "Editorial",
  illustration: "Illustration",
  interactiondesign: "Interaction Design",
  uxui: "UX/UI Design",
  artdirection: "Art Direction",
}

const ProjectsFilter = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

const Work = ({ location }) => {
  const data = useStaticQuery(graphql`
    fragment workImages on File {
      childImageSharp {
        fluid(maxWidth: 380) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    query {
      ndaBg: file(relativePath: { eq: "under-nda-bg.png" }) {
        ...workImages
      }
      project1: file(relativePath: { eq: "projects/starbucks-work-page.jpg" }) {
        ...workImages
      }
      project2: file(relativePath: { eq: "projects/game-day-work-page.jpg" }) {
        ...workImages
      }
      project3: file(relativePath: { eq: "projects/medigate-work-page.jpg" }) {
        ...workImages
      }
      project4: file(
        relativePath: { eq: "projects/clean-bowl-club-work-page.jpg" }
      ) {
        ...workImages
      }
      project5: file(relativePath: { eq: "projects/asynchron-work-page.jpg" }) {
        ...workImages
      }
      project6: file(
        relativePath: { eq: "projects/nomand-jewelry-work-page.jpg" }
      ) {
        ...workImages
      }
      project7: file(
        relativePath: { eq: "projects/meloman-video-company-work-page.jpg" }
      ) {
        ...workImages
      }
      project8: file(relativePath: { eq: "projects/shadyrays-work-page.jpg" }) {
        ...workImages
      }
      project9: file(
        relativePath: { eq: "projects/boa-arhitektid-identity-work-page.jpg" }
      ) {
        ...workImages
      }
      project10: file(relativePath: { eq: "projects/testim-work-page.jpg" }) {
        ...workImages
      }
      project11: file(
        relativePath: { eq: "projects/stamp-ecommerce-work-page.jpg" }
      ) {
        ...workImages
      }
      project12: file(
        relativePath: { eq: "projects/maxim-kashin-architecture-work-page.jpg" }
      ) {
        ...workImages
      }
      project13: file(relativePath: { eq: "projects/kutarq-work-page.jpg" }) {
        ...workImages
      }
      project14: file(
        relativePath: { eq: "projects/garconne-display-typeface-work-page.jpg" }
      ) {
        ...workImages
      }
      project15: file(relativePath: { eq: "projects/rently-work-page.jpg" }) {
        ...workImages
      }
      project16: file(
        relativePath: { eq: "projects/google-myconcerns-work-page.jpg" }
      ) {
        ...workImages
      }
      project17: file(
        relativePath: { eq: "projects/underground-of-suncity-work-page.jpg" }
      ) {
        ...workImages
      }
      project18: file(
        relativePath: { eq: "projects/lithium-kitchens-work-page.jpg" }
      ) {
        ...workImages
      }
      project19: file(
        relativePath: { eq: "projects/scalartis-redesign-work-page.jpg" }
      ) {
        ...workImages
      }
      project20: file(
        relativePath: { eq: "projects/modern-metier-work-page.jpg" }
      ) {
        ...workImages
      }
      project21: file(relativePath: { eq: "projects/sibmet-work-page.jpg" }) {
        ...workImages
      }
      project22: file(
        relativePath: { eq: "projects/prime-apartments-work-page.jpg" }
      ) {
        ...workImages
      }
      project23: file(relativePath: { eq: "projects/superdry-work-page.jpg" }) {
        ...workImages
      }
    }
  `)
  const projects = [
    {
      name: "Starbucks Application Concept",
      img: data.project1.childImageSharp.fluid,
      link: "/projects/starbucks-app-concept",
      type: projectTypes.webdesign,
    },
    {
      name: "GameDay Vodka Website Revamp",
      img: data.project2.childImageSharp.fluid,
      link: "/projects/game-day",
      type: projectTypes.webdesign,
    },
    {
      name: "Medigate",
      img: data.project3.childImageSharp.fluid,
      link: "/projects/medigate",
      type: projectTypes.webdesign,
    },
    {
      name: "Clean Bowl Club Dog Project",
      img: data.project4.childImageSharp.fluid,
      link: "/projects/clean-bowl-club",
      type: projectTypes.webdesign,
    },
    {
      name: "Asynchron Book & Application",
      img: data.project5.childImageSharp.fluid,
      link: "/projects/asynchron",
      type: projectTypes.appdesign,
    },
    {
      name: "Nomand Jewelry Brand",
      img: data.project6.childImageSharp.fluid,
      link: "/projects/nomand-jewelry",
      type: projectTypes.webdesign,
    },
    {
      name: "Meloman Video Company",
      img: data.project7.childImageSharp.fluid,
      link: "/projects/meloman-video-company",
      type: projectTypes.webdesign,
    },
    {
      name: "ShadyRays Online Store",
      img: data.project8.childImageSharp.fluid,
      link: "/projects/shadyrays",
      type: projectTypes.webdesign,
    },
    {
      name: "BOA Arhitektid Identity",
      img: data.project9.childImageSharp.fluid,
      link: "/projects/boa-arhitektid-identity",
      type: projectTypes.branding,
    },
    {
      name: "Online Auto-Test Platform Testim",
      img: data.project10.childImageSharp.fluid,
      link: "/projects/testim",
      type: projectTypes.webdesign,
    },
    {
      name: "STAMP E-commerce",
      img: data.project11.childImageSharp.fluid,
      link: "/projects/stamp-ecommerce",
      type: projectTypes.webdesign,
    },
    {
      name: "Maxim Kashin Architecture",
      img: data.project12.childImageSharp.fluid,
      link: "/projects/maxim-kashin-architecture",
      type: projectTypes.webdesign,
    },
    {
      name: "KUTARQ Agency Rebranding",
      img: data.project13.childImageSharp.fluid,
      link: "/projects/kutarq",
      type: projectTypes.appdesign,
    },
    {
      name: "Garçonne Display Typeface",
      img: data.project14.childImageSharp.fluid,
      link: "/projects/garconne-display-typeface",
      type: projectTypes.typography,
    },
    {
      name: "Enterprise Smart Home Solutions Rently",
      img: data.project15.childImageSharp.fluid,
      link: "/projects/rently",
      type: projectTypes.webdesign,
    },
    {
      name: "Google MyConcerns",
      img: data.project16.childImageSharp.fluid,
      link: "/projects/google-myconcerns",
      type: projectTypes.branding,
    },
    {
      name: "Underground Of Suncity",
      img: data.project17.childImageSharp.fluid,
      link: "/projects/underground-of-suncity",
      type: projectTypes.appdesign,
    },
    {
      name: "Lithium Kitchens",
      img: data.project18.childImageSharp.fluid,
      link: "/projects/lithium-kitchens",
      type: projectTypes.webdesign,
    },
    {
      name: "Scalartis Redesign",
      img: data.project19.childImageSharp.fluid,
      link: "/projects/scalartis-redesign",
      type: projectTypes.appdesign,
    },
    {
      name: "Modern Metier",
      img: data.project20.childImageSharp.fluid,
      link: "/projects/modern-metier",
      type: projectTypes.branding,
    },
    {
      name: "SIBMET",
      img: data.project21.childImageSharp.fluid,
      link: "/projects/sibmet",
      type: projectTypes.webdesign,
    },
    {
      name: "Prime Apartments – Premium real estate",
      img: data.project22.childImageSharp.fluid,
      link: "/projects/prime-apartments",
      type: projectTypes.appdesign,
    },
    {
      name: "Superdry® Website Redesign",
      img: data.project23.childImageSharp.fluid,
      link: "/projects/superdry",
      type: projectTypes.webdesign,
    },
  ]
  const uniqueProjectTypes = [...new Set(projects.map(project => project.type))]
  const [selProjTypes, setSelProjTypes] = useState([])
  useEffect(() => {
    let params = new URLSearchParams(location.search)
    let filter = params.get("filter") || ""
    const selectedType = uniqueProjectTypes.findIndex(
      type => type.toLowerCase() === filter.toLowerCase()
    )
    setSelProjTypes(
      (uniqueProjectTypes[selectedType] &&
        uniqueProjectTypes[selectedType].type) ||
        []
    )
  }, [])

  const handleSelectAll = event => {
    if (event.target.checked) {
      setSelProjTypes([])
    }
  }

  const handleInputCheck = event => {
    const selProjType = event.target.value
    if (event.target.checked) {
      setSelProjTypes([selProjType])
    } else {
      if (selProjTypes.length > 1) {
        const filtered = selProjTypes.filter(
          type => type.toLowerCase() !== selProjType.toLowerCase()
        )
        setSelProjTypes([...filtered])
      }
    }
  }
  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
          zIndex: -2,
        }}
      >
        <Ray
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            top: -1000,
            width: 1700,
            height: 1700,
          }}
        />
      </div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <HeaderText overline="our work">
            The work we do, and the people we help. By our talents
          </HeaderText>
        </Grid>
      </Grid>
      <Margin as="section" bmd={100} bsm={100} bxs={90} tsm={44} txs={30}>
        <ProjectsFilter>
          <input
            type="checkbox"
            id="All"
            value="All"
            checked={selProjTypes.length === 0}
            onChange={handleSelectAll}
            style={{ display: "none" }}
          />
          <Button
            as="label"
            htmlFor="All"
            selected={selProjTypes.length === 0}
            style={{ marginRight: 16, borderRadius: "21px" }}
          >
            All
          </Button>
          {uniqueProjectTypes.map(type => {
            return (
              <Fragment key={type}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selProjTypes.includes(type)}
                  onChange={handleInputCheck}
                  style={{ display: "none" }}
                />
                <Button
                  as="label"
                  htmlFor={type}
                  selected={selProjTypes.includes(type)}
                  style={{ marginRight: 16, borderRadius: "21px" }}
                >
                  {type}
                </Button>
              </Fragment>
            )
          })}
        </ProjectsFilter>
      </Margin>
      <Margin as="section">
        <div style={{ overflow: "hidden" }}>
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={6} md={4} style={{ height: 500 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Img
                  fluid={data.ndaBg.childImageSharp.fluid}
                  style={{
                    width: "100%",
                    position: "absolute",
                    left: 0,
                    zIndex: -1,
                  }}
                />
                <div style={{ margin: 36 }}>
                  <Typography
                    variant="overline"
                    style={{
                      color: "rgba(242, 243, 241, 0.41)",
                    }}
                  >
                    unfortunately
                  </Typography>
                  <Typography variant="h3" style={{ marginTop: 10 }}>
                    {" "}
                    We have 20+ projects under NDA which we cannot show...
                  </Typography>
                </div>
              </div>
            </Grid>
            {projects.map(project => {
              return !selProjTypes.length ||
                selProjTypes.includes(project.type) ? (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={project.name}
                  style={{ height: 500 }}
                >
                  <Link to={project.link}>
                    <Project>
                      <Img fluid={project.img} style={{ height: "100%" }} />
                      <TextBackdrop />
                      <ProjectName variant="h3">{project.name}</ProjectName>
                    </Project>
                  </Link>
                </Grid>
              ) : (
                <Fragment key={project.name} />
              )
            })}
          </Grid>
        </div>
      </Margin>
    </Layout>
  )
}

export default Work
