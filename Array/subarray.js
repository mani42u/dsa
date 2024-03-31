function subArray(arr){
  let maxSum = Number.MIN_VALUE;
  for(let i = 0; i < arr.length; i++){
      let start = i;
    let subArr = [];
    for(let j = i; j < arr.length; j++){
        let end = j;
      for(let k = start; k <= end; k++){
        subArr.push(arr[k]);
      }
      let sum = subArr.reduce((sum,el) => (sum + el))
      if(maxSum < sum)
      maxSum = sum;
      console.log(subArr);
      subArr = []
    }
    
  }
  return maxSum;
}
let arr = [2,4,6,8,10]
console.log(subArray(arr));
    