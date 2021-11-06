function alternatingSums(a) {
  if (a.length === 1) return [...a, 0];
  if (a.length === 2) return a;
  const group = { a: [], b: [] };
  a.forEach((weight, i) => {
    i % 2 === 0 ? group.a.push(weight) : group.b.push(weight);
  });
  Object.keys(group).forEach(key => {
    group[key] = group[key].reduce((acc, val) => acc + val);
  });
  return Object.values(group);
}

alternatingSums();
