function reverseString(str) {
    return str.split('').reverse().join('');
}

let str = "wow";
const reversed = reverseString(str);
if (str === reversed){  
    console.log("It is a Palindrome ")
}
else{
    console.log("It is not a Palindrome ")

}