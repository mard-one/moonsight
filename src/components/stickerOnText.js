import { Typography } from "@material-ui/core"
import React from "react"

const StickerOnText = ({
  children,
  bgColor,
  tiltDeg,
  text,
  leftText,
  leftSVG,
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          backdropFilter: "blur(5px)",
          backgroundColor: bgColor || "rgba(80, 77, 252, 0.68)",
          borderRadius: "40px",
          transformOrigin: "0% 50%",
          transform:
            (tiltDeg ? `rotate(${tiltDeg})` : "rotate(-4.73deg)") +
            " translateX(-50%)",
          display: "inline-block",
          padding: "11px 32px",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: "min(36px ,0.8333em)", lineHeight: 1 }}
        >
          <span style={{ verticalAlign: "middle" }}>{leftText}</span>{" "}
          <span>{leftSVG && <img src={leftSVG} alt="alt text" />}</span> {text}
        </Typography>
      </div>
      <div
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default StickerOnText
