import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "../components/typography"
import Cta from "../components/cta"
import Footer from "../components/footer"
import handEmoji from "../images/hand-emoji.svg"
import Button from "../components/button"
import Divider from "../components/divider"
import { Grid, useMediaQuery } from "@material-ui/core"
import ArrowRight from "../images/right-arrow.svg";

const GreetingBadge = ({ emoji, children }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "14px 40px 14px 28px",
        backgroundColor: "white",
        color: "#030303",
        borderRadius: "35px",
        margin: "16px auto",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
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
    </div>
  )
}
const CapabilitiesList = ({ number, children }) => {
  const webUp = useMediaQuery("(min-width: 960px)")
  const tabletUp = useMediaQuery("(min-width: 600px)")
  return (
    <div
      style={{
        marginBottom: tabletUp ? 32 : 20,
        padding: tabletUp ? 0 : 25,
        border: tabletUp ? "none" : "1px solid #FFFFFF",
        borderRadius: tabletUp ? 0 : 8,
      }}
    >
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
    </div>
  )
}
const ClientsList = ({ serviceProvided, children }) => {
  const tabletUp = useMediaQuery("(min-width: 600px)")
  const webUp = useMediaQuery("(min-width: 960px)")
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: tabletUp ? "8px 0" : "16px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography variant="h3">{children}</Typography>
      {webUp ? <Typography style={{ fontSize: "1.125rem" }}>
        {serviceProvided}
      </Typography> : <img src={ArrowRight} alt="details"/>}
    </li>
  )
}

const IndexPage = () => {
  const webUp = useMediaQuery("(min-width: 960px)")
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
      {/* <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      <header
        style={{
          marginTop: tabletUp ? 120 : 75,
          marginBottom: tabletUp ? 250 : 120,
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            {tabletUp ? (
              <GreetingBadge emoji={handEmoji}>Hello, Hello!</GreetingBadge>
            ) : (
              <></>
            )}
            <Typography variant="h1" style={{ textAlign: "center" }}>
              We are Moonsight®. <br />
              First Superstar International Design Agency
            </Typography>
          </Grid>
        </Grid>
      </header>
      <section
        style={{
          marginBottom: tabletUp ? 240 : 100,
          display: "grid",
          gridTemplateColumns: tabletUp ? "1fr 1fr" : "1fr",
          gridGap: "0 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridGap: "48px 0",
          }}
        >
          <Img fluid={data.project1Img.childImageSharp.fluid} />
          <Img fluid={data.project3Img.childImageSharp.fluid} />
        </div>
        <div
          style={{
            display: "grid",
            gridGap: "48px 0",
          }}
        >
          <Img fluid={data.project2Img.childImageSharp.fluid} />
          <Img fluid={data.project4Img.childImageSharp.fluid} />
          <Img fluid={data.project5Img.childImageSharp.fluid} />
        </div>
      </section>
      <section style={{ marginBottom: tabletUp ? 250 : 135 }}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Typography variant="h2" style={{ marginBottom: 54 }}>
              Moonsight® is a branding and digital design agency building
              products, services, and ecommerce experiences that turn cultural
              values into company value.
            </Typography>
            <Button>Learn About Our Company</Button>
          </Grid>
        </Grid>
      </section>
      <section style={{ marginBottom: tabletUp ? 70 : 100 }}>
        <Divider
          leftText="Capabilities"
          middleText={tabletUp ? "section #" : ""}
          rightText="001"
          style={{ marginBottom: tabletUp ? 80 : 40 }}
        />
        <Grid
          container
          style={{
            marginBottom: tabletUp ? 100 : 50,
          }}
        >
          <Grid item xs={12} sm={7}>
            <Typography variant="h3">
              We specialize in helping brands and organizations to simplify
              their digital experiences for customers, employees and partners.
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: tabletUp ? 150 : 100 }}>
          <Grid item xs={0} sm={4} />
          <Grid item xs={12} sm={8}>
            <CapabilitiesList number="01">Branding</CapabilitiesList>
            <CapabilitiesList number="02">Design</CapabilitiesList>
            <CapabilitiesList number="03">Development</CapabilitiesList>
          </Grid>
        </Grid>
        <div
          style={{
            position: "relative",
            paddingBottom: webUp ? 200 : 100,
          }}
        >
          <figure
            style={{
              width: webUp ? "45%" : tabletUp ? "50%" : 220,
              position: "relative",
              left: webUp ? -24 : 0,
            }}
          >
            <Img fluid={data.capabilities1Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>001</figcaption>
          </figure>
          <figure
            style={{
              width: webUp ? "45%" : tabletUp ? "65%" : 310,
              position: "absolute",
              top: 100,
              left: webUp ? 300 : "unset",
              right: !webUp ? 0 : "unset",
            }}
          >
            <Img fluid={data.capabilities2Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>002</figcaption>
          </figure>
          <figure
            style={{
              width: webUp ? "45%" : tabletUp ? "65%" : 330,
              position: webUp ? "absolute" : "relative",
              top: webUp ? 200 : 100,
              right: webUp ? -24 : "unset",
            }}
          >
            <Img fluid={data.capabilities3Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>003</figcaption>
          </figure>
        </div>
      </section>
      <section style={{ marginBottom: tabletUp ? 200 : 100 }}>
        <Divider
          leftText="clients"
          middleText={tabletUp ? "section #" : ""}
          rightText="002"
          style={{ marginBottom: tabletUp ? 90 : 50 }}
        />
        <ul>
          <ClientsList serviceProvided="">PWC</ClientsList>
          <ClientsList serviceProvided="">McKinsey</ClientsList>
          <ClientsList serviceProvided="">Virgin</ClientsList>
          <ClientsList serviceProvided="">Raydiant</ClientsList>
          <ClientsList serviceProvided="">RND</ClientsList>
          <ClientsList serviceProvided="">Cisco</ClientsList>
          <ClientsList serviceProvided="">Testim</ClientsList>
          <ClientsList serviceProvided="">Gameday</ClientsList>
          <ClientsList serviceProvided="">Mashreq Bank</ClientsList>
          <ClientsList serviceProvided="">Credit Europe Bank</ClientsList>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
