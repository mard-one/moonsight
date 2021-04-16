import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import Button from "../button"
import Margin from "../margin"
import Nav from "../nav"
import Img from "gatsby-image"
import styled from "styled-components"

const HeaderTitle = styled(Typography)`
  font-size: 1.125rem;
  margin-bottom: 8px;
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 0.875rem;
  }
`
const ProjectCartegories = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`
const CreatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => props.theme.breakpoints.down("xs")} {
    flex-flow: row-reverse;
    margin-top: 10px;
    & p {
      text-align: left;
    }
  }
`
const CreatorImage = styled.div`
  margin-left: 24px;
  border-radius: 100%;
  overflow: hidden;
  height: 80px;
  width: 80px;
  ${props => props.theme.breakpoints.down("xs")} {
    margin-left: unset;
    margin-right: 24px;
  }
`

const Header = ({
  mainCategory = "",
  name = "",
  allCategories = [],
  madeByName = "",
  madeByImg = {},
  bgImg = {},
}) => {
  return (
    <header
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Grid
        container
        justify="space-between"
        direction="column"
        style={{ height: "100%" }}
      >
        <Nav navWithBackBtn />
        <Container>
          <Margin bsm={80} bxs={40}>
            <Grid item container justify="space-between" alignItems="flex-end">
              <Grid item xs={12} sm={5}>
                <HeaderTitle>Our work / {mainCategory}</HeaderTitle>
                <Typography variant="h1">{name}</Typography>
                <Margin bxs={10} bsm={24} />
                <ProjectCartegories>
                  {allCategories.map(category => (
                    <Button
                      key={category}
                      as="span"
                      notSelectable
                      style={{ marginRight: 16 }}
                    >
                      {category}
                    </Button>
                  ))}
                </ProjectCartegories>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreatorContainer>
                  <div>
                    <Typography variant="overline" align="right">
                      Made possible by
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      style={{ marginTop: 8 }}
                    >
                      {madeByName}
                    </Typography>
                  </div>
                  <CreatorImage>
                    <Img fixed={madeByImg} />
                  </CreatorImage>
                </CreatorContainer>
              </Grid>
            </Grid>
          </Margin>
        </Container>
      </Grid>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
      >
        <Img fluid={bgImg} style={{ height: "100%", zIndex: -1 }} />
      </div>
    </header>
  )
}

export default Header
