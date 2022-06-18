/**
* contains isValidParentheses
* space: O(n)
* time: O(n)
*/
const parens = {
  "(": ")",
  "[": "]",
  "{": "}"
};


const isValidParentheses = s => {
  if (s.length === 0) return true;
  const stack = [];
  for(let i = 0; i < s.length; i++) {
     if (parens[s[i]]){
       stack.push(s[i]);
     } else {
       const openingBracket = stack.pop();
       const closingBracket = parens[openingBracket];
       if (closingBracket !== s[i])  return false;
     }
  }
  return stack.length === 0;
};


module.exports = isValidParentheses;
