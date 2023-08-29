const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const connectDB = require("./server/config/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
connectDB();

//Routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

//error page
app.get("*", (req, res) => {
  // res.status(404).send("404 Page Note Found.");
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
