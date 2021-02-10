import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../layout"
import Img from "gatsby-image"
import Divider from "../components/divider"
import Button from "../components/button"
import HeaderText from "../components/headerText"
import { Typography } from "@material-ui/core"

const CapabilityDetail = ({ title, list = [] }) => {
  return (
    <div>
      <div
        style={{
          padding: "16px 0",
          borderBottom: "2px solid #FFFFFF",
          minWidth: "275px",
          marginBottom: "24px",
        }}
      >
        <Typography variant="overline">{title}</Typography>
      </div>
      <ul>
        {list.map(c => (
          <li
            key={c}
            style={{ fontSize: "1rem", lineHeight: 2.5, opacity: 0.8 }}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}
const Influence = ({ platform, views, viewType }) => {
  return (
    <div>
      <Button>{platform}</Button>
      <Typography
        variant="h1"
        style={{ marginTop: "52px", marginBottom: "6px" }}
      >
        {views}
      </Typography>
      <Typography style={{ fontSize: "1.125rem", lineHeight: 1.55 }}>
        {viewType}
      </Typography>
    </div>
  )
}
const RecognitionFlag = ({ color, bgColor, text, number, lastElem }) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: !lastElem ? "16px" : "unset",
      }}
    >
      <div
        style={{
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,50% 80%,0% 100%)",
          backgroundColor: bgColor,
          color: color,
          width: "46px",
          height: "80px",
          textAlign: "center",
          display: "flex",
          flexFlow: "column",
          justifyContent: "flex-end",
          paddingBottom: "20px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="p" style={{ fontWeight: 600 }}>
          {text}
        </Typography>
      </div>
      <Typography style={{ textAlign: "center", fontSize: "1.125rem" }}>
        {number}
      </Typography>
    </div>
  )
}
const RecognizedByOrganization = ({ logo, name }) => {
  const PlusSign = ({ x, y }) => (
    <div style={{ position: "absolute", left: x, top: y }}>
      <div
        style={{
          position: "absolute",
          top: "-0.5px",
          left: 0,
          width: "15px",
          height: "2px",
          backgroundColor: "white",
          transform: "translate(-50%, 0px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-0.5px",
          left: "0px",
          width: "15px",
          height: "2px",
          backgroundColor: "white",
          transform: "rotate(90deg) translate(-50%, 0px)",
          transformOrigin: "0 1px",
        }}
      />
    </div>
  )
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlusSign x={0} y={0} />
      <PlusSign x={0} y={"100%"} />
      <PlusSign x={"100%"} y={0} />
      <PlusSign x={"100%"} y={"100%"} />
      <img src={logo} alt={name} />
    </div>
  )
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "work-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recognizedByJson {
        recognizedByOrganizations {
          logo {
            publicURL
          }
          name
        }
      }
      platformsJson {
        platforms {
          bgColor
          color
          number
          text
        }
      }
      influencesJson {
        influences {
          platform
          viewType
          views
        }
      }
      capabilitiesJson {
        capabilities {
          list
          title
        }
      }
    }
  `)
  console.log("data", data)
  const organizations = data.recognizedByJson.recognizedByOrganizations
  const platforms = data.platformsJson.platforms
  const influences = data.influencesJson.influences
  const capabilities = data.capabilitiesJson.capabilities
  return (
    <Layout>
      <header style={{ marginTop: "140px", marginBottom: "100px" }}>
        <HeaderText overline="About Moonsight®">
          We are a unique team of handpicked designers and developers focused on
          refining your digital products.
        </HeaderText>
      </header>
      <Img
        fluid={data.bgImg.childImageSharp.fluid}
        style={{ marginBottom: "236px" }}
      />
      <section style={{ width: "60%", marginBottom: "352px" }}>
        <Divider leftText="Who are we?" middleText="" rightText="•" />
        <Typography
          variant="h2"
          style={{ marginTop: "50px", marginBottom: "40px" }}
        >
          We use brains and fancy machines to create brands, products and
          experiences that help our clients solve problems and seize
          opportunities.
        </Typography>
        <Button>See Our Latest Works</Button>
      </section>
      <section style={{ marginBottom: "220px" }}>
        <Divider leftText="Capabilities" rightText="001" />
        <Typography
          variant="h3"
          style={{ marginTop: "78px", marginBottom: "176px", width: "55%" }}
        >
          We work at the intersection of strategy, creativity and technology to
          hone our usinesses. Partner with us to define your strategy, create
          exceptional experiences and build your business, by design.
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {capabilities ? (
            capabilities.map(capability => {
              const { title, list } = capability
              return <CapabilityDetail key={title} title={title} list={list} />
            })
          ) : (
            <></>
          )}
        </div>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "184px",
        }}
      >
        <Divider
          leftText="We — are our team"
          middleText=""
          style={{ width: "30%" }}
        />
        <div style={{ width: "60%" }}>
          <Divider leftText="002" middleText="" rightText="•" />
          <Typography variant="h3" style={{ marginTop: "50px" }}>
            What makes us different? Our people! We’re 100+ individuals from
            across the world driven by bold ideas and diverse perspectives,
            acknowledged by design community and our clients
          </Typography>
        </div>
      </section>
      <section style={{ marginBottom: "190px" }}>
        <Divider leftText="INFLUENCE" rightText="002" />
        <Typography
          variant="h3"
          style={{ width: "30%", marginTop: "60px", marginBottom: "60px" }}
        >
          We are beloved children of design community with big audience
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginBottom: "190px",
          }}
        >
          {influences ? (
            influences.map(influence => {
              const { platform, views, viewType } = influence
              return (
                <Influence
                  key={platform}
                  platform={platform}
                  views={views}
                  viewType={viewType}
                />
              )
            })
          ) : (
            <></>
          )}
        </div>
      </section>
      <section style={{ marginBottom: "330px" }}>
        <div style={{ position: "relative" }}>
          <Divider leftText="Recognition" middleText="" rightText="" />
          <div style={{ position: "absolute", right: 0, top: 1 }}>
            {platforms ? (
              platforms.map((platform, index) => {
                const { bgColor, color, number, text } = platform
                return (
                  <RecognitionFlag
                    key={text}
                    text={text}
                    bgColor={bgColor}
                    color={color}
                    number={number}
                    lastElem={index === platforms.length - 1}
                  />
                )
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <Typography
          variant="h3"
          style={{ marginTop: "130px", marginBottom: "200px", width: "30%" }}
        >
          It's great to be recognized for our personal efforts:
        </Typography>
        <div
          style={{
            margin: "100px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gridAutoRows: "180px",
          }}
        >
          {organizations ? (
            organizations.map((organization, index) => {
              const { name, logo } = organization
              return (
                <RecognizedByOrganization
                  key={name + index}
                  logo={logo.publicURL}
                  name={name}
                />
              )
            })
          ) : (
            <></>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default About
