import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layout"
import SEO from "../components/seo"
import Cta from "../components/cta"
import Footer from "../components/footer"
import handEmoji from "../images/hand-emoji.svg"
import Button from "../components/button"
import Divider from "../components/divider"
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import ArrowRight from "../images/right-arrow.svg"
import Margin from "../components/margin"
import styled from "styled-components"

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
const ClientServiceProvided = styled(Typography)`
  opacity: 0;
  transition: all 0.2s ease-in-out;
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
  const tabletUp = useMediaQuery("(min-width: 600px)")
  return (
    <Capability>
      <Typography
        variant="overline"
        style={{
          verticalAlign: tabletUp ? "top" : "baseline",
          fontSize: tabletUp ? "1.125rem" : "0.875rem",
          fontWeight: 400,
        }}
      >
        {number}
      </Typography>
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
  const webUp = useMediaQuery("(min-width: 960px)")
  return (
    <Clients firstElem={firstElem}>
      <Typography variant="h3">{children}</Typography>
      {webUp ? (
        <ClientServiceProvided style={{ fontSize: "1.125rem" }}>
          {serviceProvided}
        </ClientServiceProvided>
      ) : (
        <img src={ArrowRight} alt="details" />
      )}
    </Clients>
  )
}

const IndexPage = () => {
  const tabletUp = useMediaQuery("(min-width: 600px)")
  const data = useStaticQuery(graphql`
    fragment projectImages on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fragment capabilitiesImages on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      project1Img: file(relativePath: { eq: "projects/wellton-park.jpg" }) {
        ...projectImages
      }
      project2Img: file(relativePath: { eq: "projects/meloman-video.jpg" }) {
        ...projectImages
      }
      project3Img: file(
        relativePath: { eq: "projects/tonkotsu-visual-identity.jpg" }
      ) {
        ...projectImages
      }
      project4Img: file(relativePath: { eq: "projects/kutarq.jpg" }) {
        ...projectImages
      }
      project5Img: file(relativePath: { eq: "projects/water.jpg" }) {
        ...projectImages
      }
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
    }
  `)

  return (
    <Layout>
      {/* <SEO title="Home" />*/}
      <Margin as="header" tmd={120} txs={75} bmd={250} bxs={120}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <GreetingBadge emoji={handEmoji}>Hello, Hello!</GreetingBadge>
            <Typography variant="h1" align="center">
              We are Moonsight®. <br />
              First Superstar International Design Agency
            </Typography>
          </Grid>
        </Grid>
      </Margin>
      <Margin as="section" bsm={240} bxs={100}>
        <Projects>
          <ProjectsGrid>
            <Img fluid={data.project1Img.childImageSharp.fluid} />
            <Img fluid={data.project3Img.childImageSharp.fluid} />
          </ProjectsGrid>
          <ProjectsGrid>
            <Img fluid={data.project2Img.childImageSharp.fluid} />
            <Img fluid={data.project4Img.childImageSharp.fluid} />
            <Img fluid={data.project5Img.childImageSharp.fluid} />
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
        </Grid>
      </Margin>
      <Margin as="section" bsm={70} bxs={100}>
        <Divider
          leftText="Capabilities"
          middleText={tabletUp ? "section #" : ""}
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
            <Link to="/work?filter=branding">
              {/* TODO: make these project types dynamic */}
              <CapabilitiesList number="01">Branding</CapabilitiesList>
            </Link>
            <Link to="/work?filter=desing">
              <CapabilitiesList number="02">Design</CapabilitiesList>
            </Link>
            <Link to="/work?filter=development">
              <CapabilitiesList number="03">Development</CapabilitiesList>
            </Link>
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
        <Divider
          leftText="clients"
          middleText={tabletUp ? "section #" : ""}
          rightText="002"
        />
        <Margin bsm={90} bxs={50} />
        <ul>
          <ClientsList
            serviceProvided="Created website for this agency"
            firstElem
          >
            PWC
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            McKinsey
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Virgin
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Raydiant
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            RND
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Cisco
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Testim
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Gameday
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Mashreq Bank
          </ClientsList>
          <ClientsList serviceProvided="Created website for this agency">
            Credit Europe Bank
          </ClientsList>
        </ul>
      </Margin>
    </Layout>
  )
}

export default IndexPage
