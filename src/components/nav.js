import { Container, useMediaQuery } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import Button from "./button"
import navStyles from "./nav.module.css"

const Burger = () => {
  return (
    <span
      style={{
        display: " block",
        width: " 33px",
        height: " 4px",
        marginBottom: " 5px",
        position: " relative",
        background: "#cdcdcd",
        borderRadius: "3px",
      }}
    ></span>
  )
}

const Nav = () => {
  const webUp = useMediaQuery("(min-width: 960px)")
  return webUp ? (
    <Container maxWidth="lg">
      <nav className={navStyles.nav}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={navStyles.links}>
          <Link to="/work" activeClassName="currentPage">Work</Link>
          <Link to="/about" activeClassName="currentPage">About Us</Link>
          <Link to="/career" activeClassName="currentPage">We are Hiring</Link>
          <Link to="/contact" activeClassName="currentPage">Contact Us</Link>
        </div>
        <Button>Write Us Something</Button>
      </nav>
    </Container>
  ) : (
    <Container>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 55,
          paddingBottom: 55,
        }}
      >
        <img src={logo} alt="logo" />
        <span>
          <Burger />
          <Burger />
          <Burger />
        </span>
      </nav>
    </Container>
  )
}

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
