const express = require("express");
const core = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const BookRoutes = require("./src/book/book.routes");
const UserRoutes = require("./src/user/user.routes");

require("dotenv").config();

// middleware
const app = express();
app.use(core());
app.use(bodyParser.json());
app.use(cookieParser()); 

const port = process.env.PORT || 5000;
const url = process.env.DATABASEURL;

//mongoose
mongoose.set("strictQuery", true);

UserRoutes(app);
BookRoutes(app);

const start = async () => {
  try {
    await mongoose.connect(url);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();

