var omdb=require('./omdb.js');
var myTweets=require('./mytweets.js');
//var spotify=require('./spotify.js');
//var lastCmd=require('./lastcommand.js');

var userInput=process.argv;
var	searchFor=userInput.splice(3).join('+').trim();

if(userInput[2]==='movie-this'){
	omdb.movieDtls(searchFor);
}
else if(userInput[2]==='my-tweets'){
	myTweets.getTweets();
}
else if(userInput[2]==='spotify-this-song'){
	omdb.movieDtls(searchFor);
}
else if(userInput[2]==='do-what-it-says'){
	omdb.movieDtls(searchFor);
}
else{
	console.log("Enter a valid command");
}


