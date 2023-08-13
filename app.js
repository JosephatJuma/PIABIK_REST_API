const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("App is running");
});
//import main router
const main = require("./routes/main");
app.use("/v1/api", main);

app.listen(port, () => {
  console.log(`Piabik Rest API is running on port ${port}`);
});
