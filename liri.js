var omdb=require('./omdb.js');
var tweets=require('./gettweets.js');
var spotify=require('./spotify.js');
//var lastCmd=require('./lastcommand.js');

var userInput=process.argv;
var	searchFor=userInput.splice(3).join('+').trim();

liribot(userInput[2]);

liribot(userCommand) => {

	if(userCommand==='movie-this'){
		omdb.movieDtls(searchFor);
	}
	else if(userCommand==='get-tweets'){
		tweets.getTweets(searchFor);
	}
	else if(userCommand==='spotify-this-song'){
		spotify.getSong(searchFor);
	}
	else if(userCommand==='do-what-it-says'){
		omdb.movieDtls(searchFor);
	}
	else{
		console.log("Enter a valid command from one of below:\n");
		console.log("movie-this <movie name> - to get the details of given movie\n");
		console.log("spotify-this-song <song name with or without artist> - to get the details of given song\n");
		console.log("get-tweets <screen name>- to get last 20 tweets of given twitterhandle\n");
		console.log("do-what-it-says - to execute the last command\n");
	}

}


