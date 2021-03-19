function toAccounting(n) {
  if (n == null) return;
  if (n < 0) return `(${Math.abs(n)})`;
  return n.toString();
}

console.log(toAccounting(undefined));
console.log(toAccounting(-5));
console.log(toAccounting(10));
console.log(toAccounting(200));
