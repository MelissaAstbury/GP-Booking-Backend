const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const config = require("./config");

const userRoutes = require("./routes/user");
const appointmentRoutes = require("./routes/appointment");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    `mongodb+srv://${config.user}:${config.password}@cluster-fuqu4.mongodb.net/mel_gp?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Connection Failed!", err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/appointment", appointmentRoutes);

module.exports = app;
