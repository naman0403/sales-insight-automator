const nodemailer = require("nodemailer")

exports.sendEmail = async (receiver, summary) => {

  const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }

  })

  await transporter.sendMail({

    from: process.env.EMAIL_USER,
    to: receiver,
    subject: "Sales Insight Report",
    text: summary

  })

}