const minBracket = (str) => {
  const res = str.split('');
  const stack =[];
  for (let i = 0; i < str.length; i++)
  {
    if (res[i] === "(")
      stack.push(i)
    else if (res[i] === ')' && stack.length)
      stack.pop()
    else if (res[i] === ')')
      res[i] = ''
  }
  while(stack.length) {
    const currIndex = stack.pop();
    res[currIndex] = '';
  }
  return res.join('')
}

// testing 

console.log(minBracket("a)bc(d)"));
console.log(minBracket("(ab(c)d"));

