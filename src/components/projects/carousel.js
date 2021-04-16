import { Container, Hidden } from "@material-ui/core"
import React, { useEffect, useRef } from "react"

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

const StyledCarousel = styled.div`
  user-select: none;
  &:hover {
    > ${StyledCarouselContainer} {
      will-change: transform;
    }
  }
`
const StyledCarouselMobile = styled.div`
  user-select: none;
`

const Carousel = ({ children, style }) => {
  const pressed = useRef(false)
  const velX = useRef(0)
  const position = useRef(0)
  const width = useRef(0)
  const parentWidth = useRef(0)
  const rAFIndex = useRef(0)
  const ref = useRef()
  const parentRef = useRef()
  const update = () => {
    ref.current.style.transform = `translateX(${position.current}px)`
    if (pressed.current) {
      rAFIndex.current = requestAnimationFrame(update)
    } else if (Math.abs(velX) > 0.5) {
      velX.current = velX.current * 0.95
      rAFIndex.current = requestAnimationFrame(update)
      updatePositionIfWithinBoundary()
    }
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
  const onMouseMove = event => {
    if (pressed.current) {
      velX.current = event.movementX * 3
      updatePositionIfWithinBoundary()
    }
  }
  const onMouseUp = event => {
    pressed.current = false
  }
  const onMouseDown = event => {
    pressed.current = true
    cancelAnimationFrame(rAFIndex.current)
    rAFIndex.current = requestAnimationFrame(update)
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
          }}
        >
          <Container maxWidth="lg">
            <>
              <StyledCarousel
                ref={parentRef}
                // onTouchStart={onMouseDown}
                // onTouchEnd={onMouseUp}
                // onTouchCancel={onMouseUp}
                // onTouchMove={onMouseMove}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
              >
                <StyledCarouselContainer ref={ref}>
                  {children}
                </StyledCarouselContainer>
              </StyledCarousel>
            </>
          </Container>
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
