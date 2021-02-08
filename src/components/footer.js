import { Container } from "@material-ui/core"
import React from "react"
import logoBlack from "../images/logo.svg"
import Typography from "./typography"

const Footer = () => {
  // TODO: fix the logo black. Ask Ivan to import or use the same SVG file
  return (
    <footer style={{ backgroundColor: "#F4F4F4", color: "#030303" }}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "90px 0",
        }}
      >
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
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#E8E8E8",
          color: "#5E5E5E",
          padding: "24px 100px",
        }}
      >
        <Typography variant="overline" style={{ fontSize: "0.688rem" }}>
          Moonsight® 2020
        </Typography>
        <Typography variant="overline" style={{ fontSize: "0.688rem" }}>
          EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™
        </Typography>
        <Typography variant="overline" style={{ fontSize: "0.688rem" }}>
          TERMS, PRIVACY POLICY
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
