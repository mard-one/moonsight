import React from "react"
import Typography from "./typography"
import Button from "./button"

const Cta = () => {
  return (
    <div style={{margin: '200px 0'}}>
      <Typography
        variant="h1"
        style={{ textAlign: "center", marginBottom: "56px" }}
      >
        Have a project in mind? <br />
        Let's get to work.
      </Typography>
      <Button style={{ margin: "0 auto", display: "block" }}>
        Create Something Together
      </Button>
    </div>
  )
}

export default Cta
