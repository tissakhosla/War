//The card game WAR

//create the deck
var deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
//test
console.log("a Brand new Deck!")
console.log(deck);
//shuffle the deck
deck.sort(function(a, b){return 0.5 - Math.random()});
//test
console.log("We shuffled it")
console.log(deck);
//deal the cards
var playerOne = [];
var playerTwo = [];
for(var i = 1; i <= 26 ; i++) {
	playerOne.unshift(deck.shift())
	playerTwo.unshift(deck.shift())
}
//test
console.log("Dealt the cards.")
console.log(playerOne, playerTwo);

// //create player class
// class player {
// 	constructor(hand, inPlay) {
// 	this.hand = hand,
// 	this.inPlay = inPlay
// 	}
// }
// //create 2 players
// var playerOne = new(deckOne, inPlayOne);
// var playerTwo = new(deckTwo, inPlayTwo);

// Function passing in an index 
// function gameLogic(index) {
// 	for (var i = 1; i <= 10; i++) {
// 		if (playerOne[index] === playerTwo[index]) {
// 			console.log("___o_0--->WAR<---O_o___")
// 			//the game function on playerNum[4]
			
// 		} else if (playerOne[index] > playerTwo[index]) {
// 				console.log("-----*One*-----");
// 				playerOne.push(playerTwo.shift());
// 				playerOne.push(playerOne.shift());
				
// 			} else if (playerTwo[index] > playerOne[index]) {
// 					console.log("-----*Two*-----")
// 					playerTwo.push(playerOne.shift());
// 					playerTwo.push(playerOne.shift());
					
// 				}
// 	return console.log(playerOne, playerTwo);
// }

// gameLogic(0);
//WAR
function war(index) {
	if (index > 3) {
			alert(`${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`);
			index = Math.min(index, Math.min(playerOne.length, playerTwo.length) - 1)
			alert(`${index}\n${playerOne.length} --- ${playerOne}\n${playerTwo.length} --- ${playerTwo}`)
		}
		

	if (playerOne[index] > playerTwo[index]) {
		console.log("--WAR--ONE--");
		playerOne = playerOne.concat(playerTwo.splice(0,index+1));
		playerOne.push(playerOne.shift());
	} else if (playerTwo[index] > playerOne[index]) {
			console.log("--WAR--TWO--");
			playerTwo = playerTwo.concat(playerOne.splice(0,index+1));
			playerTwo.push(playerTwo.shift());
	} else {
			war(index+4) 
	
	}
	console.log(playerOne, playerTwo);
}




// BUILD v4
// for (var i = 1; i <= 100; i++) {
var i = 0
while(playerOne.length != 0 && playerTwo.length != 0) {
	if (playerOne[0] === playerTwo[0]) {
		console.log("___o_0--->WAR<---O_o___")
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
}

// if (playerOne.length < 5 || playerTwo.length < 5) {

// }

// BUILDv3

// while(playerOne.length != 0 || playerTwo.length != 0) {
// 	if (playerOne[0] === playerTwo[0]) {
// 		console.log("it's a tie! HOORAY")
// 	} else if (playerOne[0] > playerTwo[0]) {
// 			console.log("-----*One*-----");
// 			playerOne.push(playerTwo.shift());
// 			playerOne.push(playerOne.shift());
// 		} else if (playerTwo[0] < playerOne[0]) {
// 				console.log("-----*Two*-----")
// 				playerTwo.push(playerOne.shift())
// 				playerTwo.push(playerOne.shift())
// 			} 
// }


//compare indices
//BUILD v1
// var m = 0
// for (var m = 0; m < deck.length; m++) {
// 	if(playOne[m] > playTwo[m]) {
// 		console.log("-----*One*-----");
// 		playOne.push(playTwo.shift());
// 		playOne.push(playOne.shift());
// 		console.log(playOne, playTwo);
		
// 	}
// 		else if (playTwo[m] > playOne[m]) {
// 			console.log("-----*Two*-----");
// 			playTwo.push(playOne.shift());
// 			playTwo.push(playTwo.shift());
// 					console.log(playOne, playTwo);
	
// 		} 
// 			else (playOne[m] === playTwo[m]) {
// 				console.log("Peace!");
// 			}
// }
// BUILD v2
// var m = 0
// while(m === 0) {
// 	if (playOne[m] === playTwo[m]) {
// 		console.log("Peace!")
// 	} else if (playOne[m] > playTwo[m]) {
// 			console.log("-----*One*-----")
// 			playOne.push(playTwo.shift())
// 			playOne.push(playOne.shift())
// 			console.log(playOne, playTwo);
// 			} else (playTwo[m] > playOne[m]) {
// 					console.log("-----*Two*-----")
// 					playTwo.push(playOne.shift())
// 					playTwo.push(playTwo.shift())
// 					console.log(playOne, playTwo);
// 			}
// }
