import React from "react"
import Button from "./button"
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import Margin from "./margin"
import { Link } from "gatsby"

const Cta = ({ ctaText = "Have a project in mind? Let's get to work." }) => {
  const tabletUp = useMediaQuery("(min-width: 600px)")
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
        <Grid item xs={12} sm={8}>
          <Typography variant="h1" align="center">
            {ctaText}
          </Typography>
          <Margin bsm={56} bxs={24} />
          <Button
            as={Link}
            to="/contact"
            style={{ transform: "translateX(-50%)", left: "50%" }}
          >
            Create Something Together
          </Button>
        </Grid>
      </Grid>
    </Margin>
  )
}

export default Cta
