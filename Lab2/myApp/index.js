const express = require("express")
const app = express()
const port = 7000

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})