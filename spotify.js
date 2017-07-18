var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var fs = require('fs');

exports.getSong = (songName) => {
	var output;
	songName= (songName==='')? "The Sign Ace of Base":songName;

	var song = new spotify(keys.spotifyKeys);

	song.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
	  if (err) {
	    console.log('Error occurred: ' + err);
	  }
	  else if(data.tracks.items.length===0){
	  	output='No search results'
	  	+"\n************************************\n";
	  }
	  else{  	
		output = 
		"\nArtists: "+data.tracks.items[0].artists[0].name+'\n'
		+"Song's Name: "+data.tracks.items[0].name+'\n'
		+"Preview Link: "+data.tracks.items[0].preview_url+'\n'
		+"Album: "+data.tracks.items[0].album.name+'\n'
		+"\n************************************\n";
		}
		console.log(output);
		fs.appendFile('log.txt', output+'\n');
	});

}