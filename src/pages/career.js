import React from "react"

import Layout from "../components/layout"
import HeaderText from "../components/headerText"
import Typography from "../components/typography"
import Divider from "../components/divider"

const CurrentOpening = ({ type, children }) => {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ width: "50%", display: "inline-block" }}>
        <Typography variant="p" style={{ fontSize: "1.75rem" }}>
          {type}
        </Typography>
      </div>
      <div style={{ width: "50%", display: "inline-block" }}>
        <Typography
          variant="p"
          style={{ fontSize: "1.125rem", color: "rgba(242, 243, 241, 0.7)" }}
        >
          {children}
        </Typography>
      </div>
    </div>
  )
}

const Career = () => {
  return (
    <Layout ctaText="Mind joing Superstar Family? Let’s get to work. ">
      <header style={{ marginTop: 110, marginBottom: 700 }}>
        <HeaderText overline="Careers/Opportunities">
          Doing your job well and want to be paid the same way?{" "}
        </HeaderText>
      </header>
      <section style={{ width: "60%", marginBottom: 400 }}>
        <Divider leftText="why join us?" middleText="" rightText="•" />
        <Typography variant="h3" style={{ marginTop: 60 }}>
          Looking to join a diverse team of individuals who do great work and
          are also great to work with? We're looking for talented people who
          love solving challenges for the world's best brands.
        </Typography>
      </section>
      <section style={{ width: "60%", marginLeft: "auto", marginBottom: 340 }}>
        <Typography variant="p" style={{ marginBottom: 200, width: "70%" }}>
          We all work remotely, so you can enjoy the comfort of your own home
          and not spend time on unimportant stuff, just work, hard work.
        </Typography>
        <Divider
          leftText="Current Openings"
          middleText=""
          rightText="002"
          style={{ marginBottom: 60 }}
        />
        <CurrentOpening type="3D Artist">
          You’re comfortable around 3D stuff and have a good taste in what you
          are doing
        </CurrentOpening>
        <CurrentOpening type="UX Researcher">
          You’re comfortable around 3D stuff and have a good taste in what you
          are doing
        </CurrentOpening>
        <CurrentOpening type="Graphic Designer (Branding)">
          You’re comfortable around 3D stuff and have a good taste in what you
          are doing
        </CurrentOpening>
        <CurrentOpening type="Creative Frontend Developer">
          You’re comfortable around 3D stuff and have a good taste in what you
          are doing
        </CurrentOpening>
        <CurrentOpening type="IOS Developer">
          You’re comfortable around 3D stuff and have a good taste in what you
          are doing
        </CurrentOpening>
      </section>
    </Layout>
  )
}

export default Career
