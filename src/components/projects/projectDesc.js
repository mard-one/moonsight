import { Typography } from "@material-ui/core"
import React from "react"
import Button from "../button"
import Margin from "../margin"

const ProjectDesc = ({
  features = [],
  websiteLink,
  challengeHighlight,
  children,
}) => {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <Typography variant="h3">{children}</Typography>
      <Margin bxs={40} bsm={40} />
      <ul>
        {features.map(feature => (
          <li key={feature}>
            <Typography variant="overline" style={{ lineHeight: 2 }}>
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
      {websiteLink && (
        <>
          <Margin bxs={40} bsm={40} />
          <Button href={websiteLink} target="_blank">
            Visit Website
          </Button>
        </>
      )}
      {challengeHighlight && (
        <>
          <Margin bxs={200} bsm={200} />
          <Typography variant="h3">{challengeHighlight}</Typography>
        </>
      )}
    </div>
  )
}

export default ProjectDesc
