const button = document.querySelector('button');
const html = document.querySelector('html');

function handleButton(event) {
  if (button.className === 'button-on') {
    button.className = 'button-off';
    html.className = 'off';
    return;
  }

  if (button.className === 'button-off') {
    button.className = 'button-on';
    html.className = 'on';
  }
}

button.addEventListener('click', handleButton);
