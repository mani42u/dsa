function binaryToDecimal(n){
  let pow = 0;
  let decimal = 0;
  while(n > 0){
    let rem = n % 10;
     decimal += rem * Math.pow(2,pow);
    pow++;
    n = parseInt(n / 10);
  }
  return decimal;
}
console.log(binaryToDecimal(10101010));