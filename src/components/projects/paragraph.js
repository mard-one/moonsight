import { Typography } from "@material-ui/core"
import React from "react"

import styled from "styled-components"

const Container = styled.div`
  margin-bottom: ${({ noMarginBottom, textAfter, sticky }) =>
    noMarginBottom || sticky ? 0 : textAfter ? "80px" : "120px"};
  position: ${props => (props.sticky ? "sticky" : "static")};
  top: ${props => (props.sticky ? "100px" : "unset")};
  ${props => props.theme.breakpoints.down("xs")} {
    margin-bottom: ${({ noMarginBottom, textAfter }) =>
      noMarginBottom ? 0 : textAfter ? "60px" : "60px"};
    position: static;
    top: unset;
  }
`

const Title = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.5;
`
const MainText = styled(Typography)`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.375rem;
  line-height: 1.5;
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 1.125rem;
    line-height: 1.555rem;
  }
`

const Paragraph = ({
  title = "",
  textAfter = false,
  noMarginBottom = false,
  sticky = false,
  children,
}) => {
  return (
    <Container
      textAfter={textAfter}
      noMarginBottom={noMarginBottom}
      sticky={sticky}
    >
      <Title variant="overline">{title}</Title>
      <MainText variant="body1">{children}</MainText>
    </Container>
  )
}

export default Paragraph
