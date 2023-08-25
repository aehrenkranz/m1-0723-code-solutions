let totalClicks = 0;

const elemHot = document.querySelector('.hot-button');
const elemClick = document.querySelector('.click-count');

function increment(event) {
  totalClicks++;
  elemClick.textContent = `Clicks: ${totalClicks}`;
  if (totalClicks < 4) {
    elemHot.className = 'hot-button cold';
  } else if (totalClicks >= 4 && totalClicks < 7) {
    elemHot.className = 'hot-button cool';
  } else if (totalClicks >= 7 && totalClicks < 10) {
    elemHot.className = 'hot-button tepid';
  } else if (totalClicks >= 10 && totalClicks < 13) {
    elemHot.className = 'hot-button warm';
  } else if (totalClicks >= 13 && totalClicks < 16) {
    elemHot.className = 'hot-button hot';
  } else if (totalClicks >= 16) {
    elemHot.className = 'hot-button nuclear';
  }
}
elemHot.addEventListener('click', increment);
