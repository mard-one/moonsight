const sgMail = require("@sendgrid/mail")
require("dotenv").config()
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler = async (event, context, callback) => {
  console.log("event", event)
  console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY)
  const payload = JSON.parse(event.body)
  const { email, subject } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")
  console.log("body", body)

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_TO_EMAIL,
    subject: subject ? subject : "Contact Form Submission",
    html: body,
  }
  console.log("msg", msg)

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
    return {
      statusCode: error.code,
      body: error.message,
    }
  }
}
