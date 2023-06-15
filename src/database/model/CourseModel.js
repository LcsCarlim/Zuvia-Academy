const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  introduction_video: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Course', CourseSchema);
