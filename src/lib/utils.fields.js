export const validateInputClass = (valid, validate) => {
  if (validate) {
    if (valid) {
      return 'id-success';
    }
    return 'id-danger';
  }
  return '';
};

export const validateFieldIcon = (valid, validate) => {
  if (validate) {
    if (valid) {
      return 'check';
    }
    return ' exclamation-triangle';
  }
  return '';
};
