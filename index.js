let start_el = document.getElementById("start");
let sum_el = document.getElementById("sum")
let start1 = "started"
let cards_el = document.getElementById("cards");

let firstCard = 0
let secondCard = 0
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let flag = 0;

let player = {
    name: "Tanmay",
    chips: 145

}

let credits_el = document.getElementById("credits-el")
credits_el.textContent = player.name + ": $" + player.chips
function startGame()
{
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}
function renderGame(card, value)
{
    cards_el.textContent = "Cards: ";
   /*  if(value == true){
        cards_el.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2];
    }
    else{
        cards_el.textContent = "Cards: " + firstCard + " " + secondCard
    } */
   
   for(let i = 0;i<cards.length;i++)
    cards_el.textContent += cards[i] + " ";
    
    if(sum <= 20){
        message = "Do you want to draw a card"
    }
    else if(sum == 21){
        message = "Y00hoo its BlackJack!"
        hasBlackJack = true
        var audio = new Audio('game win.mp3');
        audio.play();
       
    }
    else{
        message = "You Lost!"
        isAlive = false
        var audio = new Audio('game over.mp3');
        audio.play();
    }
    
    sum_el.textContent = "Sum: " + sum
    start_el.innerText = message
}

function newCard()
{
    if(isAlive == true && hasBlackJack == false)
        {
        let card = getRandomCard()
        sum = sum + card;
        cards.push(card);
        let value = true
        renderGame(card, value)
    }
    
}

function getRandomCard()
{
    let value = Math.floor(Math.random() * 13) + 1
    if(value > 10)
        return 10;
    else if(value == 1)
        return 11
    else
        return value

}


