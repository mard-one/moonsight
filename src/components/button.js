import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all 0.2s ease-in-out;
  padding: 0.875rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  text-decoration: none;
  background: none;
  color: #f2f3f1;
  border: 1px solid #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 1px);
    height: 100%;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    background-color: #fff;
    transition: transform 0.3s cubic-bezier(0.28, 0.44, 0.49, 1);
    z-index: -1;
  }
  &:hover {
    color: #030303;
    border-color: transparent;
  }
  &:hover:before {
    transform: translateZ(0);
  }
`

export default Button
