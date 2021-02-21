import { Typography } from "@material-ui/core"
import React from "react"

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
      <Typography
        variant="body1"
        style={{
          marginTop: 20,
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "1.375rem",
          lineHeight: "1.4545",
        }}
      >
        {children}
      </Typography>
    </div>
  )
}

export default Paragraph
