const jwt = require("jsonwebtoken");
const Books = require("./bookSchema");

const createBook = async (req, res) => {
  try {
    const book = new Books(req.body);
    await book.save();
    res.status(201).json({ book });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
