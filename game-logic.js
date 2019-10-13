//The card game WAR

//create the deck
var deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
//test
console.log(deck);
//shuffle the deck
deck.sort(function(a, b){return 0.5 - Math.random()});
//test
console.log(deck);
//deal the cards
var playOne = [];
var playTwo = [];
for(var i = 1; i <= 26 ; i++){
	playOne.unshift(deck.shift())
	playTwo.unshift(deck.shift())
}
//test
console.log(playOne, playTwo);

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

//compare indices
while (playOne.length > playTwo.length) {
	for(var m = 0; m < deckOne.length; m++) {
		if(deckOne[m] > deckTwo[m]){
			playOne.push(playTwo.shift())
			//test
			console.log(playOne, playTwo);
		}
	}
}
//inner loop

