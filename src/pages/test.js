import React from "react"
import Ray from "../components/ray"
import Sphere from "../components/shapes/sphere"
import Sheet from "../components/shapes/sheet"

const TestPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="bg-dots"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100vh",
        }}
      />
      <Ray style={{ zIndex: 1 }}>
        <Sphere
          style={{
            bottom: "500px",
            right: "500px",
          }}
        />
        {/* <Sheet
          style={{
            bottom: "270px",
            right: "140px",
          }}
        /> */}
      </Ray>
    </div>
  )
}

export default TestPage
