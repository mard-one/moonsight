import React from "react"

import Layout from "../layout"
import HeaderText from "../components/headerText"
import Divider from "../components/divider"
import { Grid, Hidden, Typography } from "@material-ui/core"
import Margin from "../components/margin"
import ArrowRight from "../images/right-arrow.svg"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

export const StyledCurrentOpening = styled.div`
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  & img {
    display: none;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    grid-template-columns: 1fr 20px;
    margin-bottom: 0;
    padding: 27px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    & img {
      display: initial;
      margin-top: 8px;
    }
  }
`

const CurrentOpening = ({ type, children, linkTo }) => {
  return (
    <StyledCurrentOpening>
      <Link to={linkTo}>
        <Typography variant="body1" style={{ fontSize: "1.75rem" }}>
          {type}
        </Typography>
      </Link>
      <Hidden xsDown implementation="css">
        <Typography
          variant="body1"
          style={{ fontSize: "1.125rem", color: "rgba(242, 243, 241, 0.7)" }}
        >
          {children}
        </Typography>
      </Hidden>
      <img src={ArrowRight} alt="details" />
    </StyledCurrentOpening>
  )
}

const Career = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "career" } }) {
        edges {
          node {
            childMdx {
              fields {
                slug
              }
              frontmatter {
                title
                shortDesc
              }
            }
          }
        }
      }
    }
  `)
  const openPositions = data.allFile.edges
  return (
    <Layout ctaText="Mind joing Superstar Family? Let’s get to work. ">
      <HeaderText overline="Careers/Opportunities">
        Doing your job well and want to be paid the same way?{" "}
      </HeaderText>
      <Margin as="section" txs={700} bxs={100} tsm={700} bsm={400}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Divider leftText="why join us?" middleText="" rightText="•" />
            <Margin bsm={80} bxs={40} />
            <Typography variant="h3">
              Looking to join a diverse team of individuals who do great work
              and are also great to work with? We're looking for talented people
              who love solving challenges for the world's best brands.
            </Typography>
          </Grid>
        </Grid>
      </Margin>
      <Margin as="section" bxs={100} bsm={340}>
        <Grid container justify="flex-end">
          <Grid item container direction="column" xs={12} md={7}>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">
                We all work remotely, so you can enjoy the comfort of your own
                home and not spend time on unimportant stuff, just work, hard
                work.
              </Typography>
              <Margin bsm={200} bxs={100} />
            </Grid>
            <Divider
              leftText="Current Openings"
              middleText=""
              rightText="002"
              style={{ marginBottom: 60 }}
            />
            {openPositions.map(({ node: { childMdx } = {} }) => {
              const { title, shortDesc } = childMdx.frontmatter
              return (
                <CurrentOpening
                  key={childMdx.fields.slug}
                  type={title}
                  linkTo={childMdx.fields.slug}
                >
                  {shortDesc}
                </CurrentOpening>
              )
            })}
          </Grid>
        </Grid>
      </Margin>
    </Layout>
  )
}

export default Career
