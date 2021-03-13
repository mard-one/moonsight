import React, { useEffect, useRef, useState } from "react"

import styled from "styled-components"

const Image = styled.img`
  position: relative;
  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.3);
      z-index: 100;
    }
  }
`
const Tooltip = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  background-color: white;
  color: black;
  padding: 15px 26px;
  border-radius: 35px;
  z-index: 100;
`

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 970px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -360px;
  overflow-x: hidden;
  overflow-y: visible;
  z-index: 90;
  &:hover {
    > ${Image}, > ${Image} {
      will-change: transform;
    }
  }
  ${props => props.theme.breakpoints.down("xs")} {
    height: 600px;
    margin-top: -100px;
  }
`

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0;
  // visibility: hidden;
  transition: opacity 0.2s linear;
  pointer-events: none;
`

const Team = ({ teamMembers }) => {
  const canvasRef = useRef(null)
  const tooltipRef = useRef(null)
  const mouse = useRef({ x: null, y: null })
  const [shapes, setShapes] = useState([])
  const imageRefs = useRef([])
  const backdrop = useRef(null)
  const isTouchScreen = useRef("ontouchstart" in document.documentElement)
  let rAFIndex

  const getShapes = ({ width, height }) => {
    let shapes = []
    // console.log("width", width)
    if (width > 960) {
      shapes = teamMembers.map(member => {
        return {
          name: member.name,
          size: parseInt(member.size.web),
          posX: member.posX.web,
          posY: parseInt(member.posY.web),
          img: member.img,
        }
      })
    } else if (width <= 960 && width > 600) {
      shapes = teamMembers.map(member => {
        return {
          name: member.name,
          size: parseInt(member.size.tablet),
          posX: member.posX.tablet,
          posY: parseInt(member.posY.tablet),
          img: member.img,
        }
      })
    } else {
      shapes = teamMembers.map(member => {
        return {
          name: member.name,
          size: parseInt(member.size.mobile),
          posX: member.posX.mobile,
          posY: parseInt(member.posY.mobile),
          img: member.img,
        }
      })
    }

    setShapes(shapes)
    // console.log("shapes", shapes)
  }

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    const { width, height } = canvas.getBoundingClientRect()
    getShapes({ width, height })
  }

  const handleMouseMove = e => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
  }
  const handleMouseOver = e => {
    if (isTouchScreen.current) {
      return false
    }
    backdrop.current.style.opacity = "0.5"
    tooltipRef.current.innerText = e.target.alt
    tooltipRef.current.style.opacity = "1"
    console.log("mouseover")
    rAFIndex = requestAnimationFrame(update)
  }
  const handleMouseOut = e => {
    if (isTouchScreen.current) {
      return false
    }
    console.log("mouseout")
    backdrop.current.style.opacity = "0"
    tooltipRef.current.style.opacity = "0"
    cancelAnimationFrame(rAFIndex)
  }

  const update = () => {
    console.log("update")
    tooltipRef.current.style.transform = `translate(${
      mouse.current.x + 10
    }px, ${mouse.current.y - 20}px)`
    rAFIndex = requestAnimationFrame(update)
  }

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(rAFIndex)
    }
  }, [])
  return (
    <>
      <Container ref={canvasRef} onMouseMove={handleMouseMove}>
        {shapes.map((shape, i) => {
          console.log("rerendered")
          return (
            <Image
              key={shape.name}
              src={shape.img}
              alt={shape.name}
              ref={el => (imageRefs.current[i] = el)}
              style={{
                position: "absolute",
                left: shape.posX,
                top: shape.posY,
                width: shape.size,
                height: shape.size,
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          )
        })}
        <Backdrop ref={backdrop} />
      </Container>
      <Tooltip ref={tooltipRef}></Tooltip>
    </>
  )
}

export default Team
