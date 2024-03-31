function makePair(arr){
  let pairedArray = [];
  for(let i = 0; i< arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      pairedArray.push(`(${arr[i]},${arr[j]})`);
    }
  }
  return pairedArray;
}
let arr= [2,4,6,8,10]
console.log(makePair(arr)); 