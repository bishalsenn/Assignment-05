1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById selects a single element by its ID attribute. getElementsByClassName returns a live HTMLCollection of elements with the specified class name. querySelector returns the first element that matches a CSS selector, while querySelectorAll returns a static NodeList of all matching elements.

2. How do you create and insert a new element into the DOM?
Ans:To create a new element: const newElement = document.createElement('div');
To insert it: Use methods like appendChild()

3. What is Event Bubbling and how does it work?
Ans:Event bubbling is the process where an event starts from the target element and propagates upward through its ancestor elements in the DOM tree until it reaches the document object.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation is a technique where instead of adding event listeners to individual elements, you add a single event listener to a parent element that will handle events triggered by its child elements. It's useful for handling events on dynamically created elements and improving performance.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() prevents the default browser behavior for an event. stopPropagation() stops the event from bubbling up or capturing down the DOM tree, but doesn't prevent default behavior.
