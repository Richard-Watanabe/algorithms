function palindromeRearranging(inputString) {
  var newString = inputString.split(' ').join('');
  var reversed = '';
  for (var i = newString.length - 1; i >= 0; i--) {
    reversed += newString[i];
  }
  if (newString === reversed) {
    return true;
  } else {
    return false;
  }
}

palindromeRearranging();
