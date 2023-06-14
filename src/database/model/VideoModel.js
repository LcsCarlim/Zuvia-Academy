const mongoose = require('mongoose');

const Video = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }

});
