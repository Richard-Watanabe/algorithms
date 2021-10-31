function commonCharacterCount(s1, s2) {
  let count = 0;
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  for (let i = 0; i < s1Array.length; i++) {
    const index = s2Array.indexOf(s1Array[i]);
    if (index !== -1) {
      s2Array.splice(index, 1);
      count += 1;
    }
  }
  return count;
}

commonCharacterCount();
