import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../layout"
import Img from "gatsby-image"
import Divider from "../components/divider"
import Button from "../components/button"
import HeaderText from "../components/headerText"
import { Grid, Hidden, Typography } from "@material-ui/core"
import Margin from "../components/margin"
import styled from "styled-components"
import { Fragment } from "react"
import pwcIcon from "../images/recognized-by/pwc.svg"
import skolkovoIcon from "../images/recognized-by/skolkovo.svg"
import mckinseyIcon from "../images/recognized-by/mckinsey.svg"
import tinkoffIcon from "../images/recognized-by/tinkoff.svg"
import mashreqIcon from "../images/recognized-by/mashreq.svg"
import StickerOnText from "../components/stickerOnText"
import Team from "../components/teamAsteroidHTML"
import Imgas from "../images/gatsby-astronaut.png"

const organizations = [
  {
    name: "pwc",
    logo: pwcIcon,
  },
  {
    name: "skolkovo",
    logo: skolkovoIcon,
  },
  {
    name: "mckinsey",
    logo: mckinseyIcon,
  },
  {
    name: "tinkoff",
    logo: tinkoffIcon,
  },
  {
    name: "mashreq",
    logo: mashreqIcon,
  },
  {
    name: "skolkovo",
    logo: skolkovoIcon,
  },
  {
    name: "pwc",
    logo: pwcIcon,
  },
  {
    name: "tinkoff",
    logo: tinkoffIcon,
  },
  {
    name: "mckinsey",
    logo: mckinseyIcon,
  },
  {
    name: "mashreq",
    logo: mashreqIcon,
  },
]
const platforms = [
  { text: "Be", bgColor: "#004FFF", color: "#F2F3F1", number: "4" },
  { text: "In", bgColor: "#C19F63", color: "#F2F3F1", number: "4" },
  { text: "Ps", bgColor: "#001E36", color: "#F2F3F1", number: "4" },
  { text: "Mo", bgColor: "#C19F63", color: "#F2F3F1", number: "24" },
  { text: "Gr", bgColor: "#C19F63", color: "#F2F3F1", number: "23" },
  { text: "P", bgColor: "#C4C4C4", color: "#F2F3F1", number: "11" },
  { text: "Il", bgColor: "#C19F63", color: "#F2F3F1", number: "2" },
  { text: "Ai", bgColor: "#330000", color: "#FF9A00", number: "4" },
  { text: "Id", bgColor: "#49021F", color: "#FF3366", number: "120" },
]
const influences = [
  {
    platform: "Behance",
    views: "13,000,000",
    viewType: "Views of our Сases",
  },
  {
    platform: "Dribbble",
    views: "11,121,323",
    viewType: "Views on our Shots",
  },
  {
    platform: "Instagram",
    views: "32,322,234",
    viewType: "Views on our Posts",
  },
]
const capabilities = [
  {
    title: "Branding",
    list: [
      "Visual benchmarking",
      "Style exploration",
      "Brand strategy",
      "Identity development",
      "Visual language",
      "Art direction",
      "Brand guidelines",
    ],
  },
  {
    title: "Design",
    list: [
      "Marketing websites",
      "Digital products",
      "Dashboards & User Interfaces",
      "Mobile apps",
      "Design systems",
      "Prototyping & Testing",
      "Illustrations",
      "Animations",
    ],
  },
  {
    title: "Development",
    list: [
      "Front-end development",
      "Website development",
      "Responsive interface development",
      "Angular, Vue.js, React framework's usage",
      "Content Management integrations",
      "Webflow pages, CMS build",
      "Custom Wordpress Theme / Gutenberg Blocks",
    ],
  },
]

export const ImgContainer = styled.div`
  ${props => props.theme.breakpoints.down("sm")} {
    height: 300px;
  }
`

const CapabilityDetail = ({ title, list = [] }) => {
  return (
    <div style={{ marginBottom: 60 }}>
      <div
        style={{
          maxWidth: 350,
          padding: "16px 0",
          borderBottom: "2px solid #FFFFFF",
          marginBottom: "24px",
        }}
      >
        <Typography variant="overline">{title}</Typography>
      </div>
      <ul>
        {list.map(c => (
          <li
            key={c}
            style={{
              fontSize: "1rem",
              lineHeight: 1.4,
              opacity: 0.8,
              margin: "16px 0",
            }}
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
      <Button as="span" notSelectable>
        {platform}
      </Button>
      <Margin txs={20} tsm={52}>
        <Typography variant="h1" style={{ marginBottom: "6px" }}>
          {views}
        </Typography>
      </Margin>
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
        <Typography variant="body1" style={{ fontWeight: 600 }}>
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
      <Hidden xsDown implementation="css">
        <PlusSign x={0} y={0} />
        <PlusSign x={0} y={"100%"} />
        <PlusSign x={"100%"} y={0} />
        <PlusSign x={"100%"} y={"100%"} />
      </Hidden>
      <img src={logo} alt={name} />
    </div>
  )
}
const RecogFlagSingleLine = ({ platforms }) =>
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
const RecogFlagMultiLine = ({ platforms }) => (
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        borderTop: "1px solid rgba(255, 255, 255, 0.29)",
      }}
    >
      {platforms.map(
        (platform, index) =>
          index <= 3 && (
            <RecognitionFlag
              key={platform.text}
              text={platform.text}
              bgColor={platform.bgColor}
              color={platform.color}
              number={platform.number}
            />
          )
      )}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: 40,
        borderTop: "1px solid rgba(255, 255, 255, 0.29)",
      }}
    >
      {platforms.map(
        (platform, index) =>
          index >= 3 &&
          index <= 5 && (
            <RecognitionFlag
              key={platform.text}
              text={platform.text}
              bgColor={platform.bgColor}
              color={platform.color}
              number={platform.number}
            />
          )
      )}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 40,
        borderTop: "1px solid rgba(255, 255, 255, 0.29)",
      }}
    >
      {platforms.map(
        (platform, index) =>
          index >= 6 && (
            <RecognitionFlag
              key={platform.text}
              text={platform.text}
              bgColor={platform.bgColor}
              color={platform.color}
              number={platform.number}
            />
          )
      )}
    </div>
  </div>
)

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "work-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1220) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const teamMembers = [
    {
      name: "asdqwezxc1",
      img: Imgas,
      posY: {
        web: "0",
        tablet: "0",
        mobile: "",
      },
      posX: {
        web: "-1%",
        tablet: "-1%",
        mobile: "",
      },
      size: {
        web: "95",
        tablet: "95",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc2",
      img: Imgas,
      posY: {
        web: "94",
        tablet: "94",
        mobile: "",
      },
      posX: {
        web: "4%",
        tablet: "4%",
        mobile: "",
      },
      size: {
        web: "95",
        tablet: "95",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc3",
      img: Imgas,
      posY: {
        web: "194",
        tablet: "194",
        mobile: "",
      },
      posX: {
        web: "8%",
        tablet: "8%",
        mobile: "",
      },
      size: {
        web: "143",
        tablet: "113",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc4",
      img: Imgas,
      posY: {
        web: "102",
        tablet: "102",
        mobile: "",
      },
      posX: {
        web: "13%",
        tablet: "13%",
        mobile: "",
      },
      size: {
        web: "79",
        tablet: "79",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc5",
      img: Imgas,
      posY: {
        web: "272",
        tablet: "272",
        mobile: "",
      },
      posX: {
        web: "16%",
        tablet: "15%",
        mobile: "",
      },
      size: {
        web: "100",
        tablet: "100",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc6",
      img: Imgas,
      posY: {
        web: "189",
        tablet: "139",
        mobile: "",
      },
      posX: {
        web: "17%",
        tablet: "19%",
        mobile: "",
      },
      size: {
        web: "77",
        tablet: "77",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc7",
      img: Imgas,
      posY: {
        web: "339",
        tablet: "339",
        mobile: "",
      },
      posX: {
        web: "23%",
        tablet: "22%",
        mobile: "",
      },
      size: {
        web: "120",
        tablet: "120",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc8",
      img: Imgas,
      posY: {
        web: "241",
        tablet: "211",
        mobile: "",
      },
      posX: {
        web: "22%",
        tablet: "25%",
        mobile: "",
      },
      size: {
        web: "80",
        tablet: "80",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc9",
      img: Imgas,
      posY: {
        web: "423",
        tablet: "423",
        mobile: "",
      },
      posX: {
        web: "27%",
        tablet: "27%",
        mobile: "",
      },
      size: {
        web: "100",
        tablet: "100",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc10",
      img: Imgas,
      posY: {
        web: "321",
        tablet: "231",
        mobile: "",
      },
      posX: {
        web: "29%",
        tablet: "30%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "158",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc11",
      img: Imgas,
      posY: {
        web: "410",
        tablet: "410",
        mobile: "",
      },
      posX: {
        web: "36%",
        tablet: "36%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "178",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc12",
      img: Imgas,
      posY: {
        web: "562",
        tablet: "562",
        mobile: "",
      },
      posX: {
        web: "44%",
        tablet: "35%",
        mobile: "",
      },
      size: {
        web: "130",
        tablet: "130",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc13",
      img: Imgas,
      posY: {
        web: "334",
        tablet: "244",
        mobile: "",
      },
      posX: {
        web: "41%",
        tablet: "41%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "158",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc14",
      img: Imgas,
      posY: {
        web: "569",
        tablet: "569",
        mobile: "",
      },
      posX: {
        web: "52%",
        tablet: "48%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "158",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc15",
      img: Imgas,
      posY: {
        web: "400",
        tablet: "370",
        mobile: "",
      },
      posX: {
        web: "49%",
        tablet: "46%",
        mobile: "",
      },
      size: {
        web: "152",
        tablet: "152",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc16",
      img: Imgas,
      posY: {
        web: "425",
        tablet: "457",
        mobile: "",
      },
      posX: {
        web: "58%",
        tablet: "55%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "158",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc17",
      img: Imgas,
      posY: {
        web: "599",
        tablet: "599",
        mobile: "",
      },
      posX: {
        web: "66%",
        tablet: "64%",
        mobile: "",
      },
      size: {
        web: "80",
        tablet: "80",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc18",
      img: Imgas,
      posY: {
        web: "415",
        tablet: "415",
        mobile: "",
      },
      posX: {
        web: "66%",
        tablet: "66%",
        mobile: "",
      },
      size: {
        web: "178",
        tablet: "158",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc19",
      img: Imgas,
      posY: {
        web: "335",
        tablet: "335",
        mobile: "",
      },
      posX: {
        web: "64%",
        tablet: "64%",
        mobile: "",
      },
      size: {
        web: "80",
        tablet: "80",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc20",
      img: Imgas,
      posY: {
        web: "553",
        tablet: "583",
        mobile: "",
      },
      posX: {
        web: "72%",
        tablet: "70%",
        mobile: "",
      },
      size: {
        web: "106",
        tablet: "106",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc21",
      img: Imgas,
      posY: {
        web: "533",
        tablet: "533",
        mobile: "",
      },
      posX: {
        web: "77%",
        tablet: "77%",
        mobile: "",
      },
      size: {
        web: "106",
        tablet: "106",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc22",
      img: Imgas,
      posY: {
        web: "616",
        tablet: "616",
        mobile: "",
      },
      posX: {
        web: "80%",
        tablet: "80%",
        mobile: "",
      },
      size: {
        web: "100",
        tablet: "100",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc23",
      img: Imgas,
      posY: {
        web: "645",
        tablet: "625",
        mobile: "",
      },
      posX: {
        web: "87%",
        tablet: "89%",
        mobile: "",
      },
      size: {
        web: "95",
        tablet: "95",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc24",
      img: Imgas,
      posY: {
        web: "729",
        tablet: "729",
        mobile: "",
      },
      posX: {
        web: "93%",
        tablet: "83%",
        mobile: "",
      },
      size: {
        web: "95",
        tablet: "95",
        mobile: "",
      },
    },
    {
      name: "asdqwezxc25",
      img: Imgas,
      posY: {
        web: "817",
        tablet: "807",
        mobile: "",
      },
      posX: {
        web: "96%",
        tablet: "90%",
        mobile: "",
      },
      size: {
        web: "150",
        tablet: "100",
        mobile: "",
      },
    },
  ]

  // const teamMembers = [
  //   { name: "abcx", radius: 50, deviationX: 40, deviationY: 50 },
  //   { name: "abcd", radius: 50, deviationX: 0, deviationY: 60 },
  //   { name: "abce", radius: 70, deviationX: 50, deviationY: -40 },
  //   { name: "abcf", radius: 40, deviationX: 0, deviationY: 30 },
  //   { name: "abcg", radius: 50, deviationX: 30, deviationY: -40 },
  //   { name: "abch", radius: 35, deviationX: -30, deviationY: 30 },
  //   { name: "abci", radius: 40, deviationX: 0, deviationY: 0 },
  //   { name: "abcj", radius: 60, deviationX: 0, deviationY: 60 },
  //   { name: "abck", radius: 50, deviationX: 0, deviationY: -40 },
  //   { name: "abcd", radius: 70, deviationX: 0, deviationY: 100 },
  //   { name: "abce", radius: 90, deviationX: 50, deviationY: -50 },
  //   { name: "abcf", radius: 40, deviationX: -40, deviationY: 100 },
  //   { name: "abcg", radius: 65, deviationX: 0, deviationY: 70 },
  //   { name: "abch", radius: 75, deviationX: 50, deviationY: 0 },
  //   { name: "abci", radius: 90, deviationX: 0, deviationY: 140 },
  //   { name: "abcj", radius: 90, deviationX: 0, deviationY: -100 },
  //   { name: "abck", radius: 40, deviationX: 0, deviationY: 0 },
  //   { name: "abcd", radius: 90, deviationX: 0, deviationY: 100 },
  //   { name: "abce", radius: 50, deviationX: 0, deviationY: -50 },
  //   { name: "abcf", radius: 50, deviationX: 0, deviationY: 30 },
  //   { name: "abcg", radius: 50, deviationX: 30, deviationY: 100 },
  //   { name: "abch", radius: 50, deviationX: 50, deviationY: 0 },
  //   { name: "abci", radius: 40, deviationX: 0, deviationY: 70 },
  //   { name: "abcj", radius: 45, deviationX: 40, deviationY: 50 },
  //   { name: "abck", radius: 50, deviationX: 0, deviationY: 100 },
  //   { name: "abcj", radius: 45, deviationX: 0, deviationY: -40 },
  //   { name: "abck", radius: 75, deviationX: 0, deviationY: 0 },
  // ]

  return (
    <Layout>
      <HeaderText overline="About Moonsight®">
        We are a unique team of handpicked designers and developers focused on{" "}
        <StickerOnText text="perfecting" bgColor="rgba(252, 77, 245, 0.68)">
          refining
        </StickerOnText>{" "}
        your digital products.
      </HeaderText>
      <Margin txs={100} bxs={60} bsm={236}>
        <ImgContainer>
          <Img
            fluid={data.bgImg.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </ImgContainer>
      </Margin>
      <Margin as="section" bxs={100} bsm={352}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Divider leftText="Who are we?" middleText="" rightText="•" />
            <Margin bsm={80} bxs={40} />
            <Typography variant="h2">
              We use brains and fancy machines to create brands, products and{" "}
              <StickerOnText text="experiences" leftText="✨">
                experiences
              </StickerOnText>{" "}
              that help our clients solve problems and seize opportunities.
            </Typography>
            <Margin bsm={40} bxs={35} />
            <Button as={Link} to="/work">
              See Our Latest Works
            </Button>
          </Grid>
        </Grid>
      </Margin>
      <Margin as="section" bxs={170} bsm={220}>
        <Divider
          leftText="Capabilities"
          middleText="Section #"
          rightText="001"
        />
        <Margin bsm={80} bxs={40} />
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Typography variant="h3">
              We work at the intersection of strategy,{" "}
              <StickerOnText
                text="creativity"
                bgColor="rgba(252, 77, 98, 0.68)"
                tiltDeg="-7.09deg"
              >
                creativity
              </StickerOnText>{" "}
              and technology to hone our usinesses. Partner with us to define
              your strategy, create exceptional experiences and build your
              business, by design.
            </Typography>
          </Grid>
        </Grid>
        <Margin bsm={176} bxs={70} />
        <div style={{ overflow: "hidden" }}>
          <Grid container>
            {capabilities.map((capability, index) => {
              const { title, list } = capability
              const isFirstOrLast =
                index === 0 || capabilities.length - 1 === index
              return (
                <Fragment key={title + index}>
                  {!isFirstOrLast && <Grid item sm={1} xs={false} />}
                  <Grid item xs={12} sm={5} md={3}>
                    <CapabilityDetail key={title} title={title} list={list} />
                  </Grid>
                  {!isFirstOrLast && <Grid item sm={1} xs={false} />}
                </Fragment>
              )
            })}
          </Grid>
        </div>
      </Margin>
      <Margin
        as="section"
        bxs={150}
        bsm={184}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Divider leftText="We — are our team" middleText="" />
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={7}>
            <Hidden xsDown implementation="css">
              <Divider leftText="002" middleText="" rightText="•" />
            </Hidden>
            <Typography variant="h3" style={{ marginTop: "50px" }}>
              What makes us different? Our people! We’re 100+ individuals from
              across the world driven by bold ideas and diverse perspectives,
              acknowledged by design community and our clients
            </Typography>
          </Grid>
        </Grid>
      </Margin>
      <Team teamMembers={teamMembers} />
      <Margin as="section" bxs={150} bsm={190}>
        <Divider leftText="INFLUENCE" middleText="Section #" rightText="002" />
        <Margin bsm={80} bxs={40} />
        <Grid container>
          <Grid item xs={12} sm={5} md={3}>
            <Typography variant="h3" style={{ marginBottom: "60px" }}>
              We are beloved children of design community with big audience
            </Typography>
          </Grid>
        </Grid>
        <div style={{ overflow: "hidden" }}>
          <Grid container spacing={6}>
            {influences.map(influence => {
              const { platform, views, viewType } = influence
              return (
                <Grid key={platform} item xs={12} sm={4}>
                  <Influence
                    key={platform}
                    platform={platform}
                    views={views}
                    viewType={viewType}
                  />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </Margin>
      <Margin as="section">
        <div style={{ position: "relative" }}>
          <Divider leftText="Recognition" middleText="" rightText="005" />
          <Hidden smDown implementation="css">
            <div style={{ position: "absolute", right: 0, top: 1 }}>
              <RecogFlagSingleLine platforms={platforms} />
            </div>
          </Hidden>
        </div>
        <Margin bxs={50} bsm={130} />
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} md={3}>
            <Typography variant="h3">
              It's great to be recognized for our personal efforts:
            </Typography>
          </Grid>
        </Grid>
        <Margin bxs={60} bsm={100} bmd={200} />
        <Hidden mdUp implementation="css">
          <RecogFlagMultiLine platforms={platforms} />
          <Margin bxs={140} bsm={150} />
        </Hidden>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <div
              style={{
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gridAutoRows: "180px",
              }}
            >
              {organizations.map((organization, index) => {
                const { name, logo } = organization
                return (
                  <RecognizedByOrganization
                    key={name + index}
                    logo={logo}
                    name={name}
                  />
                )
              })}
            </div>
          </Grid>
        </Grid>
      </Margin>
    </Layout>
  )
}

export default About
