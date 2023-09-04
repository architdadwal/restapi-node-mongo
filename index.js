require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
require("dotenv").config();
//transfer the contents of express into new constant called app

const app = express();

//listen the chnages of this file on port 3000
app.use("/api", routes);
app.use(express.json());
app.listen(3000, () => {
  console.log("server started at ${3000}");
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("databse connected");
});
