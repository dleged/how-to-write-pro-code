const { createUser, updateUser } = require('./api/user');
const { validationMessages, printErrors } = require('./pro/validation');

function saveUser(user) {
  if (user.username == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

function validateUser(user) {
  const validater = {
    username: {
      required: true,
      length: 3,
    },
    password: {
      required: true,
      length: 8,
    },
  };

  const errors = validationMessages(validater, user);
  return {
    valid: Object.values(errors).every((message) => message.length === 0),
    errors,
  };
}

const user = {
  username: '189998',
  password: 'password',
};

const { valid, errors } = validateUser(user);

if(valid){
  saveUser(user);
}else{
  printErrors(errors);
}
