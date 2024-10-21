//! The current phase of the event flow (capturing, at target, bubbling).

const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    console.log(event.eventPhase); // Output: 2 (AT_TARGET phase)
});

/*
!The eventPhase property returns 2 because it indicates the current phase of the event flow. In the context of event handling in JavaScript, there are three phases:

?Capturing Phase (1): The event starts from the root and travels down to the target element.
?At Target Phase (2): The event has reached the target element.
?Bubbling Phase (3): The event bubbles up from the target element back to the root.
 */