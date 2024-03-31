function binarSearch(arr,key){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2) ;
        if(arr[mid] === key){
            return mid;
        }
        if(arr[mid] < key){
            start = mid +1;
        }else{
            end = mid -1;
        }
    }
    return -1;
}
console.log(binarSearch([2,4,6,8,9,10],9));