const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("./config");

const userRoutes = require("./routes/user");

// mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    `mongodb+srv://${config.user}:${config.password}@cluster-fuqu4.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Connection Failed!", err);
  });

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user", userRoutes);

module.exports = app;
