module.exports = async ({ user, code }) => {
  // eslint-disable-next-line eqeqeq
  if (user.code.code != code) {
    throw new Error('Invalid code');
  }

  user.code = { ...user.code, status: 'Used' };
  user.status = 'Approved';

  await user.save();

  return user;
};
