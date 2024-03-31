function getNthTerm(n){
  if(n < 2){
    return n;
  }
  return getNthTerm(n - 1) + getNthTerm(n - 2);
}
console.log(getNthTerm(6));