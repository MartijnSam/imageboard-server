const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
function onListen() {
    console.log(`Listening on :${PORT}`);
  }


app.listen(PORT, onListen);