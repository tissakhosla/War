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

// BUILD v4

if (playerOne[0] === playerTwo[0]) {
	console.log("it's a tie! HOORAY")
} else if (playerOne[0] > playerTwo[0]) {
		console.log("-----*One*-----");
		playerOne.push(playerTwo.shift());
		playerOne.push(playerOne.shift());
	} else if (playerTwo[0] < playerOne[0]) {
			console.log("-----*Two*-----")
			playerTwo.push(playerOne.shift())
			playerTwo.push(playerOne.shift())
		}
console.log("This is the end")

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

