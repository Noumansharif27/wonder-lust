const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then((res) => {
    console.log(`Connected to DB`);
  })
  .catch((ERROR) => {
    console.log(`ERROR  --- ${ERROR}`);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chat");
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`App is Listning at port: ${PORT}`);
});
