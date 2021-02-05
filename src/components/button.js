import React from "react"
import buttonStyles from "./button.module.css"

const Button = ({ children, style }) => {
  return (
    <button
      className={buttonStyles.btn}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
