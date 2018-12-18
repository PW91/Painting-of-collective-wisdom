const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  color: {
    type: String,
    required: true
  },
  deg: {
    type: Number,
    required: true
  },
  font: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  word: {
    type: String,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
