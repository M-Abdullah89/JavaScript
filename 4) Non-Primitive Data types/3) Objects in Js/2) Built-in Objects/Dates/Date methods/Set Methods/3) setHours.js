//! sets the hour of a date can also set minutes, seconds and milliseconds.

const d = new Date();
d.setHours(15, 35, 1);
console.log(d.toTimeString())