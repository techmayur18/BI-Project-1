// var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var url = [{
  quoteText: `I'm not a great programmer; I'm just a good programmer with great habits.`,
  quoteAuthor: ` Kent Beck`
}, {
  quoteText: `Talk is cheap. Show me the code.`,
  quoteAuthor: ` Linus Torvalds`
}, {
  quoteText: `Programs must be written for people to read, and only incidentally for machines to execute.`,
  quoteAuthor: ` Harold Abelson`
}, {
  quoteText: `Truth can only be found in one place: the code.`,
  quoteAuthor: ` Robert C`
}, {
  quoteText: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
  quoteAuthor: ` Muhammad Waseem`
}, {
  quoteText: `How you look at it is pretty much how you'll see it`,
  quoteAuthor: ` Steve Jobs`
}, {
  quoteText: `The most disastrous thing that you can ever learn is your first programming language.`,
  quoteAuthor: ` Alan Kay`
}, {
  quoteText: `The most important property of a program is whether it accomplishes the intention of its user.`,
  quoteAuthor: `C.A.R. Hoare`
}, {
  quoteText: `i am committed to push my branch to the master.`,
  quoteAuthor: `Halgurd Hussein`
}, {
  quoteText: `Coding is not just code, that is a live thing to serve everyone!`,
  quoteAuthor: `Ming Song`
},]

var colour= ["#ECF5B7", "#7D9014","#B7E1CE", "#FFAB91", "#FF7043", "#919A84", "#5E6553","#0097A7","#3F51B5","#F06292","#90CAF9","#C5CAE9","#CDDC39","#D32F2F","#D32F2F","#E6EE9C"];
var Quote;
var Author;

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Let's Start our morning with a new quote";
} else if (time < 18) {
  greeting = "Let's Start our afternoon with a new quote";
} else {
  greeting = "Let's Start our evening with a new quote";
}

function getQuote(a)
{
  $(".quote-text").animate({opacity: 0}, 300,
    function() {
      $(this).animate({opacity: 1}, 300);
      $(this).text(a.quoteText);});
  		 
    if (a.quoteAuthor === '') {
      a.quoteAuthor = 'Unknown';
    }
    Quote=a.quoteText;
    Author=a.quoteAuthor;
    $(".quote-author").animate({opacity: 0}, 300,
    function() {
      $(this).animate({opacity: 1}, 300);
      $(this).text(a.quoteAuthor);
    });
        
      var c=Math.floor(Math.random()*16);
 
      $("body").animate({backgroundColor: colour[c]}, 300);
      $('.quote').animate({color: colour[c]},300);
      $('.author').animate({color : colour[c]},300);
      $('#newQuote').animate({ backgroundColor: colour[c]},300);
}

$(document).ready(function() {
	 $.ajaxSetup({cache : false});
	 $.getJSON(url,getQuote,'jsonp');
});

$(function() {
$("#newQuote").on('click', function(){
	 $.ajaxSetup({cache : false});
	 $.getJSON(url,getQuote,'jsonp');
});
});

