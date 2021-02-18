import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Fragment } from "react"
import { useState } from "react"
import Margin from "../components/margin"
import Button from "../components/button"
import HeaderText from "../components/headerText"
import Layout from "../layout"
import styled from "styled-components"

const ProjectsUnderNDA = styled.div`
  text-align: center;
  padding: 70px 100px 80px;
  border: 2px dashed #ffffff;
  border-radius: 9px;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const ProjectsFilter = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`


const Work = ({location}) => {
  // let params = new URLSearchParams(location.search);
  // let filter = params.get("filter")

  const tabletUp = useMediaQuery("(min-width: 600px)")
  const [selProjTypes, setSelProjTypes] = useState([])
  const data = useStaticQuery(graphql`
    query {
      projectsJson {
        projects {
          id
          imgLink {
            childImageSharp {
              fluid(maxHeight: 550) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
          span
          type
        }
      }
    }
  `)
  const projects = data.projectsJson.projects
  const allProjectTypes = [...new Set(projects.map(project => project.type))]

  const handleSelectAll = event => {
    if (event.target.checked) {
      setSelProjTypes([])
    }
  }

  const handleInputCheck = event => {
    const selProjType = event.target.value
    if (event.target.checked) {
      setSelProjTypes([...selProjTypes, selProjType])
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
      <HeaderText overline="our work">
        The work we do, <br /> and the people <br /> we help. By our talents
      </HeaderText>
      <Margin as="section" bmd={100} bsm={100} bxs={80}>
        <Margin tmd={50} bmd={100} txs={25} bxs={80}>
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
            {allProjectTypes.map(type => {
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
        <ProjectsUnderNDA>
          <Typography variant="overline">unfortunately</Typography>
          <Typography variant="h3" style={{ marginTop: "10px" }}>
            We have 20+ projects under NDA <br /> which we cannot show...
          </Typography>
        </ProjectsUnderNDA>
      </Margin>
      <Margin as="section">
        <div style={{ overflow: "hidden" }}>
          <Grid container spacing={tabletUp ? 5 : 10}>
            {projects.map(project => {
              return !selProjTypes.length ||
                selProjTypes.includes(project.type) ? (
                <Grid item xs={12} sm={project.span} key={project.id}>
                  <Img fluid={project.imgLink.childImageSharp.fluid} />
                </Grid>
              ) : (
                <Fragment key={project.id} />
              )
            })}
          </Grid>
        </div>
      </Margin>
    </Layout>
  )
}

export default Work
