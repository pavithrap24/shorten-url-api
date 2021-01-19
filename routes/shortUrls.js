const Joi = require("joi");
const url = require("url");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const ShortUrl = require("../models/shortUrl");

router.get("/:id", async (req, res) => {
  const longUrl = await ShortUrl.findById(req.params.id);
  res.json(longUrl);
});

router.post("/", async (req, res) => {
  let shortUrl = new ShortUrl({
    url: req.body.url,
  });
  try {
    shortUrl = await shortUrl.save();
    res.json(shortUrl);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
