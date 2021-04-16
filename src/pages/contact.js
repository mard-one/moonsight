import React, { useState, Fragment } from "react"
import Layout from "../layout"
import HeaderText from "../components/headerText"
import Button from "../components/button"
import Divider from "../components/divider"
import { Grid, Hidden, TextField, Typography } from "@material-ui/core"
import Margin from "../components/margin"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StickerOnText from "../components/stickerOnText"
import Ray from "../components/ray"
import SpiralTube from "../components/shapes/spiralTube"
import Coin from "../components/shapes/coin"
import RotatedSpiral from "../components/shapes/rotatedSpiral"
import CoinSmall from "../components/shapes/coinSmall"
import CubeFrame from "../components/shapes/cubeFrame"
import Pearl from "../components/shapes/pearl"

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;

  & label,
  & input,
  & textarea {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  & input:focus,
  & textarea:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }

  & input:placeholder-shown + label,
  & textarea:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.225rem) scale(1.2857);
  }

  & input::-webkit-input-placeholder,
  & textarea::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  & input:focus::-webkit-input-placeholder,
  & textarea:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  & input:not(:placeholder-shown) + label,
  & textarea:not(:placeholder-shown) + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }

  & input:focus + label,
  & textarea:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`

const Input = styled.input`
  -webkit-appearance: none;
  cursor: text;
  border: 0;
  padding: 10px 0 10px;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid #fff;
  font-size: 1.125rem;
  font-family: "Graphik", Helvetica, Arial, sans-serif;
`
const LabelFloat = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75;
  color: #f2f3f1;
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 0.75rem;
    line-height: 1.5;
  }
`

const StyledRayWrapper = styled.div`
  width: 100vw;
  left: 0;
  top: 0;
  position: absolute;
  overflow: hidden;
  z-index: -2;
`
const StyledRay = styled(Ray)`
  left: 50%;
  width: 1430px;
  height: 1430px;
  position: relative;
  transform: translate(-50%, calc(-50% + 230px));
  ${props => props.theme.breakpoints.down("xs")} {
    transform: translate(-50%, calc(-50% - 80px));
    width: 1650px;
    height: 1650px;
  }
`
const StyledSpiralTube = styled(SpiralTube)`
  width: 200px;
  height: 190px;
  right: 196px;
  bottom: 583px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% - 115px);
    bottom: 310px;
    width: 106px;
    height: 103px;
  }
`
const StyledCoin = styled(Coin)`
  width: 180px;
  height: 220px;
  right: 500px;
  bottom: 450px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% + 50px);
    bottom: 245px;
    width: 96px;
    height: 118px;
  }
`
const StyledRotatedSpiral = styled(RotatedSpiral)`
  width: 455px;
  height: 370px;
  right: 145px;
  bottom: 190px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% - 150px);
    bottom: 90px;
    width: 242px;
    height: 200px;
  }
`
const StyledCoinSmall = styled(CoinSmall)`
  width: 170px;
  height: 86px;
  right: 95px;
  bottom: 175px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% - 155px);
    bottom: 93px;
    width: 92px;
    height: 46px;
  }
`
const StyledCubeFrame = styled(CubeFrame)`
  width: 260px;
  height: 233px;
  right: 510px;
  bottom: 10px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% + 55px);
    bottom: 8px;
    width: 140px;
    height: 124px;
  }
`
const StyledPearl = styled(Pearl)`
  width: 180px;
  height: 180px;
  right: 210px;
  bottom: 0px;
  ${props => props.theme.breakpoints.down("xs")} {
    right: calc(50% - 108px);
    bottom: 0px;
    width: 95px;
    height: 95px;
  }
`

const InputField = ({
  type = "text",
  id,
  label,
  placeholder,
  value,
  handleOnChange,
  as = "input",
  required = false,
}) => {
  const [floating, setFloating] = useState(false)
  return (
    <Field>
      <Input
        as={as}
        type={type}
        id={id}
        value={value}
        onChange={handleOnChange}
        onFocus={() => setFloating(true)}
        onBlur={() => setFloating(false)}
        placeholder={placeholder}
        required={required}
      />
      <LabelFloat floating={floating || value} htmlFor={id}>
        {label}
      </LabelFloat>
    </Field>
  )
}

const Contact = () => {
  const [budget, setBudget] = useState([
    { value: "value1", label: "$15.000 — $30.000", selected: false },
    { value: "value2", label: "$30.000 — $60.000", selected: false },
    { value: "value3", label: "$60.000 — $100.000", selected: false },
    { value: "value4", label: "$100.000 — $150.000", selected: false },
    { value: "value5", label: "$150.000 and up", selected: false },
  ])
  const allProjectTypes = [
    "Web Design",
    "App Design",
    "Branding",
    "Development",
    "Illustration",
  ]

  const selectedBudget =
    budget.filter(obj => obj.selected) &&
    budget.filter(obj => obj.selected)[0] &&
    budget.filter(obj => obj.selected)[0].label
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [detail, setDetail] = useState("")

  const [selProjTypes, setSelProjTypes] = useState([])

  const handleBudgetChange = event => {
    event.persist()
    setBudget(currentBudget => {
      const mapReturn = currentBudget.map(budget => {
        return budget.value === event.target.value
          ? { ...budget, selected: true }
          : { ...budget, selected: false }
      })
      return [...mapReturn]
    })
  }
  const handleServiceCheck = event => {
    const selProjType = event.target.value
    if (event.target.checked) {
      setSelProjTypes([...selProjTypes, selProjType])
    } else {
      const filtered = selProjTypes.filter(
        type => type.toLowerCase() !== selProjType.toLowerCase()
      )
      setSelProjTypes([...filtered])
    }
  }
  const handleSubmit = async event => {
    event.preventDefault()
    console.log("selectedBudget", selectedBudget)
    console.log("selProjTypes", selProjTypes)
    console.log("name", name)
    console.log("email", email)
    console.log("companyName", companyName)
    console.log("detail", detail)

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify({
          selectedBudget,
          selProjTypes,
          name,
          email,
          companyName,
          detail,
        }),
      })
      console.log("response", response)
      if (!response.ok) {
        //not 200 response
        return
      }

      //all OK
    } catch (e) {
      //error
    }
  }

  return (
    <Layout hideCTA>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <HeaderText overline="CONTACT US">
            Interested in working with us? We’d love to hear from you.
          </HeaderText>
        </Grid>
        <Grid item xs={12} sm={6} style={{ width: "100%" }}>
          <StyledRayWrapper>
            <StyledRay>
              <StyledSpiralTube />
              <StyledCoin />
              <StyledRotatedSpiral />
              <StyledCoinSmall />
              <StyledCubeFrame />
              <StyledPearl />
            </StyledRay>
          </StyledRayWrapper>
        </Grid>
      </Grid>
      <Margin txs={520} bxs={30} tsm={30} bsm={300}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h3">
            Perhaps there’s a way your business{" "}
            <StickerOnText text="benefit" leftText="💸">
              could benefit from
            </StickerOnText>{" "}
            simplifying a process or experience? Please share your thoughts in
            the form below and we’ll be in touch.
          </Typography>
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
              {allProjectTypes.map(type => {
                return (
                  <Fragment key={type}>
                    <input
                      type="checkbox"
                      id={type}
                      value={type}
                      checked={selProjTypes.includes(type)}
                      onChange={handleServiceCheck}
                      style={{ display: "none" }}
                    />
                    <Button
                      as="label"
                      htmlFor={type}
                      selected={selProjTypes.includes(type)}
                      style={{
                        marginRight: 16,
                        marginBottom: 16,
                        borderRadius: 21,
                      }}
                    >
                      {type}
                    </Button>
                  </Fragment>
                )
              })}
            </div>
          </Grid>
        </Grid>
        <Margin bxs={50} bsm={48} />
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">Budget in USD</Typography>
            <Margin bxs={20} bsm={20} />
            {budget.map(data => (
              <Fragment key={data.value}>
                <input
                  type="radio"
                  id={data.value}
                  value={data.value}
                  checked={data.selected}
                  onChange={handleBudgetChange}
                  name="budget"
                  style={{ display: "none" }}
                />
                <Button
                  as="label"
                  selected={data.selected}
                  htmlFor={data.value}
                  style={{
                    marginRight: 16,
                    marginBottom: 16,
                    borderRadius: 21,
                  }}
                >
                  {data.label}
                </Button>
              </Fragment>
            ))}
          </Grid>
        </Grid>
        <Margin bxs={20} bsm={70} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit}>
              <InputField
                type="text"
                id="name"
                label="Your Name"
                placeholder="John Doe"
                required
                value={name}
                handleOnChange={e => setName(e.target.value)}
              />
              <Margin bxs={14} bsm={40} />
              <InputField
                type="email"
                id="email"
                label="Your Email"
                placeholder="example@gmail.com"
                required
                value={email}
                handleOnChange={e => setEmail(e.target.value)}
              />
              <Margin bxs={14} bsm={40} />
              <InputField
                type="text"
                id="company-name"
                label="Company Name"
                placeholder="Wonka Industries"
                required
                value={companyName}
                handleOnChange={e => setCompanyName(e.target.value)}
              />
              <Margin bxs={14} bsm={40} />
              <div>
                <InputField
                  as="textarea"
                  id="project-details"
                  textarea
                  label="Project Details"
                  placeholder="Give us more details..."
                  value={detail}
                  handleOnChange={e => {
                    e.target.style.height = ""
                    e.target.style.height =
                      Math.min(e.target.scrollHeight, 200) + "px"
                    setDetail(e.target.value)
                  }}
                ></InputField>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: "1.125rem",
                    lineHeight: "1.555",
                    color: "rgba(242, 243, 241, 0.54)",
                  }}
                >
                  Need NDA first? E-mail us at{" "}
                  <a
                    href="mailto:hello@moonsight.com"
                    style={{ color: "#F2F3F1" }}
                  >
                    hello@moonsight.com
                  </a>
                </div>
              </div>
              <Margin bxs={30} bsm={49} />
              <Button
                as="button"
                type="submit"
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
