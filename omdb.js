//Include required user modules and node modules required for this api

var request = require('request');
var keys = require('./keys.js');
var fs = require('fs');

/*export the module for get movie details for the movie name given by the user 
if no movie name was given then it gets the info for Mr.Nobody*/

exports.movieDtls = (movieName) =>{
	var output;

	//sets the default to Mr.Nobody if no movie name was given by the user
	movieName= (movieName==='')? "Mr.Nobody":movieName;

	//construct the api url
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey="+keys.omdbKey;

	//initiate the api
	request(queryUrl, function(error, response, body){
		//if api response is successfull the parse the object and construct the output string

	  if(!error && response.statusCode === 200){
		  	var rtnRating='N/A';
		  	movie=JSON.parse(body);
		  	if(movie.Title){

			  	if(movie.Ratings){
				  	movie.Ratings.forEach((rtng)=>{
				  		if(rtng.Source==='Rotten Tomatoes')
				  		{
				  			rtnRating = rtng.Value;	
				  		}		
				  	});
			  	}
			  	output = 
				'\nTitle: '+movie.Title+'\n'
			  	+'Year: '+movie.Year+'\n'
			  	+'IMDB Rating: '+movie.imdbRating+'\n'
			  	+'Rotten Tomatoes Rating: '+rtnRating+'\n'
			  	+'Country: '+movie.Country+'\n'
			  	+'Language: '+movie.Language+'\n'
			  	+'Plot: '+movie.Plot+'\n'
			  	+'Actors: '+movie.Actors+'\n'
			  	+"\n************************************\n";
		  }
		  else{
		  	//if no success response then display no results
		  	output='No search results'
		  	+"\n************************************\n";
		  }
		  //display the output on screen and add to log file
		console.log(output);
		fs.appendFile('log.txt', output+'\n');
	  }


	});

	
}