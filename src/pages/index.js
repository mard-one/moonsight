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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    fragment projectImages on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
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
    }
  `)
  console.log("data", data)

  return (
    <Layout>
      {/* <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      <div style={{ marginTop: "120px", marginBottom: "250px" }}>
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
          <img src={handEmoji} alt="emoji" style={{ marginRight: "18px" }} />
          <span
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.555,
              verticalAlign: "super",
            }}
          >
            Hello, Hello!
          </span>
        </div>
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

        <Typography variant="h1">Branding</Typography>
        <Typography variant="h1">Design</Typography>
        <Typography variant="h1">Development</Typography>
      </div>
      <Cta />
      <Footer />
    </Layout>
  )
}

export default IndexPage
