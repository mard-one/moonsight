import React, { useEffect, useRef } from "react"

import styled from "styled-components"

const Container = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  user-drag: none;
  pointer-events: none;
  & * {
    user-select: none;
    user-drag: none;
    cursor: none;
  }
`

const StyledCarousel = styled.div`
  overflow-x: hidden;
  user-select: none;
  &:hover {
    > ${Container} {
      will-change: transform;
    }
  }
`

const Carousel = ({ children }) => {
  let pressed = false
  let velX = 0
  let position = 0
  let width = 0
  let parentWidth = 0
  let rAFIndex = 0
  const ref = useRef()
  const parentRef = useRef()
  const update = () => {
    // console.log("animate")
    ref.current.style.transform = `translateX(${position}px)`
    // console.log("Math.abs(velX)", Math.abs(velX))
    // console.log("Math.abs(velX) < 0.5", Math.abs(velX) < 0.5)
    // console.log("pressed", pressed)
    if (pressed) {
      rAFIndex = requestAnimationFrame(update)
    } else if (Math.abs(velX) > 0.5) {
      velX = velX * 0.95
      rAFIndex = requestAnimationFrame(update)
      updatePositionIfWithinBoundary()
    }
  }
  useEffect(() => {
    if (ref.current && parentRef.current) {
      ref.current.style.transform = `translateX(${position.x}px)`
      width = ref.current.getBoundingClientRect().width
      parentWidth = parentRef.current.getBoundingClientRect().width
    }
  }, [parentRef.current, ref.current])
  const updatePositionIfWithinBoundary = () => {
    let newPosition = position + velX
    if (newPosition <= 0 && newPosition + -parentWidth >= -width) {
      position = newPosition
    } else if (newPosition >= 0 && newPosition + -parentWidth >= -width) {
      position = 0
    } else if (newPosition <= 0 && newPosition + -parentWidth <= -width) {
      position = -width + parentWidth
    }
  }
  const onMouseMove = event => {
    if (pressed) {
      velX = event.movementX * 3
      updatePositionIfWithinBoundary()
      // tranformIfInsideBoundary(event.movementX)
      // beginMomentumTracking()
    }
  }
  const onMouseUp = event => {
    pressed = false
    // beginMomentumTracking()
  }
  const onMouseDown = event => {
    pressed = true
    // cancelMomentumTracking()
    cancelAnimationFrame(rAFIndex)
    rAFIndex = requestAnimationFrame(update)
  }
  // var momentumID

  // function beginMomentumTracking() {
  //   cancelMomentumTracking()
  //   momentumID = requestAnimationFrame(momentumLoop)
  // }
  // function cancelMomentumTracking() {
  //   cancelAnimationFrame(momentumID)
  // }
  // function momentumLoop() {
  //   tranformIfInsideBoundary(velX)
  //   velX = velX * 0.95
  //   if (Math.abs(velX) > 0.5) {
  //     momentumID = requestAnimationFrame(momentumLoop)
  //   }
  // }

  return (
    <StyledCarousel
      ref={parentRef}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <Container ref={ref}>{children}</Container>
    </StyledCarousel>
  )
}

export default Carousel
