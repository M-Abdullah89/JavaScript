//! groups elements of an object according to string values returned from a callback function.
//? does not change the original object.

const people = [
    { name: 'Abc', age: 25 },
    { name: 'Def', age: 30 },
    { name: 'Ghi', age: 25 },
    { name: 'Jkl', age: 30 },
    { name: 'Mno', age: 35 }
  ];
  
  const groupedByAge = Map.groupBy(people, person => person.age);
  
  console.log(groupedByAge);
  // Output:
  // Map(3) {
  //   25 => [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
  //   30 => [ { name: 'Bob', age: 30 }, { name: 'David', age: 30 } ],
  //   35 => [ { name: 'Eve', age: 35 } ]
  // }
  