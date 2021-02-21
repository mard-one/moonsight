import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import HeaderText from "../components/headerText"
import { Grid, Hidden, Typography } from "@material-ui/core"
import { ImgContainer } from "./about"
import Margin from "../components/margin"

import styled from "styled-components"

const ContentText = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.375rem;
  line-height: 1.45;
  ${props => props.theme.breakpoints.down("sm")} {
    font-size: 1.125rem;
    line-height: 1.55;
  }
`

const PrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "work-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const privPolicyParagraph = [
    "(1) TERMS OF USE CHANGES",
    "(2) OWNERSHIP",
    "(3) PRIVACY POLICY",
    "(4) FRAUD",
    "(5) LINKS TO OTHER WEB SITES",
    "(6) DISCLAIMER",
    "(7) LIMITATION OF LIABILITY",
    "(8) EXCLUSIONS AND LIMITATIONS",
    "(9) INDEMNITY",
    "(10) FORCE MAJEURE",
    "(11) TERMINATION",
    "(12) ARBITRATION",
    "(13) GENERAL PROVISIONS",
  ]
  const content = [
    {
      title: "",
      text: `These Terms of Use (the “Terms of Use”) govern your use of all 
      Web sites operated by Moonsight Inc. (“Moonsight”), including, without limitation,
      the Web site currently located basicagency.com (collectively, the “Site”), 
      provided for your informational, educational and entertainment purposes. 
      Please read these Terms of Use carefully. These Terms of Use constitute a binding
      agreement between you and Basic regarding your use of the Site. By using the Site,
      you agree to be bound by these Terms of Use and the Basic Privacy Policy. 
      If you do not agree to any provision of these agreements, 
      you may not use the Site.`,
    },
    {
      title: "(1) TERMS OF USE CHANGES",
      text: `Moonsight Agency may, in its sole and absolute discretion, change these Terms of Use from time to time. Moonsight Agency will post a copy of these Terms of Use as changed on the Site at (ACTUAL WEBSITE LINK GOES HERE) Your continued use of the Site constitutes your agreement to abide by these Terms of Use as changed. If you object to any such changes, your sole recourse shall be to cease using the Site.`,
    },
    {
      title: "(2) OWNERSHIP",
      text: `The content on the Site, including, without limitation, text, software, scripts, graphics, photos, sounds, music, videos, interactive features and the like (collectively, “Moonsight Agency Content”), and the Moonsight Agency word marks and design marks, as well as certain other of the names, logos and materials displayed on the Site that constitute trademarks (collectively, “Marks”), are owned by or licensed to Moonsight Agency and are subject to copyright, trademark and other intellectual property rights under U.S. and international laws.`,
    },
    {
      title: "(3) PRIVACY POLICY",
      text: `You agree that Moonsight Agency may use any information Moonsight Agency obtains about you in accordance with the provisions of the Moonsight Agency Privacy Policy https://www.basicagency.com/privacy.`,
    },
    {
      title: "(4) FRAUD",
      text: `Moonsight Agency reserves the right, but undertakes no obligation, to actively report and prosecute actual and suspected credit card fraud. Moonsight Agency may, in its discretion, require further authorization from you such as a telephone confirmation of your order and other information. Moonsight Agency reserves the right to cancel, any order if fraud is suspected. Moonsight Agency captures certain information during the order process, including time, date, IP address and other information that will be used to locate and identify individuals committing fraud. If any order is suspected to be fraudulent, Moonsight Agency reserves the right, but undertakes no obligation, to submit all records, with or without a subpoena, to all law enforcement agencies and to the credit card company for fraud investigation. Moonsight Agency reserves the right to cooperate with authorities to prosecute offenders to the fullest extent of the law.`,
    },
    {
      title: "(5) LINKS TO OTHER WEB SITES",
      text: `The Site may contain links to third party Web sites or Internet resources that are not owned or controlled by Moonsight Agency. Moonsight Agency provision of a link to any other Web site or Internet resource is for your convenience only and does not signify Moonsight Agency endorsement of such other Web site or resource or its contents. Moonsight Agency SHALL NOT BE RESPONSIBLE FOR THE AVAILABILITY OF ANY THIRD PARTY WEB SITES OR RESOURCES, AND BASIC DOES NOT WARRANT, ENDORSE GUARANTEE OR ASSUME RESPONSIBILITY FOR ANY CONTENT, INFORMATION, SOFTWARE, MATERIALS OR PRACTICES OF ANY SUCH THIRD PARTY WEB SITES OR RESOURCES, INCLUDING, WITHOUT LIMITATION, ANY PRODUCTS OR SERVICES ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR THROUGH ANY LINKED WEB SITES OR FEATURED IN ANY ADVERTISING.`,
    },
    {
      title: "(6) DISCLAIMER",
      text: `YOU EXPRESSLY AGREE THAT USE OF THE site IS AT YOUR SOLE RISK. THE SITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, Moonsight Agency EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED (INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, ACCURACY AND NON-INFRINGEMENT), WITH RESPECT TO THE site. without limiting the foregoing and TO THE MAXIMUM EXTENT PERMITTED by LAW, Moonsight Agency ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY:
      ANY INTERRUPTION OF TRANSMISSION TO OR FROM THE SITE;
      ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY;
      AND FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, E-MAILED, TRANSMITTED OR OTHERWISE MADE AVAILABLE ON OR THROUGH THE SITE.`,
    },
    {
      title: "(7) LIMITATION OF LIABILITY",
      text: `IN NO EVENT WILL BASIC BE LIABLE UNDER ANY THEORY OF LIABILITY (WHETHER IN CONTRACT, TORT, STATUTORY, OR OTHERWISE) FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF IT WAS ADVISED OF, KNEW OF, OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES).`,
    },
    {
      title: "(8) EXCLUSIONS AND LIMITATIONS",
      text: `Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations and disclaimers may not apply to you. To the extent Moonsight Agency may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of Moonsight Agency liability shall be the minimum permitted under such applicable law `,
    },
    {
      title: "(9) INDEMNITY",
      text: `You agree to indemnify, defend, and hold harmless Moonsight Agency and its affiliates and any of their officers, employees, directors, shareholders, agents, partners, licensors, successors and assigns (the “Moonsight Agency Parties”) from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys’ fees and costs) that such parties may incur as a result of or arising from (a) any information you provide to Moonsight Agency; (b) your use of the Site; or (c) your violation of these Terms of Use. Moonsight Agency reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with Moonsight Agency in asserting any available defenses.`,
    },
    {
      title: "(10) FORCE MAJEURE",
      text: `Without limiting the foregoing, under no circumstances will Moonsight Agency be held liable for any delay or failure in performance due in whole in or in part to any acts of nature, forces, or causes beyond its reasonable control, including, without limitation, Internet failures, computer equipment failures, software bugs, telecommunication equipment failures, other equipment failures, electrical power failures, strikes, labor disputes, riots, insurrections, civil disturbances, shortages of labor or materials, fires, floods, earthquakes, storms, explosions, acts of God, war, governmental actions, orders of domestic or foreign courts or tribunals, non-performance of third parties, or loss of or fluctuations in heat, light, or air conditioning.`,
    },
    {
      title: "(11) TERMINATION",
      text: `Basic may terminate or suspend access to the Site immediately, without prior notice or liability, if you breach any provision of these Terms of Use. In the event of any such termination, the indemnification provisions set forth above shall survive.`,
    },
    {
      title: "(12) ARBITRATION",
      text: `You and Moonsight Agency agree that we will resolve any disputes between us through binding and final arbitration instead of through court proceedings. You and Moonsight Agency hereby waive any right to a jury trial of any Claim. All controversies, claims, counterclaims, or other disputes arising between you and Moonsight Agency relating to the Site or these Terms of Use (each a “Claim”) shall be submitted for binding arbitration in accordance with the Rules of the American Arbitration Association (“AAA Rules”). The arbitration will be heard and determined by a single arbitrator in San Diego County, California. The arbitrator’s decision in any such arbitration will be final and binding upon the parties and may be enforced in any court of competent jurisdiction. The parties agree that the arbitration will be kept confidential and that the existence of the proceeding and any element of it (including, without limitation, any pleadings, briefs, documents, or other evidence submitted or exchanged and any testimony or other oral submissions and awards) will not be disclosed beyond the arbitration proceedings, except as may lawfully be required in judicial proceedings relating to the arbitration or by applicable disclosure rules and regulations of securities regulatory authorities or other governmental agencies.
      You may not act as a class representative or private attorney general, nor participate as a member of a class of claimants, with respect to any Claim. Claims may not be arbitrated on a class or representative basis. The arbitrator can decide only your and/or Moonsight Agency individual Claims. The arbitrator may not consolidate or join the claims of other persons or parties who may be similarly situated.
      THIS SECTION LIMITS CERTAIN RIGHTS, INCLUDING THE RIGHT TO MAINTAIN A COURT ACTION, THE RIGHT TO A JURY TRIAL, THE RIGHT TO PARTICIPATE IN ANY FORM OF CLASS OR REPRESENTATIVE CLAIM, THE RIGHT TO ENGAGE IN DISCOVERY EXCEPT AS PROVIDED IN AAA RULES, AND THE RIGHT TO CERTAIN REMEDIES AND FORMS OF RELIEF. OTHER RIGHTS THAT YOU OR BASIC WOULD HAVE IN COURT ALSO MAY NOT BE AVAILABLE IN ARBITRATION.`,
    },
    {
      title: "(13) GENERAL PROVISIONS",
      text: `These Terms of Use shall be governed by and construed 
      in accordance with the laws of the State of California, without giving effect to any conflict of laws rules or provisions. If any provision of these Terms of Use shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions. The failure of Moonsight Agency to enforce any right or provision of these Terms of Use will not be deemed a waiver of such right or provision. These Terms of Use, the Moonsight Agency Privacy Policy (ACTUAL WEBSITE LINK GOES HERE) together with and any other policies, rules or guidelines posted in connection with the Site, constitute the entire and exclusive agreement between Basic and you regarding the Site. Effective Date: February 21, 2017`,
    },
  ]
  return (
    <Layout hideCTA hideLetsConnect>
      <Hidden smUp implementation="css">
        <HeaderText overline="INTRODUCING">
          Moonsight® Privacy Policy
        </HeaderText>
      </Hidden>
      <Margin txs={30} bxs={50} tsm={60} bsm={90}>
        <ImgContainer>
          <Img
            fluid={data.bgImg.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </ImgContainer>
      </Margin>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={5}>
          <Hidden xsDown implementation="css">
            <Typography variant="overline">INTRODUCING</Typography>
            <Margin tsm={10} bsm={50}>
              <Typography variant="h1">Moonsight® Privacy Policy</Typography>
            </Margin>
          </Hidden>
          <Typography variant="h3">
            Learn more about your usage rights and restrictions for your
            personal information, educational, and entertainment purposes.
          </Typography>
          <Margin bxs={30} />
          <ul>
            {privPolicyParagraph.map(paragraph => {
              return (
                <li>
                  <Typography variant="overline" style={{ lineHeight: 2 }}>
                    {paragraph}
                  </Typography>
                </li>
              )
            })}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Margin txs={120} bxs={120} tsm={1} bsm={200}>
            {content.map(c => {
              return (
                <Margin bxs={60} bsm={100}>
                  <Typography
                    variant="overline"
                    style={{ ffontSize: "1.125rem" }}
                  >
                    {c.title}
                  </Typography>
                  <Margin bxs={20}></Margin>
                  <ContentText variant="body1">{c.text}</ContentText>
                </Margin>
              )
            })}
          </Margin>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PrivacyPolicy
