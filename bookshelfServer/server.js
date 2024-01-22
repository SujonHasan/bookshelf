const express = require("express");
const core = require("cors");
const bodyParser = require('body-parser')
const Books = require("./models/bookSchema");

require("dotenv").config();

// middleware
const app = express();
app.use(core());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const url = process.env.DATABASEURL;

//mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//create object
const book = new Books({
  title: "Dopamine Detox",
  author: "Thibaut Meurisse",
  publication: 2021,
  price: 50,
  thumbnail: "https://i.ibb.co/Q99KYtQ/Dopamine-Detox.jpg",
  isFavourite: true,
});

// book.save();

app.get("/", (req, res) => {
  res.send(`Server is Running port ${port}`);
});

app.get("/books", async (req, res) => {
  try {
    const data = await Books.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/books", async (req, res) => {

  console.log(req.body);
  const book = new Books(req.body);

  try {
    await book.save();
    res.status(201).json({book})
  } catch (error) {
    res.status(400).json({ srror: error.message });
  }
});

const start = async () => {
  try {
    mongoose.connect(url);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
