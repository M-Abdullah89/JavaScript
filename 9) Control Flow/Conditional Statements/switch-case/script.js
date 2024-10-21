//! same as if-else


let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break; //* important to jump out of the case
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default: //* if none matches the case
    dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday
