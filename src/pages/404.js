import React from "react"

import Layout from "../layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Grid, Typography } from "@material-ui/core"
import styled from "styled-components";

const MainContent = styled(Grid)`
  height: calc(100vh - 115px);
  ${props => props.theme.breakpoints.down("sm")} {
    height: calc(100vh - 160px);
  }
`

const NotFoundPage = () => (
  <Layout hideCTA hideFooter>
    {/* <SEO title="404: Not found" /> */}
    <MainContent
      container
      justify="center"
      alignItems="center"
      align="center"
    >
      <Grid item xs={12} sm={8}>
        <Typography variant="overline">Very Sorry!</Typography>
        <Typography variant="h1" style={{ marginTop: 10, marginBottom: 40 }}>
          We tried to find this page but could not...
        </Typography>
        <Button>Got to the Main Page</Button>
      </Grid>
    </MainContent>
  </Layout>
)

export default NotFoundPage
