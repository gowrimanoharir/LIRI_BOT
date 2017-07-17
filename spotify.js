var keys = require('./keys.js');
var spotify = require('node-spotify-api');

exports.getSong = (songName) => {

songName= (songName==='')? "The Sign Ace of Base":songName;

var song = new spotify(keys.spotifyKeys);

song.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
  }
  else if(data.tracks.items.length===0){
  	console.log('No search results');
  }
  else{
  	console.log("Artists: "+data.tracks.items[0].artists[0].name);
	console.log("Song's Name: "+data.tracks.items[0].name);
	console.log("Preview Link: "+data.tracks.items[0].preview_url);
	console.log("Album: "+data.tracks.items[0].album.name);
	}
});

}