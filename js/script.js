/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
var satoshi = "Satoshi Nakamoto";
var randomNumber;


var quotes = [
    {
      Quote: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.",
      Source: satoshi,
      citation: "https://blockchain.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      year: 2009
    },
    {
        Quote: "If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry.",
        Source: satoshi,
        citation: "https://bitcointalk.org/index.php?topic=532.msg6306#msg6306",
        year: 2010
    },    
    {
        Quote: "WikiLeaks has kicked the hornet’s nest, and the swarm is headed towards us.",
        Source: satoshi,
        citation: "https://bitcointalk.org/index.php?topic=2216.msg29280#msg29280",
        year: 2010
    },
    {
        Quote: "Lost coins only make everyone else’s coins worth slightly more.  Think of it as a donation to everyone.",
        Source: satoshi,
        citation: "https://bitcointalk.org/index.php?topic=198.msg1647#msg1647",
        year: 2010
    },
    {
        Quote: "In a few decades when the reward gets too small, the transaction fee will become the main compensation for [mining] nodes. I’m sure that in 20 years there will either be very large transaction volume or no volume.",
        Source: satoshi,
        citation: "https://bitcointalk.org/index.php?topic=48.msg329#msg329",
        year: 2010
    },
  ]

  for(single in quotes){
    console.log(quotes[single].Quote)
  }
  
  
  /*** 
   X Create the array of quote objects and name it `quotes`.
   X Add at least five quote objects to the `quotes` array.
   X Give each quote object a `quote` and `source` property.
   X Add the `citation` property to at least one object in the array.
   X Add the `year` property to at least one object in the array.
    Use console.log() to log your array of quotes to the console.
  ***/
  
function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * quotes.length)
  return randomNumber;
}

getRandomQuote();
console.log(randomNumber);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




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




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.