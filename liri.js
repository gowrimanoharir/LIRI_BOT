
//Include required user modules and inbuilt file system modules for calling required function based on input command

var omdb=require('./omdb.js');
var tweets=require('./gettweets.js');
var spotify=require('./spotify.js');
var fs = require('fs');

//Get the user input 
var userInput=process.argv;

//splice at index 3 to get the input search term for each command
var	searchFor=userInput.splice(3).join('+').trim();


//call the liribot function passing the command enetered which is at index 2
liribot(userInput[2]);


/*This is the function that will be invoked on initiating this file in node, 
this processes the user input and calls the corresponding function*/
function liribot(userCommand) {
	var curDt = new Date();
	if(userCommand!=='do-what-it-says'){
		
		//logs the user command into the log file including the run date and time
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
	//this portion is used to give instructions to the user if invalid command is entered
	else{
		console.log("Enter a valid command from one of below:\n");
		console.log("movie-this <movie name> - to get the details of given movie\n");
		console.log("spotify-this-song <song name with or without artist> - to get the details of given song\n");
		console.log("get-tweets <screen name>- to get last 20 tweets of given twitterhandle\n");
		console.log("do-what-it-says - to execute the last command\n");
	}

}


