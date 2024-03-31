function binarySearch(arr,key){
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = parseInt((start + end) / 2) ;
    if(arr[mid] === key)
    return `${key} found at index:${mid}`;
    if(arr[mid] < key)
    start = mid + 1;
    else
    end = mid - 1;
  }
  return "key not found"
}
let arr = [2,3,5,6,8,9]
console.log(binarySearch(arr,10));