import React from "react"
import Ray from "../components/ray"
import Sphere from "../components/shapes/sphere"
import Sheet from "../components/shapes/sheet"

const TestPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        transform: "translateX(-50%)",
        width: "100vw",
        overflowX: "hidden",
        zIndex: -2,
      }}
    >
      <Ray
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          top: -1500,
          width: 2200,
          height: 2200,
        }}
      >
        <Sheet
          style={{
            top: "1450px",
            right: "400px",
          }}
        />
      </Ray>
    </div>
  )
}

export default TestPage
