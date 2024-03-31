function reverseArray(arr){
  let start = 0;
  let end = arr.length -1;
  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++; end--;
  }
  return arr;
}
let arr = [2,3,5,6,8,9]
//console.log(reverseArray(arr));
console.log(arr.reverse());