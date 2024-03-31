function isPrime(n){
  if(n === 2)
  return true;
for(let i = 2; i <= Math.sqrt(n); i++){
  if(n % i === 0)
  return false;
}
return true;
}
function primeInRange(n){
  for(let i = 2; i<= n; i++){
    if(isPrime(i))
    console.log(i);
  }
}
primeInRange(30);