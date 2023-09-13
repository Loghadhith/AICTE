const express = require("express");
const app = express();

PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Testing");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
