import { Typography } from "@material-ui/core"
import React from "react"

import styled from "styled-components"

const MainText = styled(Typography)`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.375rem;
  line-height: 2;
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 1.125rem;
    line-height: 1.75rem;
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
    <div
      style={{
        marginBottom: noMarginBottom ? 0 : textAfter ? 100 : 120,
        position: sticky ? "sticky" : "relative",
        top: sticky ? 100 : "unset",
      }}
    >
      <Typography variant="overline">{title}</Typography>
      <MainText variant="body1">{children}</MainText>
    </div>
  )
}

export default Paragraph
