function validationMessages(validation, object) {
  return Object.entries(validation).reduce(function (
    errors,
    [property, requirements]
  ) {

    errors[property] = [];
    if (requirements.length) {
      const errorMessages = validateLengthMessage(object[property],requirements.length);
      if (errorMessages) errors[property].push(errorMessages);
    }
    if (requirements.required) {
      
      const errorMessages = validateRequiredMessage(object[property]);
      if (errorMessages) errors[property].push(errorMessages);
    }
    return errors;
  },
  {});
}

function validateLengthMessage(value, length) {
  if (!value) return;
  if (value.length >= length) return;

  if (value.length < length) {
    return ` must be at least ${length} characters or more characters`;
  }
}

function validateRequiredMessage(value) {
  if (value) return;
  return ` is required`;
}

function printErrors(errors) {
  Object.entries(errors).forEach(function ([property, messages]) {
    messages.forEach(function (message) {
      console.log(property + messages);
    });
  });
}

module.exports = {
  validationMessages,
  printErrors,
};
