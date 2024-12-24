getUserFromDatabase("user123", (err, user) => {
  if (err) {
    console.error("Error fetching user:", err);
    return;
  }

  getOrderHistory(user.id, (err, orders) => {
    if (err) {
      console.error("Error fetching order history:", err);
      return;
    }

    processOrders(orders, (err, total) => {
      if (err) {
        console.error("Error processing orders:", err);
        return;
      }

      sendEmail(user.email, total, (err) => {
        if (err) {
          console.error("Error sending email:", err);
        } else {
          console.log("Email sent successfully!");
        }
      });
    });
  });
});


//! Callback Hell
//?  Refers to the unreadability and unmanageability of deeply nested asynchronous code which happens when there are too many callbacks in a program, often leading to confusing and error-prone code.

