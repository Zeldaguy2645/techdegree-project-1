
// An array of objects with quotes to be generated randomly.
var quotes = [
	{
		quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		source: "Dr. Suess"
	},
	{
		quote: "I was born with an enormous need for affection, and a terrible need to give it.",
		source: "Audrey Hepburn"
	},
	{
		quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		source: "Maya Angelou"
	},
	{
		quote: "Alcohol may be man's worst enemy, but the bible says love your enemy.",
		source: "Frank Sinatra"
	},
	{
		quote: "The true sign of intelligence is not knowledge but imagination.",
		source: "Albert Einstein"
	},
	{
		quote: "Simplicity is the ultimate sophistication.",
		source: "Leonardo Da Vinci"
	},
	{
		quote: "A mother takes twenty years to make a man of her boy, and another woman makes a fool of him in twenty minutes.",
		source: "Robert Frost"
	},
	{
		quote: "Painting is just another way of keeping a diary.",
		source: "Pablo Picaso"
	},
	{
		quote: "There is little success where there is little laughter.",
		source: "Andrew Carnegie"
	},
	{
		quote: "You can't blame gravity for falling in love.",
		source: "Albert Einstein"
	},
	{
		quote: "It's not what you look at that matters, it's what you see.",
		source: "Henry David Thoreau"
	}
];

// This generates a random number to be able to generate a random quote.
function getRandomQuote() {
		var randomNumber = Math.floor((Math.random() * quotes.length));
		var randomQuote =
			quotes[randomNumber];
			return randomQuote;
};

/***
	This calls the getRandomQuote function and stores it in a variable.
 	Then a variable is created to hold the HTML elements for the message, and then it is printed out.
***/
function printQuote() {
		var randomQuote = getRandomQuote();
		var message = '<p class ="quote">' + randomQuote.quote + '</p>';
		message += '<p class ="source">' + randomQuote.source + '</p>';
		document.getElementById("quote-box").innerHTML = message;

};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
