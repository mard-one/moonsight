import React from "react"
import Margin from "../margin"
import Divider from "../divider"

const Section = ({ first, sectionName, clientName, last, children }) => {
  return (
    <section style={{ paddingBottom: last ? 0 : 160 }}>
      <Divider leftText={clientName} rightText={"001"} middleText="" />
      <Margin bxs={first ? 60 : 80} bsm={first ? 160 : 80} />
      {children}
    </section>
  )
}

export default Section
