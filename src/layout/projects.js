import {
  Container,
  Grid,
  MuiThemeProvider,
  StylesProvider,
  Typography,
} from "@material-ui/core"
import styled, { ThemeProvider as SCThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import React from "react"
import Nav from "../components/nav"
import { theme } from "."
import Margin from "../components/margin"
import Button from "../components/button"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Section from "../components/projects/section"
import Paragraph from "../components/projects/paragraph"
import ProjectDesc from "../components/projects/projectDesc"
import Image from "../components/projects/image"
import Carousel from "../components/projects/carousel"
import Video from "../components/projects/video"

export const projectsFragmentQuery = graphql`
  fragment projectsFragment on Query {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          childMdx {
            fields {
              slug
            }
            frontmatter {
              name
              mainCategory
              client {
                name
                serviceType
                order
                isVisible
              }
              mainPageConfig {
                isVisible
                thumbnailLink {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              workPageConfig {
                span
                order
                thumbnailLink {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const HeaderTitle = styled(Typography)`
  font-size: 1.125rem;
  margin-bottom: 8px;
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 0.875rem;
  }
`
const ProjectCartegories = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`
const CreatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => props.theme.breakpoints.down("xs")} {
    flex-flow: row-reverse;
    margin-top: 10px;
    & p {
      text-align: left;
    }
  }
`
const CreatorImage = styled.div`
  margin-left: 24px;
  border-radius: 100%;
  overflow: hidden;
  height: 80px;
  width: 80px;
  ${props => props.theme.breakpoints.down("xs")} {
    margin-left: unset;
    margin-right: 24px;
  }
`

const Layout = props => {
  const { data } = props
  const frontMatter = data.mdx.frontmatter
  console.log("props", props)
  console.log("frontMatter", frontMatter)
  console.log("data", data)

  const shortcodes = {
    Section,
    Grid,
    Paragraph,
    ProjectDesc,
    Image,
    Margin,
    Typography,
    Carousel,
    Video,
  }
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <header
            style={{
              height: "100vh",
              position: "relative",
            }}
          >
            <Grid
              container
              justify="space-between"
              direction="column"
              style={{ height: "100%" }}
            >
              <Nav navWithBackBtn />
              <Container>
                <Margin bsm={80} bxs={40}>
                  <Grid
                    item
                    container
                    justify="space-between"
                    alignItems="flex-end"
                  >
                    <Grid item xs={12} sm={5}>
                      <HeaderTitle>
                        Our work / {frontMatter.mainCategory}
                      </HeaderTitle>
                      <Typography variant="h1">{frontMatter.name}</Typography>
                      <Margin bxs={10} bsm={24} />
                      <ProjectCartegories>
                        {frontMatter.allCategories.map(category => (
                          <Button
                            key={category}
                            as="span"
                            notSelectable
                            style={{ marginRight: 16 }}
                          >
                            {category}
                          </Button>
                        ))}
                      </ProjectCartegories>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CreatorContainer>
                        <div>
                          <Typography variant="overline" align="right">
                            Made possible by
                          </Typography>
                          <Typography
                            variant="body2"
                            align="right"
                            style={{ marginTop: 8 }}
                          >
                            {frontMatter.madeBy.name}
                          </Typography>
                        </div>
                        <CreatorImage>
                          <Img
                            fixed={frontMatter.madeBy.img.childImageSharp.fixed}
                          />
                        </CreatorImage>
                      </CreatorContainer>
                    </Grid>
                  </Grid>
                </Margin>
              </Container>
            </Grid>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: -1,
              }}
            >
              <Img
                fluid={
                  frontMatter.projectPageConfig.thumbnailLink.childImageSharp
                    .fluid
                }
                style={{ height: "100%", zIndex: -1 }}
              />
            </div>
          </header>
          <main style={{ paddingTop: 64, paddingBottom: 200 }}>
            <Container>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </Container>
          </main>
          <Footer />
        </MuiThemeProvider>
      </SCThemeProvider>
    </StylesProvider>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        name
        mainCategory
        allCategories
        madeBy {
          name
          img {
            childImageSharp {
              fixed(height: 80, width: 80) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
        projectPageConfig {
          thumbnailLink {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Layout
