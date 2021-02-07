import React from "react"
import Typography from "./typography"
import Button from "./button"

const Cta = ({ ctaText = "Have a project in mind? Let's get to work." }) => {
  return (
    <div style={{ margin: "200px auto", width: '70%' }}>
      <Typography
        variant="h1"
        style={{ textAlign: "center", marginBottom: "56px" }}
      >
        {ctaText}
      </Typography>
      <Button style={{ margin: "0 auto", display: "block" }}>Create Something Together</Button>
    </div>
  )
}

export default Cta
