# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the most deeply nested element that caused the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling, events bubble up through parent elements
- What DOM element property tells you what type of element it is?
  this
- What does the `element.closest()` method take as its argument and what does it return?
  takes a css selector and returns the closest parent element matching that selector, including itself
- How can you remove an element from the DOM?
  .remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add a conditional statement for one of the event.target's properties. bubbling makes it so you don't need to add a listener for each element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
