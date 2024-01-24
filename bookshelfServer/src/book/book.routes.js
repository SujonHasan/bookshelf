const authenticate = require("../middlewares/authenticate");
const { createBook, getBooks } = require("./book.controller");

function BookRoutes(app) {

  app.get("/", (req, res) => {
    res.send(`Server is Running port ${port}`);
  });

  app.route("/books")
        // .get(getBooks)
        .get(authenticate, getBooks) // authenticate use postman
        .post(createBook);
}

module.exports = BookRoutes;
