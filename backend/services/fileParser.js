const fs = require("fs")
const csv = require("csv-parser")
const XLSX = require("xlsx")

exports.parse = (filePath, originalName) => {

  if (originalName.endsWith(".csv")) {

    return new Promise((resolve, reject) => {

      let results = []

      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve(JSON.stringify(results.slice(0,50))))
        .on("error", reject)

    })

  }

  else if (originalName.endsWith(".xlsx")) {

    const workbook = XLSX.readFile(filePath)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    const data = XLSX.utils.sheet_to_json(sheet)

    return JSON.stringify(data.slice(0,50))
  }

  else {
    throw new Error("Unsupported file type")
  }

}