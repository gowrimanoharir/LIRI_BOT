//Include required user modules and node modules required for this api

var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var fs = require('fs');

/*export the module for get song details for the song name given by the user 
if no song name was given then it gets details the The sign by Ace of Base*/

exports.getSong = (songName) => {
	var output;

	//sets the default to The sign by ace of base if no song name was given by the user
	songName= (songName==='')? "The Sign Ace of Base":songName;

	//create new spotify object
	var song = new spotify(keys.spotifyKeys);

	//uses inbuilt search method to get the song details of the first search results (limited results from api to 1)
	song.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
	//catches error and 0 results for the input 
	  if (err) {
	    console.log('Error occurred: ' + err);
	  }
	  else if(data.tracks.items.length===0){
	  	output='No search results'
	  	+"\n************************************\n";
	  }
	  //if api response is successfull then parse the object and construct the output string
	  else{  	
		output = 
		"\nArtists: "+data.tracks.items[0].artists[0].name+'\n'
		+"Song's Name: "+data.tracks.items[0].name+'\n'
		+"Preview Link: "+data.tracks.items[0].preview_url+'\n'
		+"Album: "+data.tracks.items[0].album.name+'\n'
		+"\n************************************\n";
		}
		//display the output on screen and add to log file
		console.log(output);
		fs.appendFile('log.txt', output+'\n');
	});

}