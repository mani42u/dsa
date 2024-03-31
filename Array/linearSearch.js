function linearSearch(arr,key){
  for(let i = 0; i < arr.length; i++){
    if(key === arr[i])
    return true;
  }
  return false;
}
function searchElement(arr,key){
  return arr.includes(key);
}
console.log(searchElement([2,4,3,6,8,5],20));