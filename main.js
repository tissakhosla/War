
class Game {
  constructor() {
    this.deck = [],
    this.playerOne = [],
    this.playerTwo = []
    
  }

  buildDeck () {
    for (var i = 0; i < 53; i++){
      let j = 2
      for(var k = 0; k < 4; k++){
        this.deck.push(j)
      }
    }
  }

  dealDeck () {
    for (var i = 1; i <= 26; i++) {
      this.playerOne.unshift(this.deck.shift())
      this.playerTwo.unshift(this.deck.shift())
    }
  }
  shuffleDeck() { 
    this.deck.sort(function (a, b) { return 0.5 - Math.random() });

  }
  war(index) {
    console.log("___o_0--->WAR<---O_o___")
    index = Math.min(index, Math.min(this.playerOne.length, this.playerTwo.length) - 1)
    if (this.playerOne[index] > this.playerTwo[index]) {
      playerOne = playerOne.concat(playerTwo.splice(0, index + 1));
      playerOne.push(playerOne.shift());
    } else if (this.playerTwo[index] > this.playerOne[index]) {
      this.playerTwo = this.playerTwo.concat(this.playerOne.splice(0, index + 1));
      this.playerTwo.push(this.playerTwo.shift());
    } else {
      if (index === this.playerOne.length - 1 || index === this.playerTwo.length - 1) {
        let warEnd = document.createElement("h4")
        warEnd.innerText = `The Game ended within War!!\n${index}\n${this.playerOne.length} --- ${this.playerOne}\n${this.playerTwo.length} --- ${this.playerTwo}`
        this.body.appendChild(warEnd)
      }
      this.war(index + 4)
    }
  }

  gamePlay(){
    // BUILD v5
    var i = 0
    while (this.playerOne.length != 0 && this.playerTwo.length != 0) {
      if (this.playerOne[0] === this.playerTwo[0]) {
        this.war(3);
      } else if (this.playerOne[0] > this.playerTwo[0]) {
        console.log("-----*One*-----");
        this.playerOne.push(this.playerTwo.shift());
        this.playerOne.push(this.playerOne.shift());
        console.log(this.playerOne, this.playerTwo);
      } else if (this.playerTwo[0] > this.playerOne[0]) {
        console.log("-----*Two*-----")
        this.playerTwo.push(this.playerOne.shift());
        this.playerTwo.push(this.playerTwo.shift());
        console.log(this.playerOne, this.playerTwo);
      }
      i++;

      console.log(`turn ${i}`)
      console.log(this.playerOne, this.playerTwo);
      console.log("player 1 has " + this.playerOne.length + " cards.")
      console.log("player 2 has " + this.playerTwo.length + " cards.")
    }
  }

  gameStart() {
    this.buildDeck()
    console.log("a Brand new Deck!")
    console.log(this.deck);
    //shuffle the deck
    this.shuffleDeck()
    console.log("Shuffle!")
    console.log(this.deck);
    //deal the cards
    this.dealDeck()
    const body = document.querySelector("body")
    const deal = document.createElement("h3")
    console.log("The Deal")
    console.log(this.playerOne, this.playerTwo);
    deal.innerText = `The Deal:\nPlayer 1's hand: ${this.playerOne.toString()}\nPlayer 2's hand: ${this.playerTwo.toString()}`
    body.appendChild(deal)
    this.gamePlay()
    let status = document.createElement("h2")
    status.innerText = `After ${i} turns, player 1 has ${this.playerOne.length} cards and player 2 has ${this.playerTwo.length} cards. `
    body.appendChild(status)

  }
}

var cardGame = new Game();
console.log(cardGame.gameStart())


