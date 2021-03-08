import React, { useEffect, useRef, useState } from "react"

import styled, { css, keyframes } from "styled-components"

const show = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
`

const Tooltip = styled.div`
  position: fixed;
  width: 100px;
  height: 32px;
  left: 0;
  top: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
`

// animation: ${show} 10s linear infinite;
// animation-play-state: ${props => {
//   console.log("props.isAnyElemHovered", props.isAnyElemHovered)
//   return props.isAnyElemHovered ? "paused;" : "running;"
// }}
// ${props => {
//   if (!props.hovered && props.isAnyElemHovered) {
//     return "filter: brightness(0.7);"
//   }
// }}
const Image = styled.img`
  position: relative;
  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
  &:hover {
    transform: scale(1.3);
  }
`

const Team = ({ teamMembers }) => {
  const canvasRef = useRef(null)
  const tooltipRef = useRef(null)
  const [shapes, setShapes] = useState([])
  const mouse = useRef({ x: null, y: null })
  const showToolTip = useRef(false)
  const [tooltipText, setTooltipText] = useState("")
  let rAFIndex
  const getShapes = ({ width, height }) => {
    let shapes = []
    console.log("width", width)
    if (width > 960) {
      shapes = teamMembers.map(member => {
        const posX = (width * parseInt(member.posX.web)) / 100
        const posY = (height * parseInt(member.posY.web)) / 100
        return {
          name: member.name,
          size: member.size.web,
          posX: posX,
          posY: posY,
          movementBoundary: {
            max: posY + member.movementBoundary,
            min: posY - member.movementBoundary,
          },
          img: member.img,
          isMovingUp: member.isMovingUp,
        }
      })
    } else if (width <= 960 && width > 600) {
      shapes = teamMembers.map(member => {
        const posX = (width * parseInt(member.posX.tablet)) / 100
        const posY = (width * parseInt(member.posY.tablet)) / 100
        return {
          name: member.name,
          size: member.size.tablet,
          posX: posX,
          posY: posY,
          movementBoundary: {
            max: posY + member.movementBoundary,
            min: posY - member.movementBoundary,
          },
          img: member.img,
          isMovingUp: member.isMovingUp,
        }
      })
    } else {
      shapes = teamMembers.map(member => {
        const posX = (width * parseInt(member.posX.mobile)) / 100
        const posY = (width * parseInt(member.posY.mobile)) / 100
        return {
          name: member.name,
          size: member.size.mobile,
          posX: posX,
          posY: posY,
          movementBoundary: {
            max: posY + member.movementBoundary,
            min: posY - member.movementBoundary,
          },
          img: member.img,
          isMovingUp: member.isMovingUp,
        }
      })
    }
    setShapes(shapes)
    console.log("shapes", shapes)
  }
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    const { width, height } = canvas.getBoundingClientRect()
    getShapes({ width, height })
  }
  // console.log("hoveredElem", hoveredElem)
  const handleMouseEnter = () => {
    rAFIndex = requestAnimationFrame(update)
  }
  const handleMouseLeave = () => {
    cancelAnimationFrame(rAFIndex)
  }
  const handleMouseMove = e => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
    // let bounds = canvasRef.current.getBoundingClientRect()
    // let x = e.clientX - bounds.left
    // let y = e.clientY - bounds.top
    // console.log("bounds.left", bounds.left)
    // console.log("e.nativeEvent.clientX", e.nativeEvent.clientX)
    // mouse.x = offsetX
    // mouse.y = offsetY
    // console.log("x", x)
    // console.log("mouse", mouse)
  }
  const handleMouseOver = e => {
    showToolTip.current = true
    console.log("mouseover")
    setTooltipText(e.target.alt)
  }
  const handleMouseOut = e => {
    console.log("mouseout")
    // setHoveredElem("")
    showToolTip.current = false
  }

  const update = () => {
    // console.log("mouse", mouse.current)
    console.log("showToolTip", showToolTip.current)
    if (showToolTip.current) {
      tooltipRef.current.style.opacity = "1"
    } else {
      tooltipRef.current.style.opacity = "0"
    }
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
    }
  }, [])
  return (
    <>
      <div
        ref={canvasRef}
        style={{
          position: "relative",
          width: "100vw",
          height: 800,
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: -360,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {shapes.map(shape => (
          <Image
            key={shape.name}
            src={shape.img}
            alt={shape.name}
            style={{
              position: "absolute",
              left: shape.posX,
              top: shape.posY,
              width: shape.size * 2,
              height: shape.size * 2,
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        ))}
      </div>
      <Tooltip ref={tooltipRef}>{tooltipText}</Tooltip>
    </>
  )
}

export default Team
