var request = require('request');
var keys = require('./keys.js');
var fs = require('fs');


exports.movieDtls = (movieName) =>{
	var output;
	movieName= (movieName==='')? "Mr.Nobody":movieName;
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey="+keys.omdbKey;

	request(queryUrl, function(error, response, body){

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
		  	output='No search results'
		  	+"\n************************************\n";
		  }
		console.log(output);
		fs.appendFile('log.txt', output+'\n');
	  }


	});

	
}