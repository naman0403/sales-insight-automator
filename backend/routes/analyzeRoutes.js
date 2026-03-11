const express = require("express")
const multer = require("multer")
const analyzeController = require("../controllers/analyzeController")

const router = express.Router()

const upload = multer({ dest: "uploads/" })

router.post("/analyze", upload.single("file"), analyzeController.analyze)

module.exports = router