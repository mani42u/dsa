function countPair(arr){
  let count = 0;
  for(let i = 0; i< arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      count++;
    }
  }
  return count;
}
let arr= [2,4,6,8,10]
console.log(countPair(arr));