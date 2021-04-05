import React from "react"
import styled from "styled-components"

const RayGrad = styled.div`
  background-image: radial-gradient(closest-side, transparent, black 100%),
    linear-gradient(
      314deg,
      rgb(235 117 131 / 50%) 7.05%,
      rgb(167 108 194 / 50%) 51.72%,
      rgb(131 85 230 / 50%) 100%
    );
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -2;
`

const Ray = ({ style, className, children }) => {
  return (
    <RayGrad style={style} className={className}>
      {children}
    </RayGrad>
  )
}

export default Ray
