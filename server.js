require("dotenv").config();

// import express
const express = require("express");

// import middlewares
const cors = require("cors");
const morgan = require("morgan");

// import mongoose
const mongoose = require("mongoose");

// import post route
const postRoute = require("./api/routes/post.routes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const db = process.env.MONGODB_URI;

mongoose.connect(
  db,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("The database connection is successfully established");
  }
);

app.use("/api/post", postRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The server has started with port number ${port}`);
});
