import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"

import {
  StylesProvider,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles"
import styled, { ThemeProvider as SCThemeProvider } from "styled-components"
import { Container } from "@material-ui/core"

import Nav from "../components/nav"
import Cta from "../components/cta"
import Footer from "../components/footer"
import dotsImg from "../images/bg_dots.png";

export const theme = createMuiTheme({
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
      body2: {
        fontSize: "1.125rem",
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
export const BgDots = styled.div`
  background: url(${dotsImg}) center top;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`

const Layout = ({
  children,
  hideCTA = false,
  ctaText,
  hideFooter = false,
  hideNav = false,
  hideLetsConnect = false,
  navWithBackBtn = false,
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
  console.log("navWithBackBtn", navWithBackBtn)
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <BgDots />
          {!hideNav && <Nav navWithBackBtn={navWithBackBtn} />}
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
