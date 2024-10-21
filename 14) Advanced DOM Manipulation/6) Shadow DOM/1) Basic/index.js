//! Shadow DOM works by allowing you to attach a hidden, separate Document Object Model (DOM) to an element. This hidden DOM is known as the 'Shadow DOM', 
//? The element it's attached to is referred to as the 'Shadow Host'. 
//? A Shadow DOM can have additional Shadow Hosts nested under it—this is called a Shadow Tree.
const host = document.getElementById('shadow-host');
    
// Attach a shadow root to the host element
const shadowRoot = host.attachShadow({ mode: 'open' });

shadowRoot.innerHTML = `
  <style>
    p {
      color: green;
      font-weight: bold;
      font-family:Segoe Ui;
    }
  </style>
  <p>This is inside the shadow DOM!</p>
`;
//! If you inspect it it will show #shadow-root(open) in the div