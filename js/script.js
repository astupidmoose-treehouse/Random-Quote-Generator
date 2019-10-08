// Load quotes into an array of objects

var quotes = [
    {
      quote: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.",
      source: "Satoshi Nakamoto",
      citation: "Bitcoin Blockchain",
      link: "https://blockchain.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      year: 2009,
    },
    {
      quote: "If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry.",
      source: "Satoshi Nakamoto",
      citation: "BitcoinTalk.org",
      link: "https://bitcointalk.org/index.php?topic=532.msg6306#msg6306",
      year: 2010
    },    
    {
      quote: "WikiLeaks has kicked the hornet’s nest, and the swarm is headed towards us.",
      source: "Satoshi Nakamoto",
      citation: "BitcoinTalk.org",
      link: "https://bitcointalk.org/index.php?topic=2216.msg29280#msg29280",
      year: 2010
    },
    {
      quote: "Lost coins only make everyone else’s coins worth slightly more.  Think of it as a donation to everyone.",
      source: "Satoshi Nakamoto",
      citation: "BitcoinTalk.org",
      link: "https://bitcointalk.org/index.php?topic=198.msg1647#msg1647",
      year: 2010
    },
    {
      quote: "In a few decades when the reward gets too small, the transaction fee will become the main compensation for [mining] nodes. I’m sure that in 20 years there will either be very large transaction volume or no volume.",
      source: "Satoshi Nakamoto",
      citation: "BitcoinTalk.org",
      link: "https://bitcointalk.org/index.php?topic=48.msg329#msg329",
      year: 2010
    },
  ]


  // create a for-in loop for the quotes to be pulled from the array and output to the console. 

  for(single in quotes){
    console.log(quotes[single].quote + " -- " + quotes[single].source )
  }
  
// create a random number generator function, but limit it to the length of the quotes array to ensure we only ever pull as high as the number of available quotes.   

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber];
}

// call the random number generator, then print the HTML for that quote. 

function printQuote() {
  var quoteObject = getRandomQuote();
  var html = "";
  html += '<p class="quote">' + quoteObject.quote + '</p>';
  html += '<p class="source">' + quoteObject.source;
  if (quoteObject.citation){
    html += '<span class="citation">';
    html += '<a href="' + quoteObject.link + '" target="_blank">' + quoteObject.citation + '</a></span>';
  }
  if (quoteObject.year){
    html += '<span class="year">' + quoteObject.year + '</span>';
  }
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
}

// Call the function to print the initial quote

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);