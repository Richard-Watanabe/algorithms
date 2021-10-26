function makeArrayConsecutive2(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  const statueCount = max - min + 1 - statues.length;
  return statueCount;
}

makeArrayConsecutive2();
