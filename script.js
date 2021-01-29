document.addEventListener('DOMContentLoaded', () => {

  const cardsArray = [
    {
      name: 'vampira',
      img:'images/vampira.jpeg'
    },
    {
      name: 'vampira',
      img:'images/vampira.jpeg'
    },
    {
      name: 'tish',
      img:'images/tish.jpeg'
    },
    {
      name: 'tish',
      img:'images/tish.jpeg'
    },
    {
      name: 'tish2',
      img:'images/tish2.jpeg'
    },
    {
      name: 'tish2',
      img:'images/tish2.jpeg'
    },
    {
      name: 'elvira',
      img:'images/elvira.jpeg'
    },
    {
      name: 'elvira',
      img:'images/elvira.jpeg'
    },

  ]

  cardsArray.sort(() => 0.5 - Math.random())
  
  const board = document.querySelector('.board')
  const resultDisplay = document.querySelector('#result')
  let chosenCards = []
  let chosenCardsId = []
  const cardsMatched = []
  let audio = document.getElementById('myAudio');

  // here you create the gameboard using the array and set.attribute to set the images on to each card. 
  function createMemoryBoard() {

    for (let i = 0; i < cardsArray.length; i++){
      let card = document.createElement('img')
      card.setAttribute('src', 'images/darkflower.jpeg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      card.addEventListener('click',playAudio)
      board.appendChild(card)
      // line 55 we're appending the card onto the board 
    }
  }
// 
  

function playAudio() { 
 
  audio.play(); 
} 
//

  
//  now we need a function to check for matches and flipping our cards
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = chosenCardsId[0]
    const optionTwoId = chosenCardsId[1]
    
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src','images/darkflower.jpeg')
      cards[optionTwoId].setAttribute('src','images/darkflower.jpeg')
      // alert ('these are the same image')
    }
    else if (chosenCards[0] === chosenCards[1]) {
      // alert('a match!')
      // set an attribute for when the cards match so the image changes 
      // cards[optionOneId].setAttribute('src','images/brain.jpg')
      // cards[optionTwoId].setAttribute('src','images/brain.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsMatched.push(chosenCards)
    } else {
      cards[optionOneId].setAttribute('src','images/darkflower.jpeg')
      cards[optionTwoId].setAttribute('src','images/darkflower.jpeg')
      // alert ('try once more')
    }
    chosenCards= []
    chosenCardsId = []
    resultDisplay.textContent = cardsMatched.length
    if (cardsMatched.length === cardsArray.length/2) {
      resultDisplay.textContent = 'Superb! all matched!'
    }
    
  }
// 
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    chosenCards.push(cardsArray[cardId].name)
    chosenCardsId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (chosenCards.length === 2) {
      setTimeout(checkForMatch,500)
    }

  }
  createMemoryBoard()
})