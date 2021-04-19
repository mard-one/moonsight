import { Container, Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logoBlack from "../images/logo.svg"

const LetsConnect = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 90px;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const TAndC = styled(Container)`
  display: flex;
  color: #b6b6b6;
  flex-flow: row;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
  ${props => props.theme.breakpoints.down("sm")} {
    background-color: #111111;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`
const TAndCText = styled.span`
  font-size: 0.688rem;
  margin: 0;
  text-transform: uppercase;
  ${props => props.theme.breakpoints.down("sm")} {
    margin: 8px 0;
  }
`

const Footer = ({ hideLetsConnect = false }) => {
  // TODO: fix the logo black. Ask Ivan to import or use the same SVG file
  return (
    <footer style={{}}>
      {!hideLetsConnect && (
        <LetsConnect maxWidth="lg">
          <Grid container>
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "calc(100% - (24px * 2))",
                height: "1px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.28)",
              }}
            />
            <Grid container item sm={7} xs={12} direction="row">
              <Typography
                variant="body1"
                style={{
                  display: "inline-block",
                  marginRight: 80,
                }}
              >
                Moonsight® <br /> Studio
              </Typography>
              <div>
                <div style={{ marginBottom: 12 }}>
                  <Typography
                    variant="overline"
                    style={{ lineHeight: 2, color: "rgb(242 243 241 / 60%)" }}
                  >
                    menu
                  </Typography>
                </div>
                <Link to="/work">
                  <Typography
                    variant="overline"
                    style={{ lineHeight: 2, display: "block", margin: "4px 0" }}
                  >
                    work
                  </Typography>
                </Link>
                <Link to="/about">
                  <Typography
                    variant="overline"
                    style={{ lineHeight: 2, display: "block", margin: "4px 0" }}
                  >
                    about us
                  </Typography>
                </Link>
                <Link to="/career">
                  <Typography
                    variant="overline"
                    style={{ lineHeight: 2, display: "block", margin: "4px 0" }}
                  >
                    we are hiring
                  </Typography>
                </Link>
              </div>
            </Grid>
            <Grid item sm={5} xs={12}>
              <Typography
                style={{
                  fontSize: "2rem",
                  lineHeight: 1,
                }}
              >
                We are here to help you become a better company which will look
                the best! Just trust us.
              </Typography>
            </Grid>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "calc(100% - (24px * 2))",
                height: "1px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.28)",
              }}
            />
          </Grid>
        </LetsConnect>
      )}

      <TAndC>
        <TAndCText as={Link} to="/">
          Moonsight® 2020
        </TAndCText>
        <TAndCText>
          DOING OUR BEST FOR THE BRANDS WHO WANTS TO BECOME THE BEST.™
        </TAndCText>
        <TAndCText as={Link} to="/privacy-policy">
          TERMS, PRIVACY POLICY
        </TAndCText>
      </TAndC>
    </footer>
  )
}

export default Footer
