function isIPv4Address(inputString) {
  const array = inputString.split('.');
  if (array.length !== 4) return false;
  return array.every(x => x !== '' && Number(x) >= 0 && Number(x) <= 255);
}

isIPv4Address();
