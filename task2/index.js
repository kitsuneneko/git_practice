function grid(num) {
  let res = '';
  //check
  if(num<0) { res = null; }
  else {
    //
    for(let i = 0; i < num; i++) {
      for(let j = 0; j <= num; j++) {
        if(j == num) {
          res += '\n';
        } else {
          res += `${String.fromCharCode((i + j) % 26 + 97)} `;
        }
      }
    }
  }
  

  return res;
};

console.log(grid(15));
console.log(grid(-1));