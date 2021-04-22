import { Container, Hidden } from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"

import styled from "styled-components"

const StyledCarouselContainer = styled.div`
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

const Tooltip = styled.div`
  position: absolute;
  left: -60px;
  top: -60px;
  pointer-events: none;
  transition: opacity 0.2s linear;
  opacity: 0;
  background: transparent;
  transform-origin: center;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 50%;
  color: black;
  z-index: 100;
  & > span {
    transition: opacity 0.1s linear;
    opacity: ${({ pressed }) => (pressed ? "0" : "1")};
  }
  & > .bg {
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background: white;
    transition: all 0.2s linear;
    transform-origin: center;
    transform: ${({ pressed }) => (pressed ? "scale(0.75)" : "scale(1)")};
  }
  & > .arrows {
    width: 75%;
    height: 75%;
    position: absolute;
    & div {
      position: absolute;
      top: calc(50% - 10px);
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      transition: all 0.2s linear;
    }
    & .left {
      left: ${({ pressed }) => (pressed ? "-30px" : "0")};
      border-right: 10px solid white;
    }
    & .right {
      right: ${({ pressed }) => (pressed ? "-30px" : "0")};
      border-left: 10px solid white;
    }
  }
`
const TempTooltip = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  right: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  transition: all 0.2s linear;
  color: black;
  text-transform: uppercase;
  font-weight: 500;
`

const StyledCarousel = styled.div`
  position: relative;
  user-select: none;
  &:hover {
    > ${StyledCarouselContainer} {
      will-change: transform;
    }
    > ${Tooltip} {
      will-change: transform;
    }
  }
`
const StyledCarouselMobile = styled.div`
  user-select: none;
`

const Carousel = ({ children, style }) => {
  const [pressed, setPressed] = useState(false)
  const velX = useRef(0)
  const mouse = useRef({ x: null, y: null })
  const position = useRef(0)
  const width = useRef(0)
  const parentWidth = useRef(0)
  const rAFIndex = useRef(0)
  const ref = useRef()
  const tooltipRef = useRef()
  // const tempTooltipRef = useRef()
  const parentRef = useRef()
  const update = () => {
    // console.log("updated")
    tooltipRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`
    ref.current.style.transform = `translateX(${position.current}px)`
    if (pressed) {
    } else if (Math.abs(velX) > 0.5) {
      velX.current = velX.current * 0.95
      updatePositionIfWithinBoundary()
    }
    rAFIndex.current = requestAnimationFrame(update)
  }
  useEffect(() => {
    if (ref.current && parentRef.current) {
      ref.current.style.transform = `translateX(${position.current.x}px)`
      width.current = ref.current.getBoundingClientRect().width
      parentWidth.current = parentRef.current.getBoundingClientRect().width
    }
  }, [parentRef.current, ref.current])
  const updatePositionIfWithinBoundary = () => {
    let newPosition = position.current + velX.current
    if (
      newPosition <= 0 &&
      newPosition + -parentWidth.current >= -width.current
    ) {
      position.current = newPosition
    } else if (
      newPosition >= 0 &&
      newPosition + -parentWidth.current >= -width.current
    ) {
      position.current = 0
    } else if (
      newPosition <= 0 &&
      newPosition + -parentWidth.current <= -width.current
    ) {
      position.current = -width.current + parentWidth.current
    }
  }
  const onMouseEnter = event => {
    console.log("mouseEnter")
    tooltipRef.current.style.opacity = "1"
    // tempTooltipRef.current.style.opacity = "0"
    cancelAnimationFrame(rAFIndex.current)
    rAFIndex.current = requestAnimationFrame(update)
  }
  const onMouseMove = event => {
    const { offsetY } = event.nativeEvent
    mouse.current = { x: event.clientX, y: offsetY }
    if (pressed) {
      velX.current = event.movementX * 3
      updatePositionIfWithinBoundary()
    }
  }
  const onMouseUp = event => {
    setPressed(false)
  }
  const onMouseDown = event => {
    setPressed(true)
  }

  const onMouseLeave = event => {
    console.log("mouseLeave")
    tooltipRef.current.style.opacity = "0"
    // tempTooltipRef.current.style.opacity = "1"
    cancelAnimationFrame(rAFIndex.current)
  }
  return (
    <>
      <Hidden smDown implementation="css">
        <div
          style={{
            position: "relative",
            width: "100vw",
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            cursor: "none",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          <Container maxWidth="lg">
            <StyledCarousel ref={parentRef}>
              <StyledCarouselContainer ref={ref}>
                {children}
              </StyledCarouselContainer>
            </StyledCarousel>
          </Container>
          <Tooltip ref={tooltipRef} pressed={pressed}>
            <div className="bg"></div>
            <span>Drag</span>
            <div className="arrows">
              <div className="left" />
              <div className="right" />
            </div>
          </Tooltip>
          {/* <TempTooltip ref={tempTooltipRef}>Drag</TempTooltip> */}
        </div>
      </Hidden>
      <Hidden mdUp implementation="css">
        <div
          style={{
            position: "relative",
            width: "100vw",
            left: "50%",
            transform: "translate(-50%)",
            overflow: "hidden",
          }}
        >
          <div style={{ overflow: "scroll" }}>
            <StyledCarouselMobile>
              <StyledCarouselContainer style={{ padding: "0 16px" }}>
                {children}
              </StyledCarouselContainer>
            </StyledCarouselMobile>
          </div>
        </div>
      </Hidden>
    </>
  )
}

export default Carousel
