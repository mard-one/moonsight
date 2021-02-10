import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import styled, { keyframes } from "styled-components"
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.37);
  padding: 2rem 0;
  ${props => props.theme.breakpoints.down("sm")} {
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
    position: relative;
    overflow: hidden;
  }
  & a.active::after {
    transform: translateX(0%);
    animation: none;
  }
  & a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    animation: ${traceOut} 0.25s cubic-bezier(0.28, 0.44, 0.49, 1) 0s forwards;
  }
  & a:hover::after,
  & a:active::after {
    animation: ${traceIn} 0.25s cubic-bezier(0.28, 0.44, 0.49, 1) 0s forwards;
  }
`

const ResponsiveBtn = styled(Button)`
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

const CustomLink = ({ title, link }) => {
  return (
    <MenuLink>
      <Link to={link} activeClassName="active">
        {title}
      </Link>
    </MenuLink>
  )
}

const Nav = () => (
  <Container maxWidth="lg">
    <NavBar>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <MenuLinks>
        <CustomLink title="Work" link="/work" />
        <CustomLink title="About Us" link="/about" />
        <CustomLink title="We are Hiring" link="/career" />
        <CustomLink title="Contact Us" link="/contact" />
      </MenuLinks>
      <ResponsiveBtn>Write Us Something</ResponsiveBtn>
      <Burger>
        <span />
        <span />
        <span />
      </Burger>
    </NavBar>
  </Container>
)

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
