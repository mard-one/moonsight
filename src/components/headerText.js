import { Grid, Typography } from "@material-ui/core"
import React from "react"
import Margin from "./margin"

const HeaderText = ({ children, overline, style }) => {
  return (
    <Margin as="header" tmd={200} tsm={100} txs={20}>
      <Typography variant="overline">{overline}</Typography>
      <Typography variant="h1" style={{ marginTop: "10px", ...style }}>
        {children}
      </Typography>
    </Margin>
  )
}

export default HeaderText
