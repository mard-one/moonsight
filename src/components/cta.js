import React from "react"
import Button from "./button"
import { Grid, Hidden, Typography } from "@material-ui/core"
import Margin from "./margin"
import { Link } from "gatsby"

const Cta = ({ ctaText = "Have a project in mind? Let's get to work." }) => {
  return (
    <Margin
      as="section"
      tmd={300}
      bmd={200}
      tsm={150}
      bsm={150}
      txs={100}
      bxs={100}
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={7}>
          <Hidden mdUp implementation="css">
            <Typography
              variant="overline"
              align="center"
              style={{
                display: "block",
                lineHeight: 2,
                color: "#F2F3F1",
                marginBottom: 8,
              }}
            >
              Hey there! &#x1F44B;
            </Typography>
          </Hidden>
          <Typography variant="h1" align="center">
            {ctaText}
          </Typography>
          <Margin bsm={24} bxs={16} />
          <Hidden smDown implementation="css">
            <Typography
              variant="body1"
              align="center"
              style={{
                fontSize: "1.375rem",
                width: "80%",
                margin: "0 auto",
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              We are very passionate about our job and want to translate it
              toward your next project!
            </Typography>
          </Hidden>
          <Margin bsm={40} bxs={24} />
          <Button
            as={Link}
            to="/contact"
            style={{
              transform: "translateX(-50%)",
              left: "50%",
              borderRadius: "21px",
            }}
          >
            Create Something Together
          </Button>
        </Grid>
      </Grid>
    </Margin>
  )
}

export default Cta
