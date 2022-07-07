const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student_Controller = require("./student/controller/Student_Controller");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/student", Student_Controller);

// DB connection and server start-up
const main = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://fardeenali:8319776090@cluster0.rjiu1.mongodb.net/test"
      )
      .then(() => {
        console.log("DB is connected");
      });

    app.listen(port, () => {
      console.log(`server is up and runnin on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
