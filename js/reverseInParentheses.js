function reverseInParentheses(s) {
  while (true) {
    const close = s.indexOf(')');
    if (close === -1) { break; }
    const open = s.substring(0, close).lastIndexOf('(');
    const beginning = s.substring(0, open);
    const middle = s.substring(open + 1, close).split('').reverse().join('');
    const end = s.substring(close + 1, s.length);
    s = beginning + middle + end;
  }
  return s;
}

reverseInParentheses();
