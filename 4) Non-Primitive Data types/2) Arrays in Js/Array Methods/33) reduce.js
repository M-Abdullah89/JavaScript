//? returns a value after passing an array to a function

const arr = [1,2,3,4,5,6,7];

function red (num1 ,num2){
    return num1 + num2;
}

const sum = arr.reduce(red);
console.log(sum);//*28

//this is because
//* first it will take 1 as num1 and 2 as num2
//* It will add them (1+2=3)
//* and then take it as num1(3) and 3 as num2 (3+3 =6)
//* it will take the answer as an arguement(num1) and add it with num2(4)6+5=10
//* and then add 5 to 10 = 15
//* 15 + num2(6) = 21
//* 21 + num2(7) = 28