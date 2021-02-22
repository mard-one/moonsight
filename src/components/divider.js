import { Typography } from "@material-ui/core"
import React from "react"

import styled from "styled-components"

const MiddleText = styled(Typography)`
  display: initial;
  ${props => props.theme.breakpoints.down("xs")} {
    display: none;
  }
`

const Divider = ({ leftText, middleText = "Section #", rightText, style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderTop: "1px solid #FFFFFF",
        ...style,
      }}
    >
      <Typography variant="overline" style={{ lineHeight: "2em" }}>
        {leftText}
      </Typography>
      {middleText && (
        <MiddleText
          variant="overline"
          style={{ lineHeight: "2em", flexBasis: "30%" }}
        >
          {middleText}
        </MiddleText>
      )}
      <Typography variant="overline" style={{ lineHeight: "2em" }}>
        {rightText}
      </Typography>
    </div>
  )
}

export default Divider
