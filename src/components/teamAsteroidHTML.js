import React, { useEffect, useRef, useState } from "react"
import teamMember1 from "../images/team/team1.jpg"
import teamMember2 from "../images/team/team2.jpg"
import teamMember3 from "../images/team/team3.jpg"
import teamMember4 from "../images/team/team4.jpg"
import teamMember5 from "../images/team/team5.jpg"
import teamMember6 from "../images/team/team6.jpg"
import teamMember7 from "../images/team/team7.jpg"
import teamMember8 from "../images/team/team8.jpg"
import teamMember9 from "../images/team/team9.jpg"
import teamMember10 from "../images/team/team10.jpg"
import teamMember11 from "../images/team/team11.jpg"
import teamMember12 from "../images/team/team12.jpg"
import teamMember13 from "../images/team/team13.jpg"
import teamMember14 from "../images/team/team14.jpg"
import teamMember15 from "../images/team/team15.jpg"
import teamMember16 from "../images/team/team16.jpg"
import teamMember17 from "../images/team/team17.jpg"
import teamMember18 from "../images/team/team18.jpg"
import teamMember19 from "../images/team/team19.jpg"
import teamMember20 from "../images/team/team20.jpg"
import teamMember21 from "../images/team/team21.jpg"
import teamMember22 from "../images/team/team22.jpg"
import teamMember23 from "../images/team/team23.jpg"
import teamMember24 from "../images/team/team24.jpg"
import teamMember25 from "../images/team/team25.jpg"
import teamMember26 from "../images/team/team26.jpg"

import styled from "styled-components"

const Image = styled.img`
  position: relative;
  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
  backgroundcolor: transparent;
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
  max-width: 2000px;
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

const teamMembers = [
  {
    name: "asdqwezxc1",
    img: teamMember1,
    posY: {
      web: "16",
      tablet: "0",
      mobile: "340",
    },
    posX: {
      web: "-1%",
      tablet: "-1%",
      mobile: "47%",
    },
    size: {
      web: "95",
      tablet: "95",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc2",
    img: teamMember2,
    posY: {
      web: "94",
      tablet: "94",
      mobile: "314",
    },
    posX: {
      web: "4%",
      tablet: "4%",
      mobile: "-3%",
    },
    size: {
      web: "95",
      tablet: "95",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc3",
    img: teamMember3,
    posY: {
      web: "194",
      tablet: "194",
      mobile: "70",
    },
    posX: {
      web: "8%",
      tablet: "8%",
      mobile: "19%",
    },
    size: {
      web: "143",
      tablet: "113",
      mobile: "96",
    },
  },
  {
    name: "asdqwezxc4",
    img: teamMember4,
    posY: {
      web: "102",
      tablet: "102",
      mobile: "220",
    },
    posX: {
      web: "13%",
      tablet: "13%",
      mobile: "83%",
    },
    size: {
      web: "79",
      tablet: "79",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc5",
    img: teamMember5,
    posY: {
      web: "272",
      tablet: "272",
      mobile: "14",
    },
    posX: {
      web: "16%",
      tablet: "15%",
      mobile: "26%",
    },
    size: {
      web: "100",
      tablet: "100",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc6",
    img: teamMember6,
    posY: {
      web: "189",
      tablet: "139",
      mobile: "420",
    },
    posX: {
      web: "17%",
      tablet: "19%",
      mobile: "3%",
    },
    size: {
      web: "77",
      tablet: "77",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc7",
    img: teamMember7,
    posY: {
      web: "339",
      tablet: "339",
      mobile: "177",
    },
    posX: {
      web: "23%",
      tablet: "22%",
      mobile: "25%",
    },
    size: {
      web: "120",
      tablet: "120",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc8",
    img: teamMember8,
    posY: {
      web: "241",
      tablet: "211",
      mobile: "390",
    },
    posX: {
      web: "22%",
      tablet: "25%",
      mobile: "59%",
    },
    size: {
      web: "80",
      tablet: "80",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc9",
    img: teamMember9,
    posY: {
      web: "423",
      tablet: "423",
      mobile: "320",
    },
    posX: {
      web: "27%",
      tablet: "27%",
      mobile: "68%",
    },
    size: {
      web: "100",
      tablet: "100",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc10",
    img: teamMember10,
    posY: {
      web: "321",
      tablet: "231",
      mobile: "330",
    },
    posX: {
      web: "29%",
      tablet: "30%",
      mobile: "11%",
    },
    size: {
      web: "178",
      tablet: "158",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc11",
    img: teamMember11,
    posY: {
      web: "410",
      tablet: "410",
      mobile: "243",
    },
    posX: {
      web: "36%",
      tablet: "36%",
      mobile: "29%",
    },
    size: {
      web: "178",
      tablet: "178",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc12",
    img: teamMember12,
    posY: {
      web: "562",
      tablet: "562",
      mobile: "307",
    },
    posX: {
      web: "44%",
      tablet: "35%",
      mobile: "80%",
    },
    size: {
      web: "130",
      tablet: "130",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc13",
    img: teamMember13,
    posY: {
      web: "334",
      tablet: "244",
      mobile: "235",
    },
    posX: {
      web: "41%",
      tablet: "41%",
      mobile: "53%",
    },
    size: {
      web: "178",
      tablet: "158",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc14",
    img: teamMember14,
    posY: {
      web: "569",
      tablet: "569",
      mobile: "104",
    },
    posX: {
      web: "52%",
      tablet: "48%",
      mobile: "65%",
    },
    size: {
      web: "178",
      tablet: "158",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc15",
    img: teamMember15,
    posY: {
      web: "400",
      tablet: "370",
      mobile: "416",
    },
    posX: {
      web: "49%",
      tablet: "46%",
      mobile: "67%",
    },
    size: {
      web: "152",
      tablet: "152",
      mobile: "96",
    },
  },
  {
    name: "asdqwezxc16",
    img: teamMember16,
    posY: {
      web: "425",
      tablet: "457",
      mobile: "20",
    },
    posX: {
      web: "58%",
      tablet: "55%",
      mobile: "46%",
    },
    size: {
      web: "178",
      tablet: "158",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc17",
    img: teamMember17,
    posY: {
      web: "599",
      tablet: "599",
      mobile: "450",
    },
    posX: {
      web: "66%",
      tablet: "64%",
      mobile: "18%",
    },
    size: {
      web: "80",
      tablet: "80",
      mobile: "100",
    },
  },
  {
    name: "asdqwezxc18",
    img: teamMember18,
    posY: {
      web: "415",
      tablet: "415",
      mobile: "97",
    },
    posX: {
      web: "66%",
      tablet: "66%",
      mobile: "-7%",
    },
    size: {
      web: "178",
      tablet: "158",
      mobile: "110",
    },
  },
  {
    name: "asdqwezxc19",
    img: teamMember19,
    posY: {
      web: "335",
      tablet: "335",
      mobile: "500",
    },
    posX: {
      web: "64%",
      tablet: "64%",
      mobile: "53%",
    },
    size: {
      web: "80",
      tablet: "80",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc20",
    img: teamMember20,
    posY: {
      web: "553",
      tablet: "583",
      mobile: "113",
    },
    posX: {
      web: "72%",
      tablet: "70%",
      mobile: "40%",
    },
    size: {
      web: "106",
      tablet: "106",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc21",
    img: teamMember21,
    posY: {
      web: "533",
      tablet: "533",
      mobile: "24",
    },
    posX: {
      web: "77%",
      tablet: "77%",
      mobile: "6%",
    },
    size: {
      web: "106",
      tablet: "106",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc22",
    img: teamMember22,
    posY: {
      web: "616",
      tablet: "616",
      mobile: "16",
    },
    posX: {
      web: "80%",
      tablet: "80%",
      mobile: "77%",
    },
    size: {
      web: "100",
      tablet: "100",
      mobile: "70",
    },
  },
  {
    name: "asdqwezxc23",
    img: teamMember23,
    posY: {
      web: "645",
      tablet: "625",
      mobile: "420",
    },
    posX: {
      web: "87%",
      tablet: "89%",
      mobile: "42%",
    },
    size: {
      web: "95",
      tablet: "95",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc24",
    img: teamMember24,
    posY: {
      web: "700",
      tablet: "729",
      mobile: "186",
    },
    posX: {
      web: "93%",
      tablet: "83%",
      mobile: "48%",
    },
    size: {
      web: "95",
      tablet: "95",
      mobile: "60",
    },
  },
  {
    name: "asdqwezxc25",
    img: teamMember25,
    posY: {
      web: "817",
      tablet: "807",
      mobile: "226",
    },
    posX: {
      web: "94%",
      tablet: "90%",
      mobile: "4%",
    },
    size: {
      web: "100",
      tablet: "100",
      mobile: "96",
    },
  },
]

const Team = () => {
  const canvasRef = useRef(null)
  const tooltipRef = useRef(null)
  const mouse = useRef({ x: null, y: null })
  const [shapes, setShapes] = useState([])
  const imageRefs = useRef([])
  const backdrop = useRef(null)
  const isTouchScreen = useRef(false)
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
    if (document) {
      isTouchScreen.current = "ontouchstart" in document.documentElement
    }
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
