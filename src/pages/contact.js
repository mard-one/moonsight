import React from "react"
import Layout from "../layout"
import HeaderText from "../components/headerText"
import Button from "../components/button"
import Divider from "../components/divider"
import { Grid, Typography } from "@material-ui/core"
import Margin from "../components/margin"

const Contact = () => {
  return (
    <Layout hideCTA>
      <HeaderText overline="CONTACT US">
        Interested in working with us? We’d love to hear from you.
      </HeaderText>
      <Margin as="section" txs={500} bxs={110} tsm={150} bsm={100}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">
              Perhaps there’s a way your business could benefit from simplifying
              a process or experience? Please share your thoughts in the form
              below and we’ll be in touch.
            </Typography>
            <Margin bxs={30} bsm={24} />
            <Button>Or Schedule a 45 Min. Intro</Button>
          </Grid>
        </Grid>
      </Margin>
      <Margin as="section" bxs={60} bsm={300}>
        <Divider leftText="Contact Form" middleText="" rightText="Mars" />
        <Margin bxs={80} bsm={96} />
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">Services</Typography>
            <Margin bxs={20} bsm={20} />
            <div>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>Web Design</Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>App Design</Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>Branding</Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>Development</Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>Illustration</Button>
            </div>
          </Grid>
        </Grid>
        <Margin bxs={50} bsm={48} />
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">Budget in USD</Typography>
            <Margin bxs={20} bsm={20} />
            <div>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>
                $15.000 — $30.000{" "}
              </Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>
                $30.000 — $60.000{" "}
              </Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>
                $60.000 — $100.000{" "}
              </Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>
                $100.000 — $150.000{" "}
              </Button>
              <Button style={{ marginRight: "16px", marginBottom: "16px" }}>
                $150.000 and up{" "}
              </Button>
            </div>
          </Grid>
        </Grid>
        <Margin bxs={70} bsm={70} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "transparent",
                  border: 0,
                  borderBottom: "1px solid #FFFFFF",
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "transparent",
                  border: 0,
                  borderBottom: "1px solid #FFFFFF",
                }}
              />
              <input
                type="text"
                placeholder="Company Name"
                style={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "transparent",
                  border: 0,
                  borderBottom: "1px solid #FFFFFF",
                }}
              />
              <div>
                <textarea
                  placeholder="Project Details"
                  style={{
                    width: "100%",
                    height: "48px",
                    backgroundColor: "transparent",
                    border: 0,
                    borderBottom: "1px solid #FFFFFF",
                  }}
                ></textarea>
                <span>Need NDA first? E-mail us at hello@moonsight.com</span>
              </div>
              <Margin bxs={30} bsm={56} />
              <Button
                style={{
                  width: "273px",
                  borderRadius: "21px",
                }}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Margin>
    </Layout>
  )
}

export default Contact
