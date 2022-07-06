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

const studentModel = mongoose.model("PostModel", PostSchema);

module.exports = studentModel;