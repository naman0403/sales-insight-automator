const axios = require("axios")

exports.generateSummary = async (data) => {

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: `Analyze this sales dataset and write a short executive summary: ${data}`
            }
          ]
        }
      ]
    }
  )

  return response.data.candidates[0].content.parts[0].text

}