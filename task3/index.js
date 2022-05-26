function isValidParentheses(str) {
  const res = str.split('(').length == str.split(')').length;
  return res;
};

console.log(isValidParentheses('()'));

console.log(isValidParentheses(')(()))'));

console.log(isValidParentheses('('));

console.log(isValidParentheses('(())((()())())'));