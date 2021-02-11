import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"

import {
  StylesProvider,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import { Container } from "@material-ui/core"

import Nav from "../components/nav"
import Cta from "../components/cta"
import Footer from "../components/footer"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Graphik, Helvetica, Arial, sans-serif",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
        fontWeight: 400,
        lineHeight: 1.09375,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "clamp(1.875rem, 4vw, 3rem)",
        fontWeight: 400,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
        fontWeight: 400,
        lineHeight: 1.15,
      },
      body1: {
        fontSize: "1.5rem",
        fontWeight: 400,
        lineHeight: 1.15,
      },
      overline: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.15,
        letterSpacing: "0.03em",
      },
    },
  },
})

const Layout = ({
  children,
  hideCTA = false,
  ctaText,
  hideFooter = false,
  hideNav = false,
  hideLetsConnect = false,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("theme", theme)
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          {!hideNav && <Nav />}
          <main>
            <Container maxWidth="lg">
              {children}
              {!hideCTA && <Cta ctaText={ctaText} />}
            </Container>
          </main>
          {!hideFooter && <Footer hideLetsConnect={hideLetsConnect} />}
        </MuiThemeProvider>
      </SCThemeProvider>
    </StylesProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
