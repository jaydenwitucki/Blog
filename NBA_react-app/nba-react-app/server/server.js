const express = require("express");
const NBA = require('nba');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});