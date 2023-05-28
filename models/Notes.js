const mongoose = require("mongoose");

const colorValidator = (v) => /^#([0-9a-f]{3}){1,2}$/i.test(v);

const noteScheme = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  color: {
    type: String,
    validator: [colorValidator, "Invalid color"],
    required: true,
  },
});

module.exports = mongoose.model("Note", noteScheme);
