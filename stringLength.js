const stringLength = (string) => {
  const length = string.length;

  if (length < 1) throw new Error('String cannot be empty!');
  if (length > 10) throw new Error('String cannot be more than 10 characters long');

  return length;
}

module.exports = stringLength;