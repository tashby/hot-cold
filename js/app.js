
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

newAnswer();
console.log(answer);

});

var count = 0;
var answer;

function newAnswer(){
	answer = Math.floor((Math.random() * 100) + 1);
};

function Counter(){
	count++; 
	$('#count').text(count);
};



  					$("#guessButton").click(function(g){
  					g.preventDefault();
  					var guess = $("#userGuess").val();
  					var guessTo = guess + " " ;
  					$('#guessList').append(guessTo);
					$('#userGuess').val('');
					Counter();
					checkGuess(guess);	

  			});




function checkGuess(guess){
	var range;
	var guessvalue = parseInt(guess);
	
	if (guess == answer){
		$("#feedback").text("You got it right!");
	} else if (guessvalue > answer) {
		range = guessvalue	 - answer;
	} else if (guessvalue < answer) {
		range = answer - guessvalue;

	}

	if (range >= 1 && range <= 10) {
		$("#feedback").text("Very Hot");
	} else if (range < 10 && range <= 20){
		$("#feedback").text("Hot");
	} else if (range < 20 && range <= 30){
		$("#feedback").text("Warm");
	} else if (range < 30 && range <= 50){
		$("#feedback").text("Cold");
	} else if ( range > 50){
		$("#feedback").text("Ice Cold");
	}


};

$(".new").on('click', function(){
 		window.location.reload(true);
 	});