
class Game {
  constructor() {
  }

  gameStart() {
    var deck = [2, 2, 2, 2, 3, 3, 3, 3,
      4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
      7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
      10, 10, 10, 10, 11, 11, 11, 11,
      12, 12, 12, 12, 13, 13, 13, 13,
      14, 14, 14, 14];

    //test
    console.log("a Brand new Deck!")
    console.log(deck);
    //shuffle the deck
    deck.sort(function (a, b) { return 0.5 - Math.random() });
    //test
    console.log("Shuffle!")
    console.log(deck);
    //deal the cards
    var playerOne = [];
    var playerTwo = [];
    for (var i = 1; i <= 26; i++) {
      playerOne.unshift(deck.shift())
      playerTwo.unshift(deck.shift())
    }

    const body = document.querySelector("body")
    const deal = document.createElement("h3")
    console.log("The Deal")
    console.log(playerOne, playerTwo);
    deal.innerText = `The Deal:\nPlayer 1's hand: ${playerOne.toString()}\nPlayer 2's hand: ${playerTwo.toString()}`
    body.appendChild(deal)


    //WAR function
    function war(index) {
      console.log("___o_0--->WAR<---O_o___")
      index = Math.min(index, Math.min(playerOne.length, playerTwo.length) - 1)
      if (playerOne[index] > playerTwo[index]) {
        playerOne = playerOne.concat(playerTwo.splice(0, index + 1));
        playerOne.push(playerOne.shift());
      } else if (playerTwo[index] > playerOne[index]) {
        playerTwo = playerTwo.concat(playerOne.splice(0, index + 1));
        playerTwo.push(playerTwo.shift());
      } else {
        let warII = document.createElement("h4")
        warII.innerText = "___o_0--->WAR II<---O_o___"
        body.appendChild(warII)
        if (index === playerOne.length - 1 || index === playerTwo.length - 1) {
          let warEnd = document.createElement("h4")
          warEnd.innerText = `The Game ended within War!!\n${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`
          body.appendChild(warEnd)
        }
        war(index + 4)
      }
    }

    // BUILD v5
    var i = 0
    let turn = document.createElement("p")

    while (playerOne.length != 0 && playerTwo.length != 0) {
      if (playerOne[0] === playerTwo[0]) {
        war(3);
      } else if (playerOne[0] > playerTwo[0]) {
        console.log("-----*One*-----");
        playerOne.push(playerTwo.shift());
        playerOne.push(playerOne.shift());
        console.log(playerOne, playerTwo);
      } else if (playerTwo[0] > playerOne[0]) {
        console.log("-----*Two*-----")
        playerTwo.push(playerOne.shift());
        playerTwo.push(playerTwo.shift());
        console.log(playerOne, playerTwo);
      }
      i++;

      console.log(`turn ${i}`)
      console.log(playerOne, playerTwo);
      console.log("player 1 has " + playerOne.length + " cards.")
      console.log("player 2 has " + playerTwo.length + " cards.")

    }

    let status = document.createElement("h2")
    status.innerText = `After ${i} turns, player 1 has ${playerOne.length} cards and player 2 has ${playerTwo.length} cards. `
    body.appendChild(status)

  }
}

var cardGame = new Game();
console.log(cardGame.gameStart())

