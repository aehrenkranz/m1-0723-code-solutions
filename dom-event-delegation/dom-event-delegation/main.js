const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  console.dir(event.target);
  console.log(
    'event.target:',
    event.target,
    'event.target.tagName:',
    event.target.tagName
  );
  if (event.target.tagName === 'BUTTON') {
    const elClosest = event.target.closest('.task-list-item');
    console.log(elClosest);
    elClosest.remove();
  }
});
