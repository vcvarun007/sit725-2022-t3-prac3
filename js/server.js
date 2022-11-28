const express = require("express");
const app = express();
const port = 3000;

const addNumbers = (number1, number2) => {
  var num1 = parseInt(number1);
  var num2 = parseInt(number2);
  var result = num1 + num2;
  return result;
};

app.get("/", (req, res) => {
  res.redirect("/addTwoNumbers");
});

app.get("/addTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = addNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
