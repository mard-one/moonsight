import React, { useEffect, useRef, useState } from "react"

import styled from "styled-components"

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
    z-index: 100;
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
          size: parseInt(member.size.tablet) / 2,
          posX: member.posX.mobile,
          posY: parseInt(member.posY.mobile),
          img: member.img,
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

  const handleMouseEnter = () => {
    rAFIndex = requestAnimationFrame(update)
  }
  const handleMouseLeave = () => {
    cancelAnimationFrame(rAFIndex)
  }
  const handleMouseMove = e => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
  }
  const handleMouseOver = e => {
    showToolTip.current = true
    console.log("mouseover")
    setTooltipText(e.target.alt)
  }
  const handleMouseOut = e => {
    console.log("mouseout")
    showToolTip.current = false
  }

  const update = () => {
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
          height: 970,
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: -360,
          overflowX: "hidden",
          overflowY: "visible",
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
              width: shape.size,
              height: shape.size,
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
