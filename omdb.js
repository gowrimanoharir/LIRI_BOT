var request = require('request');
var keys = require('./keys.js');


exports.movieDtls = (movieName) =>{
	movieName= (movieName==='')? "Mr.Nobody":movieName;
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey="+keys.omdbKey;

	request(queryUrl, function(error, response, body){

	  if(!error && response.statusCode === 200){
		  	var rtnRating='N/A';
		  	movie=JSON.parse(body);
		  	if(movie.Title){
			  	console.log('Title: '+movie.Title);
			  	console.log('Year: '+movie.Year);
			  	console.log('IMDB Rating: '+movie.imdbRating);
			  	if(movie.Ratings){
				  	movie.Ratings.forEach((rtng)=>{
				  		if(rtng.Source==='Rotten Tomatoes')
				  		{
				  			rtnRating = rtng.Value;	
				  		}		
				  	});
			  	}
			  	console.log('Rotten Tomatoes Rating: '+rtnRating);
			  	console.log('Country: '+movie.Country);
			  	console.log('Language: '+movie.Language);
			  	console.log('Plot: '+movie.Plot);
			  	console.log('Actors: '+movie.Actors);
		  }
		  else{
		  	console.log('No Such Movie exists')
		  }
	  }


	});
}