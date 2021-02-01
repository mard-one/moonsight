import React from "react"
import buttonStyles from "./button.module.css"

const Button = ({ children }) => {
  return (
    <button
      className={buttonStyles.btn}
    >
      {children}
    </button>
  )
}

export default Button
