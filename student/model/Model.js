const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  studentFirstName: {
    type: String,
    required: [true, "please enter the name"],
  },
  collegeName: {
    type: String,
    required: [true, "please enter collage name"],
  },
  location: {
    type: String,
    required: [true, "please enter the location"],
  },
});

const studentModel = mongoose.model("studentModel", PostSchema);

module.exports = studentModel;
