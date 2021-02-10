import { Typography } from "@material-ui/core"
import React from "react"

const HeaderText = ({ children, overline, style }) => {
  return (
    <>
      <Typography variant="overline">{overline}</Typography>
      <Typography variant="h1" style={{ marginTop: "10px", width: "50%", ...style }}>
        {children}
      </Typography>{" "}
    </>
  )
}

export default HeaderText
