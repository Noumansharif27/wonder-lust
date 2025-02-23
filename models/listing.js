const mongoose = require("mongoose");

const listningSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "./public/assetsdefault-1.avif",
    set: (v) => (v === "" ? "./public/assetsdefault-1.avif" : v),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("listing", listningSchema);
