const paren = {
  "(": ")",
  "{": "}",
  "[":"]"
};

const valid = (s) => {
  const stack = [];
  if(s.length === 0) return true;
  for (let i =0; i < s.length; i++) {
    if(paren[s[i]]) {
      stack.push(s[i]);
    } else {
      const opening = stack.pop();
      const closing = paren[opening];
      
      if(closing !== s[i]) return false;
    }
  }
  return stack.length === 0;
};


/// testing

const test1 = "({[]})";
const test2 = "";
const test3 = "(){}";
console.log(valid(test3));
