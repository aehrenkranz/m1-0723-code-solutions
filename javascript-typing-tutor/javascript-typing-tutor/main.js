const eleSpan = document.querySelectorAll('span');
let currentKey = 0;

function handleKeyPress(event) {
  if (event.key === eleSpan[currentKey].textContent) {
    if (currentKey < eleSpan.length - 1) {
      eleSpan[currentKey].className = 'g';
      eleSpan[currentKey + 1].classList.toggle('u');
      currentKey++;
    } else if (currentKey === eleSpan.length - 1) {
      eleSpan[currentKey].className = 'g';
    }
    return;
  }
  if (event.key !== eleSpan[currentKey].textContent) {
    eleSpan[currentKey].className = 'r u';
  }
}

addEventListener('keyup', handleKeyPress);
