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

const Image = styled.img`
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  animation: ${show} 10s linear infinite;
  animation-play-state: ${props => {
    console.log("props.isAnyElemHovered", props.isAnyElemHovered)
    return props.isAnyElemHovered ? "paused;" : "running;"
  }}
  ${props => {
    if (!props.hovered && props.isAnyElemHovered) {
      return "filter: brightness(0.7);"
    }
    console.log("props", props)
  }}
  &:hover {
    transform: scale(1.3);
  }
`

const Team = ({ teamMembers }) => {
  const canvasRef = useRef(null)
  const [hoveredElem, setHoveredElem] = useState("")
  const [shapes, setShapes] = useState([])
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

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])
  return (
    <div
      ref={canvasRef}
      style={{
        position: "relative",
        width: "100vw",
        height: 800,
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: -360,
      }}
    >
      {shapes.map(shape => (
        <Image
          hovered={hoveredElem === shape.name}
          isAnyElemHovered={!!hoveredElem}
          key={shape.name}
          src={shape.img}
          alt="sss"
          style={{
            position: "absolute",
            left: shape.posX,
            top: shape.posY,
            width: shape.size * 2,
            height: shape.size * 2,
          }}
          onMouseOver={() => setHoveredElem(shape.name)}
          onMouseEnter={() => setHoveredElem(shape.name)}
          onMouseOut={() => setHoveredElem("")}
          onMouseLeave={() => setHoveredElem("")}
        />
      ))}
    </div>
  )
}

export default Team
