console.log('Lodash is loaded:', typeof _ !== 'undefined');
const deck = [
  {
    rank: 'Ace',
    suit: 'Spades',
  },
  {
    rank: 'Ace',
    suit: 'Clubs',
  },
  {
    rank: 'Ace',
    suit: 'Hearts',
  },
  {
    rank: 'Ace',
    suit: 'Diamonds', // end aces
  },
  {
    rank: 'King',
    suit: 'Spades',
  },
  {
    rank: 'King',
    suit: 'Clubs',
  },
  {
    rank: 'King',
    suit: 'Hearts',
  },
  {
    rank: 'King',
    suit: 'Diamonds', // end kings
  },
  {
    rank: 'Queen',
    suit: 'Spades',
  },
  {
    rank: 'Queen',
    suit: 'Clubs',
  },
  {
    rank: 'Queen',
    suit: 'Hearts',
  },
  {
    rank: 'Queen',
    suit: 'Diamonds', // end queens
  },
  {
    rank: 'Jack',
    suit: 'Spades',
  },
  {
    rank: 'Jack',
    suit: 'Clubs',
  },
  {
    rank: 'Jack',
    suit: 'Hearts',
  },
  {
    rank: 'Jack',
    suit: 'Diamonds', // end jacks
  },
  {
    rank: 10,
    suit: 'Spades',
  },
  {
    rank: 10,
    suit: 'Clubs',
  },
  {
    rank: 10,
    suit: 'Hearts',
  },
  {
    rank: 10,
    suit: 'Diamonds', // end 10s
  },
  {
    rank: 9,
    suit: 'Spades',
  },
  {
    rank: 9,
    suit: 'Clubs',
  },
  {
    rank: 9,
    suit: 'Hearts',
  },
  {
    rank: 9,
    suit: 'Diamonds', // end 9s
  },
  {
    rank: 8,
    suit: 'Spades',
  },
  {
    rank: 8,
    suit: 'Clubs',
  },
  {
    rank: 8,
    suit: 'Hearts',
  },
  {
    rank: 8,
    suit: 'Diamonds', // end 8s
  },
  {
    rank: 7,
    suit: 'Spades',
  },
  {
    rank: 7,
    suit: 'Clubs',
  },
  {
    rank: 7,
    suit: 'Hearts',
  },
  {
    rank: 7,
    suit: 'Diamonds', // end 7s
  },
  {
    rank: 6,
    suit: 'Spades',
  },
  {
    rank: 6,
    suit: 'Clubs',
  },
  {
    rank: 6,
    suit: 'Hearts',
  },
  {
    rank: 6,
    suit: 'Diamonds', // end 6s
  },
  {
    rank: 5,
    suit: 'Spades',
  },
  {
    rank: 5,
    suit: 'Clubs',
  },
  {
    rank: 5,
    suit: 'Hearts',
  },
  {
    rank: 5,
    suit: 'Diamonds', // end 5s
  },
  {
    rank: 4,
    suit: 'Spades',
  },
  {
    rank: 4,
    suit: 'Clubs',
  },
  {
    rank: 4,
    suit: 'Hearts',
  },
  {
    rank: 4,
    suit: 'Diamonds', // end 4s
  },
  {
    rank: 3,
    suit: 'Spades',
  },
  {
    rank: 3,
    suit: 'Clubs',
  },
  {
    rank: 3,
    suit: 'Hearts',
  },
  {
    rank: 3,
    suit: 'Diamonds', // end 3s
  },
  {
    rank: 2,
    suit: 'Spades',
  },
  {
    rank: 2,
    suit: 'Clubs',
  },
  {
    rank: 2,
    suit: 'Hearts',
  },
  {
    rank: 2,
    suit: 'Diamonds', // end 2s
  },
];

// eslint-disable-next-line no-unused-vars
const players = [
  {
    name: 'Lexi',
    hand: [],
  },
  {
    name: 'Steven',
    hand: [],
  },
  {
    name: 'Josh',
    hand: [],
  },
  {
    name: 'Bri',
    hand: [],
  },
];
function deal(players, cardsDealt) {
  let count = 0;
  const newDeck = _.shuffle(deck);
  for (let i = 0; i < players.length; i++) {
    for (let x = 0; x < cardsDealt; x++) {
      players[i].hand.push(newDeck[count]);
      count++;
      if (count > 52) {
        return alert('not enough cards, go play something else');
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
function letsPlay(players, cardsDealt) {
  deal(players, cardsDealt);
  let winner;
  for (let i = 0; i < players.length; i++) {
    players[i].total = 0;
    let max = players[0].total;
    for (let x = 0; x < players[i].hand.length; x++) {
      switch (players[i].hand[x].rank) {
        case 'Ace':
          players[i].hand[x] = 11;
          break;
        case 'King':
        case 'Queen':
        case 'Jack':
          players[i].hand[x] = 10;
          break;
        default:
          players[i].hand[x] = players[i].hand[x].rank;
      }
      players[i].total += players[i].hand[x];
    }
    if (players[i].total > max) {
      max = players[i].total;
      winner = players[i].name;
    }
  }
  console.log(`And the winner is: ${winner}!`);
}

letsPlay(players, 2);
