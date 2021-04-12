import React from "react"
import Margin from "../margin"
import Divider from "../divider"

const Section = ({
  first,
  sectionName,
  clientName,
  last,
  children,
  bgColorBright = false,
}) => {
  return (
    <section>
      <Divider leftText={sectionName} rightText={clientName} middleText="" />
      <Margin
        txs={first ? 60 : 40}
        tsm={first ? 160 : 80}
        bxs={last ? 0 : 80}
        bsm={last ? 0 : 160}
      >
        {children}
      </Margin>
    </section>
  )
}

export default Section
