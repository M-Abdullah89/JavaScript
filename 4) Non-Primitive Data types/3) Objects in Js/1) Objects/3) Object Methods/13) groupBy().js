//! groups elements of an object according to string values returned from a callback function.



//? For example if we want to group objects based on the year they signin
//? create an array of objects
const persons = [
    {name : "Abc", signinYear : 2022},
    {name : "Def", signinYear : 2023},
    {name : "Ghi", signinYear : 2022},
    {name : "Ghi", signinYear : 2024},
    {name : "Ghi", signinYear : 2023},
    {name : "Ghi", signinYear : 2024},
]

const obj = Object.groupBy(persons,({signinYear})=> signinYear);
console.log(obj);

//? returns an object and each property (keys) represents an array which is grouped like 2022 , 2023 , 2024 in this case.The array itself has objects that has key value pair that belong to that group

/*
! object
{
!Array
 '2022': [
 !object
    { name: 'Abc', signinYear: 2022 },
    { name: 'Ghi', signinYear: 2022 }
  ],
  '2023': [
    { name: 'Def', signinYear: 2023 },
    { name: 'Ghi', signinYear: 2023 }
  ],
  '2024': [
    { name: 'Ghi', signinYear: 2024 },
    { name: 'Ghi', signinYear: 2024 }
  ]
}
    */