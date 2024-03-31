function checkPalindrome(str){
  let rev = str.split("").reverse().join("")
  if(rev === str)
  return true;
return false;
}
console.log(checkPalindrome("moom"));