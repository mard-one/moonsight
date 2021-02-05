import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from "../components/typography"
import Cta from "../components/cta"

const IndexPage = () => (
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
    <Typography variant="h1" style={{textAlign: 'center'}}>
      We are Moonsight®. First Superstar International Design Agency
    </Typography>
    <Typography variant="h2">
      Moonsight® is a branding and digital design agency building products,
      services, and ecommerce experiences that turn cultural values into company
      value.
    </Typography>
    <Typography variant="h3">
      We specialise in helping brands and organisations to simplify their
      digital experiences for customers, employees and partners.
    </Typography>
    <Typography variant="p">
      You have at least a three-years experience in Creative Development. Your
      are able to choose the best technical solution to create an optimized
      project. You are also able to share your knowledge with other teammates,
      mostly other developers that will understand your development gibberish
      and learn from you.
    </Typography>
    <Typography variant="overline">overline</Typography>
    <Typography variant="fake">fake</Typography>
    <Typography>without varian</Typography>
    <Cta/>
  </Layout>
)

export default IndexPage
