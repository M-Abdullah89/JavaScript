let array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
}
}
console.log("The max value in given array is ",max)