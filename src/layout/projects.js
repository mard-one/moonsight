import {
  Container,
  Grid,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core"
import styled, { ThemeProvider as SCThemeProvider } from "styled-components"

import React from "react"
import { theme } from "."
import Footer from "../components/footer"
import Header from "../components/projects/header"
import Cta from "../components/cta"

const StyledMain = styled.main`
  padding-top: 64px;
  ${props => props.theme.breakpoints.down("sm")} {
    padding-top: 48px;
  }
`

const Layout = ({ projectInfo, children }) => {
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Header {...projectInfo} />
          <StyledMain>
            <Container>{children}</Container>
          </StyledMain>
          <Container maxWidth="lg">
            <Cta />
          </Container>
          <Footer />
        </MuiThemeProvider>
      </SCThemeProvider>
    </StylesProvider>
  )
}

export default Layout
