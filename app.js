const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const connectDB = require("./server/config/db");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) }
    // Date.now() - 30 * 24 * 60 * 60 * 1000
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
connectDB();

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//Routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/auth"));
app.use("/", require("./server/routes/dashboard"));

//error page
app.get("*", (req, res) => {
  // res.status(404).send("404 Page Note Found.");
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
