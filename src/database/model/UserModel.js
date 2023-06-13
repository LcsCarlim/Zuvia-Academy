const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Created',
    enum: [
      'Created', 'Used', 'Expired'
    ]
  }
}, { _id: false }
);

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    selector: false
  },
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  cep: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'User'
  },
  code: {
    type: codeSchema,
    required: true
  },
  status: {
    type: String,
    default: 'pending_email_validation'
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

module.exports = mongoose.model('User', User);
