import React from "react"
import Ray from "../components/ray"
import Sheet from "../components/shapes/sheet"

const TestPage = () => {
  return (
    <div style={{position: 'relative'}}>
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
        <Sheet style={{ zIndex: 3 }} />
      </Ray>
    </div>
  )
}

export default TestPage
