function largest(arr){
  let max = Number.MIN_VALUE;
  for( i of arr){
    if( max < i)
    max = i;
  }
  return max;
}
function largest2(arr){
  let max = Math.max(...arr)
  return max;
}
console.log(largest2([2,5,8,3]));