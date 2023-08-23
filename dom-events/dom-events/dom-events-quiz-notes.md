# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to test and pull info from code
- What is the purpose of events and event handling?
  to act as triggers and responses accordingly, making code dynamic
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener
- What is a callback function?
  execute code in response to an event
- What object is passed into an event listener callback when the event fires?
  event type, the first argument
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  property of event object
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  one works (the first one), the other doesn't. you can define a function at the same time as assigning an event listener, but not in that way.

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
