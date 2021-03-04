import React, { useEffect, useRef } from "react"

const getBezierXYatT = (startPt, controlPt1, controlPt2, endPt, T) => {
  var x =
    Math.pow(1 - T, 3) * startPt.x +
    3 * Math.pow(1 - T, 2) * T * controlPt1.x +
    3 * (1 - T) * Math.pow(T, 2) * controlPt2.x +
    Math.pow(T, 3) * endPt.x
  var y =
    Math.pow(1 - T, 3) * startPt.y +
    3 * Math.pow(1 - T, 2) * T * controlPt1.y +
    3 * (1 - T) * Math.pow(T, 2) * controlPt2.y +
    Math.pow(T, 3) * endPt.y
  return { x: x, y: y }
}
// const randomColor = () => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16)
// }

const Team = ({ teamMembers }) => {
  const canvasRef = useRef(null)
  const shapes = [...teamMembers] // TODO: refactor
  let canvasWidth = 0
  let canvasHeight = 0
  const mouse = { x: undefined, y: undefined }

  window.addEventListener("resize", resizeCanvas)

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    // const ctx = canvas.getContext("2d")
    const { width, height } = canvas.getBoundingClientRect()
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

  const initialDraw = ctx => {
    var startPoint = { x: 0, y: 0 }
    var controlPoint1 = {
      x: (8 / 18) * canvasWidth,
      y: (12 / 10) * canvasHeight,
    }
    var controlPoint2 = { x: (10 / 18) * canvasWidth, y: 0 }
    var endPoint = { x: canvasWidth, y: canvasHeight }

    console.log("shapes", shapes)
    console.log("shapes.length", shapes.length)
    for (var i = 0; i < shapes.length; i += 1) {
      var point = getBezierXYatT(
        startPoint,
        controlPoint1,
        controlPoint2,
        endPoint,
        i / shapes.length
      )

      drawCircle({
        ctx,
        pointX: point.x,
        pointY: point.y,
        shape: shapes[i],
        deviation: {
          x: shapes[i].deviationX,
          y: shapes[i].deviationY,
        },
      })
    }
  }

  const drawCircle = ({
    ctx,
    pointX,
    pointY,
    color,
    shape,
    deviation = { x: 0, y: 0 },
  }) => {
    const { radius } = shape
    ctx.beginPath()
    ctx.arc(pointX + deviation.x, pointY + deviation.x, radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
    shape["x"] = pointX + deviation.x
    shape["y"] = pointY + deviation.y
  }


  const draw = ctx => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    for (var i = 0; i < shapes.length; i++) {
      ctx.beginPath()
      ctx.arc(shapes[i].x, shapes[i].y, shapes[i].radius, 0, Math.PI * 2)
      let color
      if (ctx.isPointInPath(mouse.x, mouse.y)) {
        console.log("hovered")
        color = "coral"
      } else {
        color = "aquamarine"
      }
      drawCircle({
        ctx,
        pointX: shapes[i].x,
        pointY: shapes[i].y,
        shape: shapes[i],
        color,
      })
    }
  }

  const handleMouseMove = e => {
    const { offsetX, offsetY } = e.nativeEvent
    mouse.x = offsetX
    mouse.y = offsetY
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    resizeCanvas()
    initialDraw(context)
    let animationFrameId

    const render = () => {
      draw(context)
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
