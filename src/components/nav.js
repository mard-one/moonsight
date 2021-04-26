import { Container, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import logo from "../images/logo.svg"
import styled, { css, keyframes } from "styled-components"
import Button from "./button"
import {
  StyledRayWrapper,
  StyledRay,
  StyledSheet,
  StyledSphere,
} from "../pages/index"
import { BgDots } from "../layout"

const Badge = styled.span`
  position: absolute;
  padding: 4px 7px;
  border-radius: 7px;
  font-size: 0.75rem;
  line-height: 1.15;
  color: #f2f3f1;
  white-space: nowrap;
`
const NavBarWeb = styled.nav`
  border-bottom: 1px solid rgba(255, 255, 255, 0.37);
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
const MenuLinks = styled.ul`
  color: white;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0px 5%;
`
const traceIn = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`
const traceOut = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`
const MenuLink = styled.li`
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
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

const NavBarMinimal = styled.nav`
  padding: 32px 0;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`

const NavBarMobile = styled.nav`
  padding: 55px 0;
  position: relative;
  z-index: 101;
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
  }
`
const Burger = styled.div`
  display: none;
  position: relative;
  z-index: 1;
  user-select: none;

  & input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  & span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 3px;
    z-index: 1;
    background-color: white;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  & span:first-child {
    transform-origin: 0% 0%;
  }

  & span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  & input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(1.5px, -1px);
  }

  & input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  & input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -1px);
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
  background-color: black;
`

const CustomLink = ({ title, link, startAnimation, children, style }) => {
  return (
    <MenuLink startAnimation={startAnimation} style={style}>
      <Link to={link} activeClassName="active">
        {title}
      </Link>
      {children}
    </MenuLink>
  )
}

const Nav = ({ navWithBackBtn }) => {
  const [startAnimation, setStartAnimation] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [animateCurtain, setAnimateCurtain] = useState(false)
  useEffect(() => {
    setStartAnimation(true)
    return () => {
      setAnimateCurtain(true)
      document.body.style.overflow = "unset"
      document.body.style.width = "unset"
      document.body.style.height = "unset"
    }
  }, [])
  const handleMobileMenuClick = () => {
    setAnimateCurtain(true)
    clearTimeout(timeout)
    if (mobileMenuOpen) {
      console.log("mobileMenuOpen", true)
      document.body.style.overflow = "unset"
      document.body.style.width = "unset"
      document.body.style.height = "unset"
    } else {
      console.log("mobileMenuOpen", false)
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
      {navWithBackBtn ? (
        <NavBarMinimal>
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
            <Button as={Link} to="/contact">
              Want Something Like This?
            </Button>
          </div>

          <div style={{ marginTop: 32 }}>
            <Button onClick={() => window.history.back()}>
              &#8592; &nbsp;Go Back
            </Button>
          </div>
        </NavBarMinimal>
      ) : (
        <NavBarWeb>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <MenuLinks>
            <CustomLink
              startAnimation={startAnimation}
              title="Work"
              link="/work"
              style={{ width: 70 }}
            >
              <Badge
                style={{ background: "#0085FF", bottom: "100%", left: 40 }}
              >
                +1 new
              </Badge>
            </CustomLink>
            <CustomLink
              startAnimation={startAnimation}
              title="About Us"
              link="/about"
            />
            <CustomLink
              startAnimation={startAnimation}
              title="We are Hiring"
              link="/career"
              style={{ width: 70, whiteSpace: "nowrap" }}
            >
              <Badge
                style={{ background: "#FB4646", bottom: "100%", left: 100 }}
              >
                Constantly
              </Badge>
            </CustomLink>
          </MenuLinks>

          <Button as={Link} to="/contact">
            Write Us Something
          </Button>
        </NavBarWeb>
      )}
      <NavBarMobile>
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
          <Burger>
            <input type="checkbox" onClick={handleMobileMenuClick} />
            <span />
            <span />
            <span />
          </Burger>
        </div>
        {navWithBackBtn && (
          <div style={{ marginTop: 32 }}>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        )}
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
            height: "calc(100vh - 159px)",
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-end",
          }}
        >
          <MobileMenuBG>
            <BgDots />
            <StyledRayWrapper>
              <StyledRay style={{ borderRadius: "50%" }}>
                <StyledSheet />
              </StyledRay>
            </StyledRayWrapper>
            <StyledSphere style={{ bottom: 80 }} />
          </MobileMenuBG>
          <div style={{ zIndex: 10 }}>
            <div style={{ padding: "11px 0" }}>
              <Link
                to="/work"
                style={{
                  fontSize: "2.25rem",
                  lineHeight: 1.15,
                  position: "relative",
                }}
              >
                Work
                <Badge
                  style={{
                    background: "#0085FF",
                    bottom: "100%",
                    left: "100%",
                  }}
                >
                  +1 new
                </Badge>
              </Link>
            </div>
            <div style={{ padding: "11px 0" }}>
              <Link
                to="/about"
                style={{ fontSize: "2.25rem", lineHeight: 1.15 }}
              >
                About us
              </Link>
            </div>
            <div style={{ padding: "11px 0" }}>
              <Link
                to="/career"
                style={{
                  fontSize: "2.25rem",
                  lineHeight: 1.15,
                  position: "relative",
                }}
              >
                We are Hiring
                <Badge
                  style={{
                    background: "#FB4646",
                    bottom: "100%",
                    left: "100%",
                  }}
                >
                  Constantly
                </Badge>
              </Link>
            </div>
            <Button as={Link} to="/contact" style={{ margin: "34px 0" }}>
              Write Us Something
            </Button>
          </div>
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
              <span style={{ fontSize: 11 }}>Moonsight® 2020</span>
              <span style={{ fontSize: 11 }}>20-21</span>
            </Container>
          </footer>
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
