const { Schema, model } = require('mongoose');

const EpisodeSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  video_url: {
    type: String,
    required: true
  }

});

exports.default = model(EpisodeSchema, 'Episode');
