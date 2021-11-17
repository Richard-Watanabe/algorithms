function isIPv4Address(inputString) {
  const newString = inputString.split('.');
  if (newString.length !== 4) {
    return false;
  }
  for (let i = 0; i < 4; i++) {
    if (newString[i] === '' || isNaN(newString[i]) || parseInt(newString[i]) < 0 || parseInt(newString[i]) > 255) {
      return false;
    }
  }
  return true;
}

isIPv4Address();
