const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  studentFirstName: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  location: {
    type: String,
  },
});

const studentModel = mongoose.model("studentModel", PostSchema);

module.exports = studentModel;