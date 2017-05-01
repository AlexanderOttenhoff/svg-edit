export default d => d.split(/(?=[a-z])/).map(a => ({
  command: a[0],
  args: (a.match(/-?[0-9]+(?:\.[0-9]+)?/g) || []).map(Number),
}));
