const mongoose = require("mongoose");
const express = require("express");
const app = express();
const shortUrl = require("./routes/shortUrls");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/shortUrl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB.."))
  .catch((err) => console.error("Could not connect to MongoDB.."));
// const connection = mongoose.connection;
// connection.on("open", () => console.log("connected.."));

app.use(express.json());
app.use(cors()); // need to use before routes
app.use("/shortUrl", shortUrl);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
