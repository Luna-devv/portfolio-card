const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(4005, () => {
    console.log("running on port 4005")
})