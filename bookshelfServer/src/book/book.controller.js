const Books = require("../models/bookSchema");
const jwt = require("jsonwebtoken");

const createBook = async (req, res) => {
  // console.log(req.body);
  const book = new Books(req.body);

  const token = jwt.sign(
    {
      title: req.body.title,
      author: req.body.author,
      publication: req.body.publication,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m", issuer: req.body.author }
  );

  // console.log("token create = ", token);

  try {
    book.token = token;
    await book.save();

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    res.status(201).json({ book });
  } catch (error) {
    res.status(400).json({ srror: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const data = await Books.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBook, getBooks };
