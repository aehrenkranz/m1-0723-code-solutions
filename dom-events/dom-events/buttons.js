function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
const click1 = document.querySelector('.click-button');
click1.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
const hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
const click2 = document.querySelector('.double-click-button');
click2.addEventListener('dblclick', handleDoubleClick);
