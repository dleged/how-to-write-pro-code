const { createUser, updateUser } = require('./api/user');

function saveUser(user) {
  if (user.username == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

function validateUser() {
  return [...validateUser(user.username), ...validatePassword(user.password)];
}

function validateUser(username) {
  const errors = [];
  if (!username) errors.push('Username is required');
  if (username != null && username.length < 3) {
    errors.push('Username must be at least 3 characters or more characters');
  }
  return errors;
}

function validatePassword(password) {
  const errors = [];
  if (!password) errors.push('Username is required');
  if (password != null && password.length < 8) {
    errors.push('Password must be at least 8 characters or more characters');
  }
  return errors;
}

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
  username: 'fathzzz',
  password: 'password',
};

const errors = validateUser(user);

if (errors.length) {
  return errors.forEach(console.error);
}

saveUser(user);
