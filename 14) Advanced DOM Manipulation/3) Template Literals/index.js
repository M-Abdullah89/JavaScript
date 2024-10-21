//! Template literals are strings enclosed by backticks (`) that allow for embedded expressions and multi-line strings. They are particularly useful for generating HTML dynamically.

//?  When generating HTML dynamically, you often need to insert variables and expressions into your HTML structure. Template literals make this process straightforward and readable.



const user = {
    name: 'Abdullah',
    age: 15,
    country: 'Pakistan'
};

const userCard = `
    <div class="user-card">
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>City: ${user.city}</p>
    </div>
`;

document.body.innerHTML = userCard;


//? it is useful for Displaying user profiles, lists, or any dynamic content fetched from an API.
//? Creating reusable HTML templates for components in frameworks like React or Vue.
