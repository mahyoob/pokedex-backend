const express = require("express");
const data = require("./pokedex.json");

const server = express();
let port = process.env.PORT || 3000;

server.get("/:id", function (req, res) {
  const pok = data.filter((obj) => obj.id == req.params.id);

  res.send(pok);
});

server.listen(port, (err) => {
  if (err) {
    console.log("there is an error ", err);
    return;
  }
  console.log(`server is listning on port ${port}`);
});
