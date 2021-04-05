import { Grid, Typography } from "@material-ui/core"
import React from "react"
import Margin from "./margin"

const HeaderText = ({ children, overline, style }) => {
  return (
    <Margin as="header" tmd={140} tsm={50} txs={10}>
      <Typography variant="overline">{overline}</Typography>
      <Typography variant="h1" style={{ marginTop: "10px", ...style }}>
        {children}
      </Typography>
    </Margin>
  )
}

export default HeaderText
