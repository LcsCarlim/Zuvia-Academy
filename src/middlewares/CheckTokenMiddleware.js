const jwt = require('jsonwebtoken');
const { tokenIsInListing } = require('./TokenListingMiddleware');
const UserModel = require('../database/model/UserModel');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      msg: 'Access denied!'
    });
  }

  const listed = tokenIsInListing(token);

  try {
    if (listed) throw new Error('Invalid token!');
    const secret = process.env.ACCESS_TOKEN;
    const decoded = jwt.verify(token, secret);

    const { id } = decoded;
    const user = await UserModel.findById(id).lean();

    if (!user) throw new Error('User not exists!');

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({
      error: 'Invalid token!',
      message: error.message
    });
  }
};
