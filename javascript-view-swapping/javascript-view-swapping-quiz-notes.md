# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the element that was originally targeted when the event took place
- What is the affect of setting an element to `display: none`?
  hides the element from the page
- What does the `element.matches()` method take as an argument and what does it return?
  takes a css selector, returns boolean
- How can you retrieve the value of an element's attribute?
  .getAttribute
- At what steps of the solution would it be helpful to log things to the console?
  all throughout
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  you would need to create an event listener for each element
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  have an if statement for each possible view, compared against the event.target

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
