
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?


Answer: 1.
getElementById: Provide Single Element Object, Only can call with document.
getElementsByClassName: Can call from document or Element, it is live HTML collection, support only Class name.
querySelector: Cal call any valid CSS Selector but type should be string, select only first match.
querySelectorAll: Cal call any valid CSS Selector but type should be string (like querySelector), but can select all matching Elements.

Answer: 2.
If I create and insert a new element into the DOM(Document Object Module) than first create a element using {document.createElement()} and than insert the element into the existing parent element. insert parent element mathod is like {document.appendChild()}.

Answer: 3.
Event bubbling is a technique of propagation thats point out where I trigger or happend a event then then this technique first handle task and propagate upward from child to parant and child to parent to it's root.

Answer: 4.
Event Delegation is like a machine where has a design. where A event listener is Connacted. It's can be manage events for its all desandent whose are connacted this machin.
It's increase memory efficiency and improving page performance. automatically handle event and simplifies the code so it easier to manage edit error.

Answer: 5.
preventDefault(): It's stop browser's default method to the event. It is commonly used in forms, drag-and-drop, links, checkbox etc. Basically used for cancel default browser action.
stopPropagation(): It is used for stop event moving forward or down the DOM propagation that means if inside a button used stopPropagation() mathod then it's prevent event handler from being triggered. resutl it's stop evetn bubbling.



