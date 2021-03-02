export const required = {
  required: true,
  message: 'Required',
  trigger: 'blur',
};

export const number = {
  type: 'number',
  required: true,
  message: 'Must be a number',
  trigger: 'change',
};

export const date = {
  type: 'date',
  required: true,
  message: 'Must be a date',
  trigger: 'change',
};

export const emailId = {
  type: 'email',
  required: true,
  message: 'Must be a vaild email',
  trigger: 'change',
};

export const array = {
  type: 'array',
  required: true,
  message: 'Must be a array',
  trigger: 'change',
};

export const mobileNo = {
  min: 10,
  max: 10,
  message: 'Should be 10 digit',
  trigger: 'change',
};
