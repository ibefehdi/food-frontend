const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  request.get(
    "https://dev-be.sulhuf.com:3000/itemsmaster/getall?page=1&itemStatus=Published&resultsPerPage=10#",
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        res.send(body);
      }
    }
  );
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;

  request.get(
    "https://dev-be.sulhuf.com:3000/itemsmaster/getbyid/" + id,
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        res.send(body);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("listening on *:3001");
});
