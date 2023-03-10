const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const ans = num1 + num2;
  res.send("The result is " + ans);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
