const isValid =  require("./validParentheses");

const s = "[](){}";
const s2 = "[](){";
const s3 = "[({})]";

console.log(isValid(s));
console.log(isValid(s2));
console.log(isValid(s3))
