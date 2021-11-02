const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
    let result = sayHello();
    res.send({ Message: result });
});

module.exports = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

function sayHello() {
    return "Hello";
}