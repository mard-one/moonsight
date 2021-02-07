import React from "react"
import Layout from "../components/layout"
import HeaderText from "../components/headerText"
import Typography from "../components/typography"
import Button from "../components/button"
import Divider from "../components/divider"

const Contact = () => {
  return (
    <Layout>
      <header style={{ marginTop: "136px", marginBottom: "100px" }}>
        <HeaderText overline="CONTACT US" style={{ marginBottom: "150px" }}>
          Interested in working with us? We’d love to hear from you.
        </HeaderText>
        <Typography variant="h3" style={{ width: "40%", marginBottom: "24px" }}>
          Perhaps there’s a way your business could benefit from simplifying a
          process or experience? Please share your thoughts in the form below
          and we’ll be in touch.
        </Typography>
        <Button>Or Schedule a 45 Minute Introduction</Button>
      </header>
      <section style={{ marginBottom: "300px" }}>
        <Divider
          leftText="Contact Form"
          middleText=""
          rightText="Mars"
          style={{ marginBottom: "96px" }}
        />
        <Typography variant="h3" style={{ marginBottom: "20px" }}>
          Services
        </Typography>
        <div style={{ width: "70%", marginBottom: "48px" }}>
          <Button style={{ marginRight: "16px" }}>Web Design</Button>
          <Button style={{ marginRight: "16px" }}>App Design</Button>
          <Button style={{ marginRight: "16px" }}>Branding</Button>
          <Button style={{ marginRight: "16px" }}>Development</Button>
          <Button style={{ marginRight: "16px" }}>Illustration</Button>
        </div>
        <Typography variant="h3" style={{ marginBottom: "20px" }}>
          Budget in USD
        </Typography>
        <div style={{ width: "60%", marginBottom: "70px" }}>
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
        <form style={{ width: "50%" }}>
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
          <Button
            style={{ marginTop: "56px", width: "273px", borderRadius: "21px" }}
          >
            Send
          </Button>
        </form>
      </section>
    </Layout>
  )
}

export default Contact
