import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Fragment } from "react"
import { useState } from "react"
import Layout from "../layout"
import workStyles from "./work.module.css"

const Work = () => {
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
  console.log('projects', projects);
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
  const buttonStyles = {
    btn: ''
  }
  return (
    <Layout>
      <div style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Typography variant="overline" style={{ lineHeight: 2 }}>
          our work
        </Typography>
        <Typography variant="h1" style={{ marginTop: "10px" }}>
          The work we do, <br /> and the people <br /> we help. By our talents
        </Typography>
        <div style={{ marginTop: "50px", marginBottom: "100px" }}>
          <input
            type="checkbox"
            id="All"
            value="All"
            checked={selProjTypes.length === 0}
            onChange={handleSelectAll}
            style={{ display: "none" }}
          />
          <label
            htmlFor="All"
            className={buttonStyles.btn}
            style={{ marginRight: "8px", borderRadius: "21px" }}
          >
            All
          </label>
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
                <label
                  htmlFor={type}
                  className={buttonStyles.btn}
                  style={{ margin: "0 8px", borderRadius: "21px" }}
                >
                  {type}
                </label>
              </Fragment>
            )
          })}
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "70px 100px 80px",
            border: "2px dashed #FFFFFF",
            borderRadius: "9px",
          }}
        >
          <Typography variant="overline">unfortunately</Typography>
          <Typography variant="h3" style={{ marginTop: "10px" }}>
            We have 20+ projects under NDA <br /> which we cannot show...
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridGap: "40px",
        }}
      >
        {projects.map(project => {
          return !selProjTypes.length || selProjTypes.includes(project.type) ? (
            <div
              key={project.id}
              className={`${workStyles["span" + project.span]}`}
            >
              <Img fluid={project.imgLink.childImageSharp.fluid} />
            </div>
          ) : (
            <Fragment key={project.id} />
          )
        })}
      </div>
    </Layout>
  )
}

export default Work