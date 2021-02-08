/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "@material-ui/core"

import Nav from "./nav"
import "./layout.css"
import "../styles/font-import.css"
import "../styles/reset.css"
import Cta from "./cta"
import Footer from "./footer"

const Layout = ({ children, isCtaVisible = true, ctaText }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  {
    /* <Nav siteTitle={data.site.siteMetadata?.title || `Title`} /> */
  }
  return (
    <>
      <Nav />
      <main>
        <Container maxWidth="lg">
          {children}
          {isCtaVisible && <Cta ctaText={ctaText} />}
        </Container>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
