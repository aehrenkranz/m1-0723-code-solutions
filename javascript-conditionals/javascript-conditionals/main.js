/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'j' || 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  let statement;
  switch (name) {
    case 'yakko':
    case 'wakko':
      statement = "We're the warner brothers!";
      break;
    case 'dot':
      statement = "I'm cute~";
      break;
    default:
      statement = 'Goodnight everybody!';
  }
  return statement;
}

function recommendMovie(genre) {
  let recc;
  switch (genre) {
    case 'action':
      recc = 'John Wick series';
      break;

    case 'sci-fi':
    case 'drama':
      recc = 'Interstellar';
      break;

    case 'horror':
      recc = 'The Conjuring';
      break;

    case 'comedy':
      recc = 'Happy Gilmore';
      break;

    case 'musical':
      recc = 'Hamilton';
      break;

    default:
      recc =
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
  return recc;
}
