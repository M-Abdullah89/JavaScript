// //! Intersection means that the element is on the screen
// const cards = document.querySelectorAll('.card');

// const observer=new IntersectionObserver(entries =>{
//     entries.forEach((entry) => {
//         entry.target.classList.toggle("show",entry.isIntersecting)
//     })
//     console.log(entries)
// });
// cards.forEach((card)=>{
//     observer.observe(card);
// })

//! till now the animation is triggering off screen this is because is intersecting returns true even if one pixel of element is visible on the screen

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    //! if we want to show animation only one time
    // if(entry.isIntersecting) observer.unobserve(entry.target)
  }),
    {
      threshold: 1,
      rootMargin: "100px", //! it will shrink the container
    };
});
cards.forEach((card) => {
  observer.observe(card);
});

//! creating infinite cards load

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return
  loadNewCards()
  lastCardObserver.unobserve(lastCard.target)
  lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));
const cardContainer = document.querySelector(".card-container");
function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}


