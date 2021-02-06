import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from "../components/typography"
import Cta from "../components/cta"
import Footer from "../components/footer"
import handEmoji from "../images/hand-emoji.svg"
import Button from "../components/button"
import Divider from "../components/divider"

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
  return (
    <div
      style={{
        marginTop: "32px",
        marginBottom: "32px",
        position: "relative",
        marginLeft: "39%",
      }}
    >
      <Typography
        variant="overline"
        style={{
          verticalAlign: "top",
          fontSize: "1.125rem",
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
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Typography variant="h3">{children}</Typography>
      <Typography style={{ fontSize: "1.125rem" }}>
        {serviceProvided}
      </Typography>
    </li>
  )
}

const IndexPage = () => {
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
        relativePath: { eq: "capabilities-gallery/picture1.jpg" }
      ) {
        ...capabilitiesImages
      }
      capabilities2Img: file(
        relativePath: { eq: "capabilities-gallery/picture2.jpg" }
      ) {
        ...capabilitiesImages
      }
      capabilities3Img: file(
        relativePath: { eq: "capabilities-gallery/picture3.jpg" }
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
      <div style={{ marginTop: "120px", marginBottom: "250px" }}>
        <GreetingBadge emoji={handEmoji}>Hello, Hello!</GreetingBadge>
        <Typography
          variant="h1"
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          We are Moonsight®. <br />
          First Superstar International Design Agency
        </Typography>
      </div>
      <div
        style={{
          marginTop: "250px",
          marginBottom: "240px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
      </div>
      <div style={{ marginTop: "250px", marginBottom: "250px" }}>
        <Typography variant="h2" style={{ maxWidth: "700px" }}>
          Moonsight® is a branding and digital design agency building products,
          services, and ecommerce experiences that turn cultural values into
          company value.
        </Typography>
        <Button style={{ marginTop: "54px" }}>Learn About Our Company</Button>
      </div>
      <div>
        <Divider leftText="Capabilities" rightText="001" />
        <Typography
          variant="h3"
          style={{
            maxWidth: "670px",
            marginTop: "80px",
            marginBottom: "100px",
          }}
        >
          We specialise in helping brands and organisations to simplify their
          digital experiences for customers, employees and partners.
        </Typography>
        <div style={{ marginTop: "100px", marginBottom: "150px" }}>
          <CapabilitiesList number="01">Branding</CapabilitiesList>
          <CapabilitiesList number="02">Design</CapabilitiesList>
          <CapabilitiesList number="03">Development</CapabilitiesList>
        </div>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(36,1fr)",
            gridTemplateRows: "repeat(10,auto)",
            marginTop: "150px",
            marginBottom: "70px",
          }}
        >
          <figure
            style={{
              gridRow: "1/8 span",
              gridColumn: "1/16 span",
              zIndex: 2,
            }}
          >
            <Img fluid={data.capabilities1Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>001</figcaption>
          </figure>
          <figure style={{ gridRow: "2/8 span", gridColumn: "7/16 span" }}>
            <Img fluid={data.capabilities2Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>002</figcaption>
          </figure>
          <figure style={{ gridRow: "3/8 span", gridColumn: "21/16 span" }}>
            <Img fluid={data.capabilities3Img.childImageSharp.fluid} />
            <figcaption style={{ lineHeight: 1.75 }}>003</figcaption>
          </figure>
        </div>
        <div style={{marginTop: '70px', marginBottom: '200px'}}>
          <Divider leftText="clients" rightText="002" />
          <ul style={{marginTop: '90px'}}>
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
        </div>
      </div>
      <Cta />
      <Footer />
    </Layout>
  )
}

export default IndexPage
