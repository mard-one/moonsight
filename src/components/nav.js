import { Container, Typography } from "@material-ui/core"
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
  border-bottom: ${props =>
    !props.navWithBackBtn ? "1px solid rgba(255, 255, 255, 0.37);" : "none;"}
  padding: 32px 0;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`

const NavBarMobile = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 0;
  position: relative;
  z-index: 101;
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
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

const Btn = styled(Button)`
  z-index: 10;
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
const show = keyframes`
  0% {
  transform: translateX(-100%);
  }

  50% {
  transform: translateX(0);
  }

  to {
  transform: translateX(100%);
  }
`
const Curtain = styled.div`
  transform: translateX(-100%);
  animation: 1.6s cubic-bezier(0.86, 0, 0.07, 1);
  animation-name: ${show};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;
`
const MobileMenuBG = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #030303 url(../../../images/bg_dots.png) center top;
  zindex: 10;
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
  const [animateCurtain, setAnimateCurtain] = useState(false)
  useEffect(() => {
    setStartAnimation(true)
  }, [])
  const handleMobileMenuClick = () => {
    setAnimateCurtain(true)
    clearTimeout(timeout)
    if (mobileMenuOpen) {
      document.body.style.overflow = "unset"
      document.body.style.width = "unset"
      document.body.style.height = "unset"
    } else {
      document.body.style.overflow = "hidden"
      document.body.style.width = "100vw"
      document.body.style.height = "100vh"
    }
    const timeout = setTimeout(() => {
      setMobileMenuOpen(!mobileMenuOpen)
    }, 800)
  }
  return (
    <Container maxWidth="lg">
      <NavBar navWithBackBtn={navWithBackBtn}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <Btn as={Link} to="/contact">
            {!navWithBackBtn
              ? "Write Us Something"
              : "Want Something Like This?"}
          </Btn>
        </div>

        {navWithBackBtn && (
          <div style={{ marginTop: 32 }}>
            <Btn onClick={() => window.history.back()}>Go Back</Btn>
          </div>
        )}
      </NavBar>
      <NavBarMobile>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Burger onClick={handleMobileMenuClick}>
          <span />
          <span />
          <span />
        </Burger>
      </NavBarMobile>
      {animateCurtain && (
        <Curtain
          mobileMenuOpen={mobileMenuOpen}
          onAnimationEnd={() => {
            setAnimateCurtain(false)
          }}
        ></Curtain>
      )}
      {mobileMenuOpen && (
        <div
          style={{
            height: "calc(100vh - 113px)",
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-end",
          }}
        >
          <MobileMenuBG></MobileMenuBG>
          <div style={{ zIndex: 10 }}>
            <ul>
              <li>
                <Link to="/work">
                  <Typography variant="h3" style={{ padding: "11px 0" }}>
                    Work
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Typography variant="h3" style={{ padding: "11px 0" }}>
                    About us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/career">
                  <Typography variant="h3" style={{ padding: "11px 0" }}>
                    We are Hiring
                  </Typography>
                </Link>
              </li>
            </ul>
            <Button style={{ margin: "34px 0" }}>Write Us Something</Button>
            <footer
              style={{
                width: "100vw",
                background: "#2D2A2A",
                color: "#5E5E5E",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: 24,
                paddingBottom: 24,
              }}
            >
              <Container
                maxWidth="lg"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Moonsight® 2020</span>
                <span>20-21</span>
              </Container>
            </footer>
          </div>
        </div>
      )}
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
