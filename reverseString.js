const reverseString = (string) => {
  const characters = string.split('');
  characters.reverse();

  return characters.join('');
}

module.exports = reverseString;