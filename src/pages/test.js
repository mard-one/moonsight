import React from "react"
import Ray from "../components/ray"
import Sphere from "../components/shapes/sphere"
import Sheet from "../components/shapes/sheet"

const TestPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#74c749",
        width: "100%",
        height: "720px",
        top: "50px",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "#d0437e",
          height: "500px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            bottom: "0",
          }}
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "coral",
              mixBlendMode: "difference",
              position: "absolute",
              bottom: "0",
              transform: "rotate(45deg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
