//check a given number is power of two or not
function isPowerOftwo(n){
  if(n <= 1){
    return false;
  }
  while(n > 1){
    if(n % 2 !== 0){
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOftwo(2));
console.log(isPowerOftwo(3));
console.log(isPowerOftwo(8));
console.log(isPowerOftwo(9));