let player = {
       name: "ThePreferred",
       chips: 1000
}
let cards = []
let sum = 0
// let firstCard = getRandomCard() //5
// let secondCard = getRandomCard() //8
// let cards = [firstCard, secondCard]
//this above is what you'd call an array
//or an ordered list of items
//let sum = firstCard + secondCard 
//console.log(sum)
let hasBlackJack = false
let isAlive = false //was initially true b4 rendering it true inside startGame function
let message = ""

let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//console.log(sumEl)
//let sumEl = document.querySelector("#sum-el")
//You can use the above in the stead of getElementById
let cardsEl = document.getElementById("cards-el")
//console.log(cardsEl)
let playerEl = document.getElementById("player-el")
//console.log(playerEl)

//console.log(cards)
playerEl.textContent = player.name + ": $" + player.chips

 function getRandomCard() {
     let randomNumber =  Math.floor ( Math.random()*13 ) + 1 //1-13
     if (randomNumber > 10) {
       return 10
     } else if (randomNumber === 1) {
       return 11
     }  else {
       return randomNumber
     }
     //return 5; this was previously used b4 the modification
 }

function startGame() {
       isAlive = true
       let firstCard = getRandomCard()
       let secondCard = getRandomCard()
       cards = [firstCard, secondCard]
       sum = firstCard + secondCard
       renderGame()
}


// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips


function renderGame() {
       cardsEl.textContent = "Cards: "
       for (let i = 0; i < cards.length; i ++) {
              cardsEl.textContent += cards[i] + " "
       }
       //this would make sure that all the summed cards are displaced 
       
       //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]/cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
       //so we replaced firstCard and secondCard with cards[0][1] respectively
       sumEl.textContent = "Sum: " + sum
      if (sum <= 20) {
              message ="Do you want to draw a new card?"
       } else if (sum === 21) {
              message = "You've got Blackjack!"
          hasBlackJack = true
      } else {
              message = "You're out of the game!"
              isAlive = false
       } 
       messageEl.textContent = message
}

function newCard() {
       if ( isAlive === true && hasBlackJack === false) {
       let card =  getRandomCard() //2
       sum += card
       cards.push(card)
       //console.log(cards)
       renderGame()
       }
// console.log("Drawing  new card from the deck!")  
}


//methods objects
// let playee = {
//        name: "ThePreferred",
//        chips: 1000,
//        sayHello:function() {
//               console.log("Heisann!")
//        }

// }
// playee.sayHello()

//Objects
// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Ijeoma Osuji",
//     length: 63,
//     level: 2,
//     isFree: true, 
//     tags: ["html", "css"]
// }

// console.log( course["tags"] )

  //Logical operators OR ||
// let likesDocumentaries = true
// let likesStartups = false 

// if ( likesDocumentaries === true || likesStartups === true) {
//               recommendMovie()
//  }

//  function recommendMovie() {
//        console.log("Hey, Checkout this new film we think you will like!")
//  }

 //Logical operators AND &&
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if ( hasSolvedChallenge === false && hasHintsLeft === false) {
//        showSolution()
// }
// function showSolution() {
//        console.log("showing the solutions...")
// }
// for (let i = 0; i < 5; i +=1) {
//        console.log(i)
// } 
// if (false) {
//     console.log("Do you want to draw a new card?")
// } else if (true) {
//    console.log("wohoo! You've got Blackjack")
//    hasBlackJack = true
// } else {
//     console.log("You're out of the game")
//     isAlive = false
// }
//
//.............arrow down!
// CASH OUT
// console.log("hasBlackJack")
// console.log("isAlive")
//
 // if (sum < 21) {
//     console.log("Do you want to draw a new card?😕")
// } else if (sum === 21) {
//     console.log("wohoo! You've got Blackjack")
// } else if (sum > 21) { 
//     console.log("You're out of the game")
// } //you can skip (sum > 21)

// let age = 21

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Yoohoo! Welcome")
// } 
//notice the difference btw using 'else' & 'else if'

// let age = 10

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age ===  100) {
//     console.log("Here is your birthday card from the King!")
// } else{
//     console.log("Not eligible, you have gotten one")
// }

  //Rollin a dice btw 1 and 6
// function rollDice() {
//        let randomNumber = Math.floor ( Math.random() * 6 ) + 1
//        return randomNumber
// }          
// console.log( rollDice() )