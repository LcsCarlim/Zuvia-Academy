const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  phone_number: {
    type: String,
    required: true,
    unique: true
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

User.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;

  next();
});

module.exports = mongoose.model('User', User);
