import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import Button from "./button"
import navStyles from "./nav.module.css"

const Nav = () => (
  <Container maxWidth="lg">
    <nav className={navStyles.nav}>
      <img src={logo} alt="logo" />
      <ul className={navStyles.lists}>
        <li>Work</li>
        <li>About Us</li>
        <li>We are Hiring</li>
        <li>Contact Us</li>
      </ul>
      <Button>Write Us Something</Button>
      {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    </nav>
  </Container>
)

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
