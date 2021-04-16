import React from "react"
import Ray from "../components/ray"
import Sphere from "../components/shapes/sphere"
import Sheet from "../components/shapes/sheet"
import Layout from "../layout"
import Image from "../components/projects/image"

const TestPage = () => {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <Image
          src="maxim-kashin-architecture-project-page-section-1-carousel-1.jpg"
          alt="maxim kashin illustration 1"
          style={
            {
              width: 1040,
              // display: "inline-table",
              // marginRight: 20,
              // flex: "0 0 auto",
            }
          }
        />
        <div style={{ height: "100px", backgroundColor: "#232" }}>2</div>
        <div style={{ height: "100px", backgroundColor: "#242" }}>3</div>
      </div>
      {/* <div
        style={{
          backgroundColor: "#74c749",
          width: "100%",
          height: "720px",
          top: "50px",
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "#d0437e",
            height: "500px",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              bottom: "0",
            }}
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "coral",
                // mixBlendMode: "color-dodge",
                position: "absolute",
                bottom: "0",
                transform: "rotate(45deg)",
              }}
            ></div>
          </div>
        </div>
      </div> */}
      {/* <div style={{ position: 'relative', height: 1000, backgroundColor: 'chartreuse', transform: 'rotate(0deg)'}}>
        <div style={{position: 'static', height: 500, width: 500, backgroundColor: 'chocolate'}}>
          <div style={{position: 'absolute', height: 300, width: 300, backgroundColor: 'cyan', top: 300}}></div>
        </div>
      </div> */}
      {/* <Ray
        style={{
          width: 1000,
          height: 1000,
          background: `radial-gradient(closest-side, transparent, black),
    linear-gradient(
      179deg,
      rgb(235 117 131 / 50%) 7.05%,
      rgb(167 108 194 / 50%) 51.72%,
      rgb(131 85 230 / 50%) 100%
    );
  background-color: black;`,
        }}
      />
      <Ray
        style={{
          width: 1000,
          height: 1000,
          background: `radial-gradient(closest-side, rgb(235 117 131 / 100%), black)`,
          opacity: 0.5,
          filter: 'blur(100px)',
          marginTop: 400
        }}
      /> */}
      <div
        style={{
          position: "relative",
          height: 200,
          top: 100,
        }}
      >
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          asda
        </div>
      </div>
    </Layout>
  )
}

export default TestPage
