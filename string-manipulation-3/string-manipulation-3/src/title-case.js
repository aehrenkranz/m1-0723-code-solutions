/* exported titleCase */
function titleCase(title) {
  const lower = title.toLowerCase();
  let res = lower.split(' ');
  const flags = 'and,or,nor,but,the,per,for';
  for (let i = 0; i < res.length; i++) {
    if (res[i].includes('javascript')) {
      res[i] = res[i].replace('j', 'J');
      res[i] = res[i].replace('s', 'S');
    }
    if (res[i] === 'api') {
      res[i] = res[i].toUpperCase();
    }
    if (
      (res[i].length >= 3 && flags.includes(res[i]) === false) ||
      res[i] === 'i'
    ) {
      res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    if (res[i][res[i].length - 1] === ':') {
      res[i + 1] = res[i + 1].charAt(0).toUpperCase() + res[i + 1].slice(1);
    }
    if (res[i].includes('-')) {
      const start = res[i].search('-') + 1;
      res[i] =
        res[i].slice(0, start) +
        res[i].charAt(start).toUpperCase() +
        res[i].slice(start + 1);
    }
  }
  res[0] = res[0].charAt(0).toUpperCase() + res[0].slice(1);

  res = res.join(' ');
  return res;
}
