const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/todos", (req, res) => {
  fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    console.log("data를 보내주겠습니다");
    res.status(201).send(data);
  });
});

app.listen(PORT, () =>
  console.log(`서버가 ${PORT}번 포트에서 연결되었습니다.`)
);
