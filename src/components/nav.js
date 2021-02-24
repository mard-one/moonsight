import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import logo from "../images/logo.svg"
import styled, { css, keyframes } from "styled-components"
import Button from "./button"

const traceIn = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`
const traceOut = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => {
    console.log("props", props)
    console.log("!props.navWithBackBtn", !props.navWithBackBtn)
    return !props.navWithBackBtn
      ? "1px solid rgba(255, 255, 255, 0.37);"
      : "none;"
  }}
  padding: 32px 0;
  ${props => props.theme.breakpoints.down("sm")} {
    padding: 55px 0;
    border-bottom: none;
  }
`
const MenuLinks = styled.ul`
  color: white;
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0px 5%;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const MenuLink = styled.li`
  & a {
    display: inline-block;
    padding-bottom: 5px;
    padding-top: 5px;
    position: relative;
    overflow: hidden;
  }
  & a.active::after {
    transform: translateX(0%);
    animation: none;
    opacity: 1;
  }
  & a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transition: opacity 1s linear;
    opacity: 0;
    ${props =>
      props.startAnimation
        ? css`
            animation: ${traceOut} 0.25s cubic-bezier(0.28, 0.44, 0.49, 1) 0s
              forwards;
          `
        : "transform: translateX(-100%);"}
  }
  & a:hover::after,
  & a:active::after {
    transition: opacity 0s linear;
    opacity: 1;
    animation: ${traceIn} 0.25s cubic-bezier(0.28, 0.44, 0.49, 1) 0s forwards;
  }
`

const ResponsiveBtn = styled(Button)`
  z-index: 10;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`

const Burger = styled.div`
  display: none;
  & span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    display: block;
  }
`

const CustomLink = ({ title, link, startAnimation }) => {
  return (
    <MenuLink startAnimation={startAnimation}>
      <Link to={link} activeClassName="active">
        {title}
      </Link>
    </MenuLink>
  )
}

const Nav = ({ navWithBackBtn }) => {
  const [startAnimation, setStartAnimation] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    setStartAnimation(true)
  }, [])
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return !mobileMenuOpen ? (
    <Container maxWidth="lg">
      <NavBar navWithBackBtn={navWithBackBtn}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {!navWithBackBtn && (
          <MenuLinks>
            <CustomLink
              startAnimation={startAnimation}
              title="Work"
              link="/work"
            />
            <CustomLink
              startAnimation={startAnimation}
              title="About Us"
              link="/about"
            />
            <CustomLink
              startAnimation={startAnimation}
              title="We are Hiring"
              link="/career"
            />
            <CustomLink
              startAnimation={startAnimation}
              title="Contact Us"
              link="/contact"
            />
          </MenuLinks>
        )}
        <ResponsiveBtn as={Link} to="/contact">
          {!navWithBackBtn ? "Write Us Something" : "Want Something Like This?"}
        </ResponsiveBtn>
        <Burger onClick={handleMobileMenuClick}>
          <span />
          <span />
          <span />
        </Burger>
      </NavBar>
      {navWithBackBtn && (
        <ResponsiveBtn onClick={() => window.history.back()}>
          Go Back
        </ResponsiveBtn>
      )}
    </Container>
  ) : (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg"></Container>
    </div>
  )
}

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
