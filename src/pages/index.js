import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layout"
import SEO from "../components/seo"
import handEmoji from "../images/hand-emoji.svg"
import Button from "../components/button"
import Divider from "../components/divider"
import { Grid, Typography } from "@material-ui/core"
import ArrowRight from "../images/right-arrow.svg"
import Margin from "../components/margin"
import styled from "styled-components"
import { Fragment } from "react"
import Ray from "../components/ray"
import Sheet from "../components/shapes/sheet"
import Sphere from "../components/shapes/sphere"
import Spiral from "../components/shapes/spiral"

const Projects = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 48px;
  ${props => props.theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`
const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 48px 0;
  ${props => props.theme.breakpoints.down("sm")} {
    grid-gap: 20px 0;
  }
`
const Capability = styled.div`
  margin-bottom: 32px;
  padding: 0;
  border: none;
  border-radius: 0;
  ${props => props.theme.breakpoints.down("xs")} {
    margin-bottom: 20px;
    padding: 25px;
    border: 1px solid #ffffff;
    border-radius: 8px;
  }
`
const CapabilityNumber = styled(Typography)`
  font-weight: 400;
  vertical-align: top;
  font-size: 1.125rem;
  ${props => props.theme.breakpoints.down("xs")} {
    vertical-align: baseline;
    font-size: 0.875rem;
  }
`
const ClientServiceProvided = styled(Typography)`
  opacity: 0;
  transition: all 0.2s ease-in-out;
  display: initial;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const ClientServiceLink = styled.img`
  display: none;
  ${props => props.theme.breakpoints.down("sm")} {
    display: initial;
  }
`
const Clients = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  transition: all 0.2s ease-in-out;
  border-top: 1px solid #353535;
  border-bottom: 1px solid #353535;
  color: rgba(255, 255, 255, 0.36);
  &:hover {
    color: #f2f3f1;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:hover ${ClientServiceProvided} {
    opacity: 1;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    padding: 16px 0;
  }
`

const CapabilitiesGallery = styled.div`
  position: relative;
  padding-bottom: 200px;
  ${props => props.theme.breakpoints.down("sm")} {
    padding-bottom: 100px;
  }
`
const GalleryImg1 = styled.figure`
  position: relative;
  width: 45%;
  left: -24px;
  &:hover {
    z-index: 3;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    width: 50%;
    left: 0;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 220px;
  }
`
const GalleryImg2 = styled.figure`
  position: absolute;
  top: 100px;
  width: 45%;
  left: 300px;
  right: unset;
  &:hover {
    z-index: 3;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    width: 65%;
    left: unset;
    right: 0;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 310px;
  }
`
const GalleryImg3 = styled.figure`
  width: 45%;
  position: absolute;
  top: 200px;
  right: -24px;
  &:hover {
    z-index: 3;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    width: 65%;
    position: relative;
    top: 100px;
    right: unset;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 330px;
  }
`
const Badge = styled.div`
  display: inline-block;
  padding: 14px 40px 14px 28px;
  background-color: white;
  color: #030303;
  border-radius: 35px;
  margin: 16px auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`

const StyledRayWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
`
const StyledRay = styled(Ray)`
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  top: -120px;
  width: 1400px;
  height: 1400px;
  ${props => props.theme.breakpoints.down("xs")} {
    top: -80px;
    width: 1000px;
    height: 1000px;
  }
`
const StyledSheet = styled(Sheet)`
  position: absolute;
  width: 450px;
  height: 450px;
  bottom: 220px;
  right: 125px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 260px;
    height: 260px;
    bottom: 220px;
    left: calc(50vw + 270px);
  }
`
const StyledSphere = styled(Sphere)`
  position: absolute;
  left: -70px;
  width: 430px;
  height: 430px;
  ${props => props.theme.breakpoints.down("sm")} {
    width: 300px;
    height: 300px;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 220px;
    height: 220px;
    left: -100px;
  }
`
const StyledSecondRayWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
  ${props => props.theme.breakpoints.down("xs")} {
    margin-top: calc(650px - 50vw);
  }
`
const StyledSecondRay = styled(Ray)`
  position: relative;
  width: 3000px;
  height: 3000px;
  left: 50%;
  transform: translateX(-50%);
  background-image: radial-gradient(closest-side, transparent, black 50%),
    linear-gradient(
      314deg,
      rgb(235 117 131 / 50%) 7.05%,
      rgb(167 108 194 / 50%) 51.72%,
      rgb(131 85 230 / 50%) 100%
    );
  background-color: black;
  background-position-x: 650px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 830px;
    height: 830px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-image: radial-gradient(closest-side, transparent, black 100%),
      linear-gradient(
        314deg,
        rgb(235 117 131 / 45%) 7.05%,
        rgb(167 108 194 / 45%) 51.72%,
        rgb(131 85 230 / 45%) 100%
      );
    background-color: black;
    background-position-x: 180px;
  }
`
const StyledSpiral = styled(Spiral)`
  position: absolute;
  left: calc(50% + 120px);
  width: 430px;
  height: 430px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 320px;
    height: 320px;
    left: calc(50% - (320px / 2));
  }
`
const GreetingBadge = ({ emoji, children }) => {
  return (
    <Badge>
      <img src={emoji} alt="emoji" style={{ marginRight: "18px" }} />
      <span
        style={{
          fontSize: "1.125rem",
          lineHeight: 1.555,
          verticalAlign: "super",
        }}
      >
        {children}
      </span>
    </Badge>
  )
}
const CapabilitiesList = ({ number, children }) => {
  return (
    <Capability>
      <CapabilityNumber variant="overline">{number}</CapabilityNumber>
      <Typography
        variant="h1"
        style={{
          display: "inline-block",
          lineHeight: 1,
          marginLeft: "8px",
        }}
      >
        {children}
      </Typography>
    </Capability>
  )
}
const ClientsList = ({ serviceProvided, children, firstElem }) => {
  return (
    <Clients firstElem={firstElem}>
      <Typography variant="h3">{children}</Typography>
      <ClientServiceProvided style={{ fontSize: "1.125rem" }}>
        {serviceProvided}
      </ClientServiceProvided>
      <ClientServiceLink src={ArrowRight} alt="details" />
    </Clients>
  )
}

const CapabilitiesData = [
  { name: "Branding", number: "01", queryParam: "?filter=branding" },
  { name: "Design", number: "02", queryParam: "?filter=design" },
  { name: "Development", number: "03", queryParam: "?filter=development" },
].sort((a, b) => parseInt(a.number) - parseInt(b.number))

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    fragment capabilitiesImages on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    query {
      capabilities1Img: file(
        relativePath: { eq: "capabilities/picture1.jpg" }
      ) {
        ...capabilitiesImages
      }
      capabilities2Img: file(
        relativePath: { eq: "capabilities/picture2.jpg" }
      ) {
        ...capabilitiesImages
      }
      capabilities3Img: file(
        relativePath: { eq: "capabilities/picture3.jpg" }
      ) {
        ...capabilitiesImages
      }
      ...projectsFragment
    }
  `)

  console.log("data", data)
  const projects = data.allFile.edges
  const projectsToDisplay = projects.filter(
    ({ node: { childMdx: { frontmatter } = {} } = {} }) =>
      frontmatter.mainPageConfig.isVisible
  )
  console.log("projects", projects)
  return (
    <Layout>
      <StyledRayWrapper>
        <StyledRay>
          <StyledSheet />
        </StyledRay>
      </StyledRayWrapper>
      {/* <SEO title="Home" />*/}
      <Margin
        as="header"
        tmd={120}
        txs={75}
        bmd={250}
        bxs={120}
        style={{ position: "relative" }}
      >
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <GreetingBadge emoji={handEmoji}>Hello, Hello!</GreetingBadge>
            <Typography variant="h1" align="center">
              We are Moonsight®. <br />
              First Superstar International Design Agency
            </Typography>
          </Grid>
        </Grid>
        <StyledSphere rotateDeg={-150} />
      </Margin>
      <Margin as="section" bsm={240} bxs={100}>
        <Projects>
          <ProjectsGrid>
            {projectsToDisplay.map(({ node: { childMdx } = {} }, index) => {
              return !(index % 2) ? (
                <Link key={childMdx.fields.slug} to={childMdx.fields.slug}>
                  <Img
                    fluid={
                      childMdx.frontmatter.mainPageConfig.thumbnailLink
                        .childImageSharp.fluid
                    }
                  />
                </Link>
              ) : (
                <Fragment key={childMdx.fields.slug} />
              )
            })}
          </ProjectsGrid>
          <ProjectsGrid>
            {projectsToDisplay.map(({ node: { childMdx } = {} }, index) => {
              return index % 2 ? (
                <Link key={childMdx.fields.slug} to={childMdx.fields.slug}>
                  <Img
                    fluid={
                      childMdx.frontmatter.mainPageConfig.thumbnailLink
                        .childImageSharp.fluid
                    }
                  />
                </Link>
              ) : (
                <Fragment key={childMdx.fields.slug} />
              )
            })}
          </ProjectsGrid>
        </Projects>
      </Margin>
      <Margin as="section" bsm={250} bxs={135}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Typography variant="h2">
              Moonsight® is a branding and digital design agency building
              products, services, and ecommerce experiences that turn cultural
              values into company value.
            </Typography>
            <Margin bsm={54} bxs={30} />
            <Button as={Link} to="/about">
              Learn About Our Company
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            style={{
              minHeight: 400,
            }}
          ></Grid>
          <StyledSecondRayWrapper>
            <StyledSecondRay>
              <StyledSpiral />
            </StyledSecondRay>
          </StyledSecondRayWrapper>
        </Grid>
      </Margin>
      <Margin as="section" bsm={70} bxs={100}>
        <Divider
          leftText="Capabilities"
          middleText="section #"
          rightText="001"
        />
        <Margin bsm={80} bxs={40} />
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Typography variant="h3">
              We specialize in helping brands and organizations to simplify
              their digital experiences for customers, employees and partners.
            </Typography>
          </Grid>
        </Grid>
        <Margin bsm={100} bxs={50} />
        <Grid container>
          <Grid item xs={false} sm={4} />
          <Grid item xs={12} sm={8}>
            {CapabilitiesData.map(data => {
              return (
                <Link
                  to={`/work${data.queryParam}`}
                  key={`/work${data.queryParam}`}
                >
                  <CapabilitiesList number={data.number}>
                    {data.name}
                  </CapabilitiesList>
                </Link>
              )
            })}
          </Grid>
        </Grid>
        <Margin bsm={150} bxs={100} />
        <CapabilitiesGallery>
          <GalleryImg1 style={{ zIndex: 2 }}>
            <Img fluid={data.capabilities1Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>001</figcaption>
          </GalleryImg1>
          <GalleryImg2>
            <Img fluid={data.capabilities2Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>002</figcaption>
          </GalleryImg2>
          <GalleryImg3>
            <Img fluid={data.capabilities3Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>003</figcaption>
          </GalleryImg3>
        </CapabilitiesGallery>
      </Margin>
      <Margin as="section">
        <Divider leftText="clients" middleText="section #" rightText="002" />
        <Margin bsm={90} bxs={50} />
        <ul>
          {projects
            .sort(
              (a, b) =>
                parseInt(a.node.childMdx.frontmatter.client.order) -
                parseInt(b.node.childMdx.frontmatter.client.order)
            )
            .map(({ node }, i) => {
              const {
                name,
                serviceType,
                isVisible,
              } = node.childMdx.frontmatter.client
              return isVisible ? (
                <Link
                  to={node.childMdx.fields.slug}
                  key={node.childMdx.fields.slug}
                >
                  <ClientsList
                    serviceProvided={serviceType}
                    firstElem={i === 0}
                  >
                    {name}
                  </ClientsList>
                </Link>
              ) : (
                <Fragment key={node.childMdx.fields.slug} />
              )
            })}
        </ul>
      </Margin>
    </Layout>
  )
}

export default IndexPage
