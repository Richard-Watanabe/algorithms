function areSimilar(a, b) {
  let are = true;
  let test = null;
  let test2 = null;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (test === null || test2 === null) {
        test = a[i]; test2 = b[i];
      } else {
        if (test !== b[i] || test2 !== a[i]) {
          are = false;
        }
      }
    }
  }
  return are;
}

areSimilar();
