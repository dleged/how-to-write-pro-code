const { createUser, updateUser } = require('./api/user');

function saveUser(user) {
  const errors = [];

  if (user.username) {
    if (user.username.length < 3) {
      errors.push('Username must be at least 3 characters or more characters');
    }
  } else {
    errors.push('Username is require');
  }

  if (user.password) {
    if (user.password.length < 8) {
      errors.push('Password must be at least 3 characters or more characters');
    }
  } else {
    errors.push('Password is require');
  }

  if (errors.length) {
    errors.forEach(console.error);
  }

  if (user.id == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

const user = {
  username: 'faithzzz',
  password: 'password',
};
saveUser(user);
