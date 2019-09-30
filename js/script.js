/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
var html = ""
var getRandomQuote
var quote
var info
var rand

/*** 
  These are my quotes.  They are mostly from movies.  For the movie quotes,
  I included the quote, the character who said it, who played them, the movie, and the year the movie was released.
  The last quote is one that I really like, which wasn't in a movie.  It also doesn't have the same info as the movie
  quotes, so I could use the if... statement on it.
***/
var quotes = [ 
  { 
    quote: 'Luke, you’re going to find that many of the truths we cling to depend greatly on our own point of view.',
    source: 'Obi Wan Kenobi',
    actor: 'Sir Alec Guinness',
    movie: 'Star Wars: Episode VI- Return of the Jedi',
    year: 1983
  },
  {
    quote: 'Every man dies, but not every man really lives.',
    source: 'William Wallace',
    actor: 'Mel Gibson',
    movie: 'Braveheart',
    year: 1995
  },
  {
    quote: 'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.',
    source: 'Ferris Bueller',
    actor: 'Matthew Broderick',
    movie: "Ferris Bueller's Day Off",
    year: 1990
  },
  {
    quote: 'Strange, isn’t it? Each man’s life touches so many other lives. When he isn’t around he leaves an awful hole, doesn’t he?',
    source: 'Clarence',
    actor: 'Henry Travers',
    movie: "It's A Wonderful Life",
    year: 1947
  },
  {
    quote: 'All we have to decide is what to do with the time that is given to us.',
    source: 'Gandalf',
    actor: 'Ian McKellen',
    movie: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001
  },
  {
    quote: 'Kid, there are heroes and there are legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you’ll never go wrong.',
    source: 'Babe Ruth',
    actor: 'Art LaFleur',
    movie: "The Sandlot",
    year: 1993
  },
  {
    quote: 'Oh yes, the past can hurt. But you can either run from it, or learn from it.',
    source: 'Rafiki',
    actor: 'Robert Guillaume',
    movie: "The Lion King",
    year: 1994
  },
  {
    quote: "That there's some good in this world, Mr. Frodo... and it's worth fighting for.",
    source: 'Samwise Gamgee',
    actor: 'Sean Astin',
    movie: "The Lord of the Rings: The Two Towers",
    year: 2002
  },
  {
    quote: 'Whoever saves one life, saves the world entire.',
    source: 'Itzhak Stern',
    actor: 'Ben Kingsley',
    movie: "Schindler's List",
    year: 1994
  },
  {
    quote: 'We tolds him to go away, and away he goes, Precious! Gone! Gone! Gone! Smeagol is free!',
    source: 'Smeagol/Gollum',
    actor: 'Andy Serkis',
    movie: "The Lord of the Rings: The Two Towers",
    year: 2002
  },
  {
    quote: 'Once the game is over, the king and the pawn go back in the same box.',
    source: 'Italian Proverb'
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var rand = Math.floor(Math.random() * 13 );
  return quotes[rand]
  console.log(quotes.quote)
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

// Call getRandomQuote, and print the quote to the variable, quote
quote = getRandomQuote().quote;

//building "info" string with source, and, as needed, actor, movie, and year
// <p class="source">source<span class="citation">movie</span><span class="year">year</span></p>
info = '<p class="source">source</p>';
if (quotes[rand][actor] != null) {
  info += " played by " + '<p class="source">actor</p>';
}
if (quotes[rand][movie] != null) {
  info += '<span class="source">movie</p></span>';
}
if (quotes[rand][year] != null) {
info += '<span class="year">year</span></p>';
}

function printQuote(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.