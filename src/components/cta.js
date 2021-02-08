import React from "react"
import Typography from "./typography"
import Button from "./button"
import { Grid, useMediaQuery } from "@material-ui/core"

const Cta = ({ ctaText = "Have a project in mind? Let's get to work." }) => {
  const webUp = useMediaQuery("(min-width: 960px)")
  const tabletUp = useMediaQuery("(min-width: 600px)")
  return (
    <Grid container justify="center" style={{ marginBottom: tabletUp ? 200 : 100 }}>
      <Grid item xs={12} sm={8}>
        <Typography
          variant="h1"
          style={{ textAlign: "center", marginBottom: tabletUp ? 56 : 24 }}
        >
          {ctaText}
        </Typography>
        <Button style={{ margin: "0 auto", display: "block" }}>
          Create Something Together
        </Button>
      </Grid>
    </Grid>
  )
}

export default Cta
