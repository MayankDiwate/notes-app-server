const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/Route");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5500;

const mongoDbPath =
  "mongodb+srv://mayankdiwate007:mayank007@cluster0.pqrrsrw.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(() => {
  // Home Route
  app.get("/", (req, res) => {
    const response = { message: "Api Works Properly !" };
    res.json(response);
  });

  app.use("/notes", Router);
});

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
