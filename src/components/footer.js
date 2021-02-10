import { Container, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import logoBlack from "../images/logo.svg"

const Footer = () => {
  const webUp = useMediaQuery("(min-width: 960px)")
  const tabletUp = useMediaQuery("(min-width: 600px)")
  // TODO: fix the logo black. Ask Ivan to import or use the same SVG file
  return (
    <footer style={{ backgroundColor: "#F4F4F4", color: "#030303" }}>
      {webUp ? <Container
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
      </Container> : <></>}
      <div
        style={{
          display: "flex",
          flexFlow: webUp ? 'row': "column",
          justifyContent: webUp ? "space-between" : "center",
          padding: webUp ? "24px 100px" : 24,
          backgroundColor: webUp ? "#E8E8E8" : "#111111",
          color: "#5E5E5E",
        }}
      >
        <Typography variant="overline" style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0"  }}>
          Moonsight® 2020
        </Typography>
        <Typography variant="overline" style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0"  }}>
          EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™
        </Typography>
        <Typography variant="overline" style={{ fontSize: "0.688rem", margin: webUp ? 0 : "8px 0"  }}>
          TERMS, PRIVACY POLICY
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
