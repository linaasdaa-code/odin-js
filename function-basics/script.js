function add7(number) {
  return number + 7;
}

console.log(add7(10));   // 17

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 2));   // 6

function capitalize(str) {
  const hurufPertama = str.charAt(0).toUpperCase();
  const sisanya = str.slice(1).toLowerCase();
  return hurufPertama + sisanya;
}

console.log(capitalize("abcd"));   // "Abcd"
console.log(capitalize("ABCD"));   // "Abcd"
console.log(capitalize("aBcD"));   // "Abcd"

function lastLetter(str) {
  return str.charAt(str.length - 1);
}

console.log(lastLetter("abcd"));   // "d"