const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

// validateUrl(){

// }

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
