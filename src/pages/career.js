import React from "react"

import Layout from "../layout"
import HeaderText from "../components/headerText"
import Divider from "../components/divider"
import { Container, Grid, Hidden, Typography } from "@material-ui/core"
import Margin from "../components/margin"
import ArrowRight from "../images/right-arrow.svg"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import Ray from "../components/ray"
import Sphere from "../components/shapes/sphere"
import SpiralBallFirst from "../components/shapes/spiralBallFirst"
import SpiralBallSecond from "../components/shapes/spiralBallSecond"
import SpikeCareers from "../components/shapes/spikeCareers"
import RingCareers from "../components/shapes/ringCareers"
import Button from "../components/button"
import Lottie from "lottie-react-web"
import copywriterAnimation from "../images/lottie-animations/Copywriter.json"

export const StyledCurrentOpening = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &:last-of-type {
    border-bottom: 0;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    margin-bottom: 0;
    padding: 27px 0;
    & img {
      margin-top: 8px;
    }
  }
`
const Badge = styled.span`
  position: absolute;
  padding: 4px 7px;
  border-radius: 7px;
  font-size: 12px;
  line-height: 1.15;
  color: #f2f3f1;
  white-space: nowrap;
`

const StyledRayWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
  ${props => props.theme.breakpoints.down("sm")} {
    top: -100px;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    top: 0px;
  }
`
const StyledRay = styled(Ray)`
  position: relative;
  left: 50%;
  transform: translate(calc(-50% + 780px), calc(-50% + 270px));
  background-image: radial-gradient(closest-side, transparent, black 60%),
    linear-gradient(
      314.93deg,
      rgb(235 117 131 / 50%) 7.05%,
      rgb(167 108 194 / 50%) 51.72%,
      rgb(131 85 230 / 50%) 90.25%,
      rgba(97, 0, 141, 0) 97.53%
    );
  background-color: black;
  width: 2400px;
  height: 2400px;
  ${props => props.theme.breakpoints.down("xs")} {
    background-image: radial-gradient(closest-side, transparent, black 100%),
      linear-gradient(
          314.93deg,
          #a49b50 11.55%,
          rgb(235 117 131 / 50%) 26.63%,
          rgb(169 70 185 / 50%) 51.72%,
          rgb(85 230 230 / 50%) 90.25%,
          rgba(97, 0, 141, 0) 97.53%
        )
        black;
    left: 50%;
    transform: translate(-50%);
    // transform: translate(calc(-50% - 140px), calc(-50% + 270px));
    width: 1300px;
    height: 1300px;
    background-position: -140px -270px;
    background-repeat: no-repeat;
  }
`
const StyledSpiralBallFirst = styled(SpiralBallFirst)`
  background-color: #130715;
  border-radius: 50%;
  position: absolute;
  width: 420px;
  height: 420px;
  left: -475px;
  bottom: 345px;
  ${props => props.theme.breakpoints.down("xs")} {
    background-color: unset;
    border-radius: unset;
    width: 195px;
    height: 195px;
    left: unset;
    bottom: unset;
    top: 680px;
    right: calc(50% + 84px);
  }
`
const StyledSpike = styled(SpikeCareers)`
  position: absolute;
  width: 460px;
  height: 450px;
  left: 0px;
  bottom: 440px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 210px;
    height: 210px;
    left: unset;
    bottom: unset;
    top: 700px;
    right: calc(50% - 190px);
  }
`
const StyledRing = styled(RingCareers)`
  position: absolute;
  width: 326px;
  height: 180px;
  left: 545px;
  bottom: 780px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 150px;
    height: 85px;
    left: unset;
    bottom: unset;
    top: 370px;
    right: calc(50% - 15px);
  }
`
const StyledSphere = styled(Sphere)`
  position: absolute;
  width: 416px;
  height: 416px;
  left: 475px;
  bottom: 300px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 190px;
    height: 190px;
    bottom: unset;
    top: 500px;
    left: calc(50% - 170px);
  }
`
const StyledSpiralBallSecond = styled(SpiralBallSecond)`
  position: absolute;
  width: 480px;
  height: 480px;
  left: 910px;
  bottom: 430px;
  ${props => props.theme.breakpoints.down("xs")} {
    width: 220px;
    height: 220px;
    bottom: unset;
    top: 400px;
    left: calc(50% + 40px);
  }
`

const CurrentOpening = ({ remote = true, children, linkTo }) => {
  return (
    <StyledCurrentOpening>
      <Hidden xsDown implementation="css">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            style={{ fontSize: "1.75rem", position: "relative" }}
          >
            {children}
            {remote ? (
              <Badge
                style={{ background: "#FB4646", bottom: "100%", left: "100%" }}
              >
                Remote Opportunity
              </Badge>
            ) : (
              <></>
            )}
          </Typography>
          <Button as="a" href="mailto:hello@moonsight.com" target="_newtab">
            Drop Us Message
          </Button>
        </div>
      </Hidden>
      <Hidden smUp implementation="css">
        <a
          href="mailto:hello@moonsight.com"
          target="_newtab"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            style={{ fontSize: "1.75rem", position: "relative" }}
          >
            {children}
          </Typography>
          <img src={ArrowRight} alt="details" />
        </a>
      </Hidden>
    </StyledCurrentOpening>
  )
}

const Career = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { sourceInstanceName: { eq: "career" } }) {
  //       edges {
  //         node {
  //           childMdx {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //               shortDesc
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const openPositions = data.allFile.edges
  const openPositions = [
    "3D Artist",
    "UX Researcher",
    "Creative Developer",
    "IOS Developer",
    "Android Developer",
    "Animation Guru",
  ]
  return (
    <Layout ctaText="Mind joing Superstar Family? Let’s get to work. ">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <HeaderText overline="Careers/Opportunities">
            Doing your job well and want to be paid the same way?{" "}
          </HeaderText>
        </Grid>
        <Grid item xs={12} style={{ height: 700 }}>
          <StyledRayWrapper>
            <StyledRay>
              <StyledSpiralBallFirst />
              <StyledSpike />
              <StyledRing />
              <StyledSphere rotateDeg={15} />
              <StyledSpiralBallSecond />
            </StyledRay>
          </StyledRayWrapper>
        </Grid>
      </Grid>
      <Margin as="section" bxs={100} bsm={200}>
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
        <Grid
          container
          justify="flex-end"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <Grid item container direction="column" xs={12} md={7}>
            <Hidden smDown implementation="css">
              <Lottie
                style={{
                  width: 1900,
                  height: 1080,
                  position: "absolute",
                  left: "calc(50%)",
                  transform: "translateX(calc(-50% - 10px))",
                  bottom: "calc(100% - 330px)",
                }}
                options={{
                  animationData: copywriterAnimation,
                }}
              />
            </Hidden>
            <Hidden mdUp implementation="css">
              <Grid item xs={12} sm={8}>
                <Typography variant="body1">
                  We all work remotely, so you can enjoy the comfort of your own
                  home and not spend time on unimportant stuff, just work, hard
                  work.
                </Typography>
              </Grid>
            </Hidden>
            <Margin bmd={400} bsm={240} bxs={100} />

            <Divider
              leftText="Current Openings"
              middleText=""
              rightText="002"
              style={{ marginBottom: 20 }}
            />
            {openPositions.map(position => {
              return <CurrentOpening key={position}>{position}</CurrentOpening>
            })}
          </Grid>
        </Grid>
      </Margin>
    </Layout>
  )
}

export default Career
