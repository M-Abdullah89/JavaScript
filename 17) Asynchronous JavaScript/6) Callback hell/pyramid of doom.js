isLoggedIn(user, (err, loggedIn) => {
  if (err) {
    console.error('Error checking login:', err);
    return;
  }
  if (loggedIn) {
    getFavoriteRestaurant(user, (err, restaurant) => {
      if (err) {
        console.error('Error fetching favorite restaurant:', err);
        return;
      }
      getMenu(restaurant, (err, menu) => {
        if (err) {
          console.error('Error fetching menu:', err);
          return;
        }
        placeOrder(menu[0], (err, order) => {
          if (err) {
            console.error('Error placing order:', err);
            return;
          }
          sendConfirmation(order, (err) => {
            if (err) {
              console.error('Error sending confirmation:', err);
            } else {
              console.log('Order confirmed!');
            }
          });
        });
      });
    });
  } else {
    console.log('User not logged in.');
  }
});


//! Pyramid of Doom
//? Refers to the visual structure of nested callbacks, where code becomes increasingly indented to the right, resembling a "pyramid" shape.

//!  pyramid of doom is hard to read whereas callback hell is hard to manage
