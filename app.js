const express = require("express");
require("dotenv").config();
const app = express();
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

require("./model/index");

// telling nodejs to set its view engine to ejs
app.set("view engine", "ejs");

app.use(express.json()); // cT = application/json handle
app.use(express.urlencoded({ extended: true })); // cT = application/x-www-form-urlencoded

app.use(express.static("./uploads/"));
app.use(express.static("./public/styles"));
app.use("", blogRoutes);
app.use("",userRoutes)
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`NodeJs project has started at port ${PORT} `);
});
