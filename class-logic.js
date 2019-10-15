
class Game {
	constructor(){
		// this.gameStart()
		}
	
	gameStart(){
		var deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
		//test
		console.log("a Brand new Deck!")
		console.log(deck);
		//shuffle the deck
		deck.sort(function(a, b){return 0.5 - Math.random()});
		//test
		console.log("Shuffle!")
		console.log(deck);
		//deal the cards
		var playerOne = [];
		var playerTwo = [];
		for(var i = 1; i <= 26 ; i++) {
		playerOne.unshift(deck.shift())
		playerTwo.unshift(deck.shift())
		}
		//test
		console.log("The Deal")
		console.log(playerOne, playerTwo);


		//WAR function
		function war(index) {
		console.log("___o_0--->WAR<---O_o___")
		// if (index > 3) {
		// 		alert(`${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`);
		// }
		index = Math.min(index, Math.min(playerOne.length, playerTwo.length) - 1)
		// if (index > 3) {
		// 		alert(`${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`)
		// }
		if (playerOne[index] > playerTwo[index]) {
			playerOne = playerOne.concat(playerTwo.splice(0,index+1));
			playerOne.push(playerOne.shift());
		} else if (playerTwo[index] > playerOne[index]) {
				playerTwo = playerTwo.concat(playerOne.splice(0,index+1));
				playerTwo.push(playerTwo.shift());
		} else {
				if(index === playerOne.length - 1 || index === playerTwo.length - 1) {
					alert(`Game over\n${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`);
				}
				war(index+4) 
		}
		// console.log(playerOne, playerTwo);
		// console.log("player 1 has " + playerOne.length + " cards.")
		// console.log("player 2 has " + playerTwo.length + " cards.")
		}

		// BUILD v5
		var i = 0

		while(playerOne.length != 0 && playerTwo.length != 0) {
		if (playerOne[0] === playerTwo[0]) {
			war(3);
			// console.log(playerOne, playerTwo);
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
	}
}

var war = new Game();

