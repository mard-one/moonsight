import React from "react"
import Typography from "./typography"

const Divider = ({ leftText, middleText = "Section #", rightText }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderTop: "1px solid #FFFFFF",
      }}
    >
      <Typography variant="overline" style={{ lineHeight: "2em" }}>
        {leftText}
      </Typography>
      <Typography
        variant="overline"
        style={{ lineHeight: "2em", flexBasis: "30%" }}
      >
        {middleText}
      </Typography>
      <Typography variant="overline" style={{ lineHeight: "2em" }}>
        {rightText}
      </Typography>
    </div>
  )
}

export default Divider
