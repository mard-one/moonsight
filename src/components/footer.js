import { Container, Typography, useMediaQuery } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logoBlack from "../images/logo.svg"

const LetsConnect = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 90px;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const TAndC = styled.div`
  display: flex;
  color: #5e5e5e;
  flex-flow: row;
  justify-content: space-between;
  padding: 24px 100px;
  background-color: #e8e8e8;
  ${props => props.theme.breakpoints.down("sm")} {
    flex-flow: column;
    color: #aaaaaa;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: #111111;
  }
`

const Footer = ({ hideLetsConnect = false }) => {
  const webUp = useMediaQuery("(min-width: 960px)")
  // TODO: fix the logo black. Ask Ivan to import or use the same SVG file
  return (
    <footer style={{ backgroundColor: "#F4F4F4", color: "#030303" }}>
      {!hideLetsConnect && (
        <LetsConnect maxWidth="lg">
          <img
            src={logoBlack}
            alt="logo"
            style={{
              filter:
                "invert(100%) sepia(3%) saturate(69%) hue-rotate(176deg) brightness(118%) contrast(100%)",
            }}
          />
          <Typography
            style={{
              fontSize: "2rem",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              width: "510px",
            }}
          >
            We collaborate with ambitious brands and people. Let’s connect :)
          </Typography>
        </LetsConnect>
      )}

      <TAndC>
        <Link to="/">

        <Typography
          variant="overline"
          style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0" }}
          >
          Moonsight® 2020
        </Typography>
          </Link>
        <Typography
          variant="overline"
          style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0" }}
        >
          EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™
        </Typography>
        <Link to="/privacy-policy">
        <Typography
          variant="overline"
          style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0" }}
          >
          TERMS, PRIVACY POLICY
        </Typography>
          </Link>
      </TAndC>
    </footer>
  )
}

export default Footer
