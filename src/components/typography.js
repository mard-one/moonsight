import React from "react"

import typographyStyles from "./typography.module.css"

const Typography = ({ variant, style, children }) => {
  const components = {
    h1: {
      tagName: "h1",
      style: typographyStyles.header1,
    },
    h2: {
      tagName: "h2",
      style: typographyStyles.header2,
    },
    h3: {
      tagName: "h3",
      style: typographyStyles.header3,
    },
    p: {
      tagName: "p",
      style: typographyStyles.paragraph,
    },
    overline: {
      tagName: "span",
      style: typographyStyles.overline,
    },
  }


  const selectedComp = components[variant] || components["p"]

  return React.createElement(
    selectedComp.tagName,
    { className: selectedComp.style, style: style },
    children
  )
}

export default Typography
