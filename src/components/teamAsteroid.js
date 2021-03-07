import React, { useEffect, useRef } from "react"

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

const Team = ({ teamMembers }) => {
  const canvasRef = useRef(null)
  let shapes = []
  let canvasWidth = 0
  let canvasHeight = 0
  let isMoving = true
  const mouse = { x: undefined, y: undefined }

  const drawCircle = ({ ctx, posX, posY, size, color, img }) => {
    // var imgElem = new Image()
    // imgElem.src = img
    // ctx.globalCompositeOperation = "destination-over"
    // ctx.strokeStyle = "rgba(0, 153, 255, 0.4)"
    ctx.beginPath()
    ctx.arc(posX, posY, size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
    // imgElem.onload = function () {
    //   ctx.drawImage(imgElem, posX - size, posY - size, size * 2, size * 2)
    //   ctx.beginPath()
    //   ctx.arc(posX, posY, size, 0, Math.PI * 2)
    //   ctx.fillStyle = color
    //   ctx.closePath()
    //   ctx.fill()
    // }
  }

  const setShapes = ({ width, height }) => {
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
    console.log("shapes", shapes)
  }

  const setCanvas = ({ canvas, width, height }) => {
    canvasWidth = width
    canvasHeight = height
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window
      canvas.width = width
      // canvas.width = width * ratio
      canvas.height = height
      // canvas.height = height * ratio
      // ctx.scale(ratio, ratio)
      // console.log("ratio",  ratio)
      return true
    }
    return false
  }

  const draw = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    for (var i = 0; i < shapes.length; i++) {
      let { posX, posY, size, img } = shapes[i]
      let color
      if (shapes[i]["isHovered"] === null) {
        color = "#fff"
        // color = "rgba(255, 255, 255, 0)"
      } else if (shapes[i]["isHovered"]) {
        color = "#fff"
        // color = "rgba(255, 255, 255, 0)"
        size += 10
      } else {
        color = "#333"
        // color = "rgba(255, 255, 255, 0.4)"
      }
      drawCircle({ ctx, posX, posY, size, color, img })
    }
  }

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    console.log("canvas", canvas)
    const { width, height } = canvas.getBoundingClientRect()
    setShapes({ width, height })
    setCanvas({ canvas, width, height })
    draw()
  }

  const handleMouseMove = e => {
    const { offsetX, offsetY } = e.nativeEvent
    mouse.x = offsetX
    mouse.y = offsetY
  }

  const move = () => {
    if (isMoving) {
      for (var i = 0; i < shapes.length; i++) {
        if (shapes[i].posY >= shapes[i].movementBoundary.max) {
          shapes[i].isMovingUp = false
        } else if (shapes[i].posY <= shapes[i].movementBoundary.min) {
          shapes[i].isMovingUp = true
        }
        shapes[i].isMovingUp
          ? (shapes[i].posY += 0.15)
          : (shapes[i].posY -= 0.15)
      }
    }
  }

  const isHovered = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let isAnyShapeHovered = false
    for (var i = 0; i < shapes.length; i++) {
      ctx.beginPath()
      ctx.arc(shapes[i].posX, shapes[i].posY, shapes[i].size, 0, Math.PI * 2)
      if (ctx.isPointInPath(mouse.x, mouse.y)) {
        console.log("hovered")
        shapes[i]["isHovered"] = true
        isAnyShapeHovered = true
        isMoving = false
      } else {
        shapes[i]["isHovered"] = false
      }
    }
    if (!isAnyShapeHovered) {
      isMoving = true
      shapes = shapes.map(shape => ({ ...shape, isHovered: null }))
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let animationFrameId

    const render = () => {
      move()
      isHovered()
      draw()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: 800,
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: -360,
      }}
      onMouseMove={handleMouseMove}
    />
  )
}

export default Team
