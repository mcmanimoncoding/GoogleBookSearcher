const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: String,
  title: { type: String, required: true },
  img: {
    type: String,
  },
  link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
