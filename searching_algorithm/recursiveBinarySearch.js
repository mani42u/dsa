function binarySearch(arr, key){
    return search( arr,key,0,arr.length-1);
}
function search(arr,key,start,end){
    if(start > end){
        return -1;
    }
    let mid = Math.floor((start + end)/2);
    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] < key){
        start = mid + 1;
    }else{
        end = mid - 1;
    }
    
    return search(arr,key,start,end);
}
console.log(binarySearch([2,4,5,7,9,10],10));
console.log(binarySearch([2,4,5,7,9,10],7));
console.log(binarySearch([2,4,5,7,9,10],1));