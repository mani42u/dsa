function getFact(n){
    if(n === 1){
        return 1;
    }
    return n * getFact(n - 1);
}
console.log(getFact(5));