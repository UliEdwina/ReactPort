const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port);

app.use(express.static("build"));

console.log("Server started on: " + port);
