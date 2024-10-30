//? returns a value after passing an array to a function
//? starts from right to left
const arr = [1,2,3,4,5,6,7];

function red (num1 ,num2){
    return num1 + num2;
}

const sum = arr.reduce(red);
console.log(sum);//*28

//this is because
//* first it will take 7 as num1 and 6 as num2
//* It will add them (7+6=13)
//* and then take it as num1(13) and 5 as num2 (13+5 =18)
//* it will take the answer as an arguement(num1) and add it with num2(4)18+4=22
//* and then add 3 to 22 = 25
//* 25 + num2(2) = 27
//* 25 + num2(1) = 28