const parser = require("../services/fileParser")
const ai = require("../services/aiService")
const email = require("../services/emailService")

exports.analyze = async (req, res) => {

  try {

    const file = req.file.path
    const userEmail = req.body.email

    const data = await parser.parse(file, req.file.originalname)

    const summary = await ai.generateSummary(data)

    await email.sendEmail(userEmail, summary)

    res.json({ message: "Summary sent successfully" })

  } catch (err) {

    res.status(500).json({ error: err.message })

  }

}