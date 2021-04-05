import { Typography } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

const StickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  backdrop-filter: blur(5px);
  border-radius: 40px;
  transform-origin: 0% 50%;
  display: inline-block;
  padding: 11px 32px;
  white-space: nowrap;
`

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
      <StickerWrapper
        style={{
          backgroundColor: bgColor || "rgba(80, 77, 252, 0.68)",
          transform:
            (tiltDeg ? `rotate(${tiltDeg})` : "rotate(-4.73deg)") +
            " translateX(-50%)",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: "min(36px ,0.8333em)", lineHeight: 1 }}
        >
          <span style={{ verticalAlign: "middle" }}>{leftText}</span>{" "}
          <span>{leftSVG && <img src={leftSVG} alt="alt text" />}</span> {text}
        </Typography>
      </StickerWrapper>
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
