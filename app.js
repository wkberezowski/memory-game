const cardArray = [
  {
    name: 'fires',
    img: './images/fries.png',
  },
  {
    name: 'cheese',
    img: './images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: './images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png',
  },
  {
    name: 'pizza',
    img: './images/pizza.png',
  },
  {
    name: 'fires',
    img: './images/fries.png',
  },
  {
    name: 'cheese',
    img: './images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: './images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png',
  },
  {
    name: 'pizza',
    img: './images/pizza.png',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];

let cardsChosenIds = [];

let cardsWon = [];

const createBoard = () => {
  cardArray.forEach((element, index) => {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', index);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  });
};

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log('check for match');

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('you clicked on the same image');
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);

    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('sorry try again');
  }

  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations!';
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(cardsChosen);
}

createBoard();
