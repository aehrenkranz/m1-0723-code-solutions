/* exported truncate */
function truncate(length, string) {
  const strNew = string.slice(0, length);
  const elip = '...';
  const sol = strNew + elip;
  return sol;
}
