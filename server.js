const express = require("express");
const app = express();

app.use(express.static(`${__dirname}`));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(4000, () => {
  console.log("App listening on 4000");
});
