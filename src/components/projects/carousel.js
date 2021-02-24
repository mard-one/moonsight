import React, { useEffect, useRef } from "react"

import styled from "styled-components"

const Container = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  will-change: transform;
  user-drag: none;
  pointer-events: none;
  & * {
    user-select: none;
    user-drag: none;
    cursor: none;
  }
`

const Carousel = ({ children }) => {
  let pressed = false
  let velX = 0
  let position = 0
  let width = 0
  let parentWidth = 0
  const ref = useRef()
  const parentRef = useRef()
  const tranformIfInsideBoundary = movementX => {
    let newPosition = position + movementX * 3
    if (newPosition <= 0 && newPosition + -parentWidth >= -width) {
      ref.current.style.transform = `translateX(${newPosition}px)`
      // console.log("in between")
      position = newPosition
    } else if (newPosition >= 0 && newPosition + -parentWidth >= -width) {
      ref.current.style.transform = `translateX(${0}px)`
      position = 0
      // console.log("out left")
    } else if (newPosition <= 0 && newPosition + -parentWidth <= -width) {
      ref.current.style.transform = `translateX(${-width + parentWidth}px)`
      position = -width + parentWidth
      // console.log("out right")
    }
  }
  useEffect(() => {
    if (ref.current && parentRef.current) {
      ref.current.style.transform = `translateX(${position.x}px)`
      width = ref.current.getBoundingClientRect().width
      parentWidth = parentRef.current.getBoundingClientRect().width
    }
  }, [parentRef.current, ref.current])
  const onMouseMove = event => {
    if (pressed) {
      velX = event.movementX
      tranformIfInsideBoundary(event.movementX)
      // beginMomentumTracking()
    }
  }
  const onMouseUp = event => {
    pressed = false
    beginMomentumTracking()
  }
  const onMouseDown = event => {
    pressed = true
    cancelMomentumTracking()
  }
  var momentumID

  function beginMomentumTracking() {
    cancelMomentumTracking()
    momentumID = requestAnimationFrame(momentumLoop)
  }
  function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID)
  }
  function momentumLoop() {
    tranformIfInsideBoundary(velX)
    velX = velX * 0.95
    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop)
    }
  }

  return (
    <div
      ref={parentRef}
      style={{
        overflowX: "hidden",
        userSelect: "none",
      }}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <Container ref={ref}>{children}</Container>
    </div>
  )
}

export default Carousel
