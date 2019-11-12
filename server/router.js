const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server connected");
});

module.exports = router;
