/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var html = "";
var quote = getRandomQuote();
var info
var rand

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  rand = parseInt(Math.floor(Math.random() * 13 ));
  return quotes[rand];
}



/*
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
*/

// Call getRandomQuote, and print the quote to the variable, quote
quote = getRandomQuote();



//building "html" string with source, and, as needed, actor, movie, and year
// <p class="source">source<span class="citation">movie</span><span class="year">year</span></p>
html += "<p class = 'quote'>" + quote.quote + '</p>';
html += "<p class = 'source'>" + quote.source;
if (quote.actor) {
  html += "<span class = 'source'>" + quote.actor + "</span>"
}
if (quote.movie) {
  html += "<span class = 'source'>" + quote.movie + "</span>"
}
if (quote.year) {
  html += "<span class = 'year'>" + quote.year + "</span>"
}
html += "</p>"



console.log(html);

function printQuote(html) {
  var outputDiv = document.getElementById('loadQuote');
  outputDiv.innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
