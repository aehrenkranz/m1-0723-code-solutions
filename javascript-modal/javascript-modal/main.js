const buttonActivate = document.querySelector('.modal-activate');

const buttonClose = document.querySelector('.modal-close');

function handleActivate() {
  const modal = document.querySelector('.modal-container');
  const classes = modal.classList;
  classes.toggle('on');
}

buttonActivate.addEventListener('click', handleActivate);
buttonClose.addEventListener('click', handleActivate);
