function decimalToBinary(n){
  let pow = 0;
  let binary = 0;
  while(n > 0){
    let rem = n % 2;
    binary = (rem * Math.pow(10,pow++)) + binary;
    n = parseInt(n / 2);
  }
  return binary;
}
console.log(decimalToBinary(4));