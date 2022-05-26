function calculate(str) {

//check

  //
  const forward = dots => dots.split('').length;
  const backward = num => '.'.repeat(num);
  //
  const chunk = str.split(' ');
  const fnum = forward(chunk[0]);
  const snum = forward(chunk[2]);
  let operation = chunk[1];
  //check 
  if(operation == '//') { operation = '/'; }
  else if(operation == '-') {
    if(fnum < snum) { 
      console.error('Operation "-": First number must be larger than second.')
    }
  }  

  const calc = eval(`${fnum} ${operation} ${snum}`);

  return backward(calc);
};
console.log('res:',calculate("..... + ..............."));
console.log('res:',calculate("..... - ..."));
console.log('res:',calculate("..... - ."));
console.log('res:',calculate("..... * ..."));
console.log('res:',calculate("..... * .."));
console.log('res:',calculate("..... // .."));
console.log('res:',calculate("..... // ."));
console.log('res:',calculate(". // .."));
console.log('res:',calculate(".. - .."));