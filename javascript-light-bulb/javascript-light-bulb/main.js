const button = document.querySelector('button');
const body = document.querySelector('body');

function handleButton(event) {
  if (button.className === 'button-on') {
    button.className = 'button-off';
    body.className = 'off';
    return;
  }

  if (button.className === 'button-off') {
    button.className = 'button-on';
    body.className = 'on';
  }
}

button.addEventListener('click', handleButton);
