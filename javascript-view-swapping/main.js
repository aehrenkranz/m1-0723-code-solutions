const tabContainer = document.querySelector('.tab-container');
const eleTab = document.querySelectorAll('.tab');
const eleView = document.querySelectorAll('.view');
console.log(eleTab);
function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < eleTab.length; i++) {
      if (eleTab[i] === event.target) {
        event.target.classList.add('active');
      } else {
        eleTab[i].className = 'tab';
      }
    }
    const dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < eleView.length; i++) {
      if (eleView[i].getAttribute('data-view') !== dataView) {
        eleView[i].classList.add('hidden');
      } else {
        eleView[i].className = 'view';
      }
    }
  }
}
tabContainer.addEventListener('click', handleClick);
