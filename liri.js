var omdb=require('./omdb.js');
var tweets=require('./gettweets.js');
var spotify=require('./spotify.js');
var fs = require('fs');

var userInput=process.argv;
var	searchFor=userInput.splice(3).join('+').trim();



liribot(userInput[2]);

function liribot(userCommand) {
	var curDt = new Date();
	if(userCommand!=='do-what-it-says'){
		fs.appendFile('log.txt', curDt+'\n\n'+userInput.splice(2)+' '+searchFor.split('+').join(' ')+'\n');
	}
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
		fs.readFile('random.txt', 'utf8', function(err, data){
			if(!err){
				var cmdNow = data.split(',');
				searchFor = cmdNow[1];
				liribot(cmdNow[0]);
			}
			else{
				console.log(err);
			}

		});
		
	}
	else{
		console.log("Enter a valid command from one of below:\n");
		console.log("movie-this <movie name> - to get the details of given movie\n");
		console.log("spotify-this-song <song name with or without artist> - to get the details of given song\n");
		console.log("get-tweets <screen name>- to get last 20 tweets of given twitterhandle\n");
		console.log("do-what-it-says - to execute the last command\n");
	}

}


