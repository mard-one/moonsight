import { Grid, Typography } from "@material-ui/core"
import React from "react"
import Button from "../components/button"
import Divider from "../components/divider"
import Margin from "../components/margin"
import Layout from "."
import { Fragment } from "react"
import { graphql } from "gatsby"

const OpenPositions = ({ data }) => {
  const { title, desc, expectations, requirement } = data.mdx.frontmatter
  return (
    <Layout hideCTA>
      <Margin as="header" tmd={80} tsm={1} txs={1}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Typography variant="overline">INTERNATIONAL opening</Typography>
            <Typography variant="h1" style={{ marginTop: "10px" }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Margin bmd={28} bxs={1} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">{desc}</Typography>
          </Grid>
        </Grid>
        <Margin bmd={200} bxs={1} />
      </Margin>
      <Margin as="section" bmd={200} bxs={1}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Divider
              leftText="OUR EXPECTATIONS"
              middleText=""
              rightText="001"
            />
            <Margin bmd={50} bxs={1} />
            {expectations.map((expectation, i) => {
              return (
                <Fragment key={"expectation" + i}>
                  <Typography variant="body1">{expectation}</Typography>
                  <Margin bmd={32} bxs={1} />
                </Fragment>
              )
            })}
          </Grid>
        </Grid>
      </Margin>
      <Margin as="section" bmd={300} bxs={1}>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6}>
            <Divider
              leftText="What do we need from you?"
              middleText=""
              rightText="002"
            />
            <Margin bmd={32} bxs={1} />

            <Typography variant="body1" style={{ color: "#c4c4c4" }}>
              {requirement}
            </Typography>
            <Margin bmd={50} bxs={1} />
            <Button>Telegram</Button>
            <Button style={{ margin: "0 16px" }}>Instagram</Button>
            <Button>Email, but...</Button>
          </Grid>
        </Grid>
      </Margin>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        desc
        expectations
        requirement
      }
    }
  }
`

export default OpenPositions
