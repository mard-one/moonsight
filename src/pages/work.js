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
  border-radius: 6px;
  overflow: hidden;
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
      ndaBg: file(relativePath: { eq: "under-nda-bg.png" }
      ) {
        ...workImages
      }
      project4: file(
        relativePath: { eq: "projects/clean-bowl-club-work-page.jpg" }
      ) {
        ...workImages
      }
      project7: file(
        relativePath: { eq: "projects/meloman-video-company-work-page.jpg" }
      ) {
        ...workImages
      }
      project10: file(relativePath: { eq: "projects/testim-work-page.jpg" }
      ) {
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
      project13: file(relativePath: { eq: "projects/kutarq-work-page.jpg" }
      ) {
        ...workImages
      }
      project16: file(
        relativePath: { eq: "projects/google-myconcerns-work-page.jpg" }
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
      project22: file(
        relativePath: { eq: "projects/prime-apartments-work-page.jpg" }
      ) {
        ...workImages
      }
      project27: file(
        relativePath: { eq: "projects/md-personal-branding-work-page.jpg" }
      ) {
        ...workImages
      }
      project30: file(relativePath: { eq: "projects/avrora-work-page.jpg" }
      ) {
        ...workImages
      }
      project31: file(
        relativePath: { eq: "projects/mountain-hardwear-work-page.jpg" }
      ) {
        ...workImages
      }
    }
  `)
  const projects = [
    {
      name: "Clean Bowl Club Dog Project",
      img: data.project4.childImageSharp.fluid,
      link: "/projects/clean-bowl-club",
      type: projectTypes.webdesign,
    },
    {
      name: "Meloman Video Company",
      img: data.project7.childImageSharp.fluid,
      link: "/projects/meloman-video-company",
      type: projectTypes.webdesign,
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
      name: "Google MyConcerns",
      img: data.project16.childImageSharp.fluid,
      link: "/projects/google-myconcerns",
      type: projectTypes.branding,
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
      name: "Prime Apartments – Premium real estate",
      img: data.project22.childImageSharp.fluid,
      link: "/projects/prime-apartments",
      type: projectTypes.appdesign,
    },
    {
      name: "MD 2021 — Personal Branding",
      img: data.project27.childImageSharp.fluid,
      link: "/projects/md-personal-branding",
      type: projectTypes.appdesign,
    },
    {
      name: "Avrora Systems",
      img: data.project30.childImageSharp.fluid,
      link: "/projects/avrora",
      type: projectTypes.appdesign,
    },
    {
      name: "Mountain Hardwear Logowear 2021",
      img: data.project31.childImageSharp.fluid,
      link: "/projects/mountain-hardwear",
      type: projectTypes.branding,
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
                  borderRadius: 6,
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
