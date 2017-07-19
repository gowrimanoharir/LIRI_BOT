//Include required user modules and node modules required for this api

var keys = require('./keys.js');
var twitter = require('twitter');
var fs = require('fs');

/*export the module for get tweets for the twitter screen name given by the user 
if no screen name was given then it gets the tweets of Elon Musk*/

exports.getTweets = (userName) => {
  var output;

  //create new twitter object
  var client = new twitter(keys.twitterKeys);

  //sets the default to elonmusk if no screen name was given by the user
  userName= (userName==='')? "@elonmusk":userName;
  
  //sets the parametes for twitter screen name and the limit for no of tweets to get back
  var params = {screen_name: userName, count: 20};

  //uses inbuilt get method to get the last 20 tweets & replies of given user
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      if(tweets.length!==0){
        /*if no error from API and there are tweets returned then loop through 
        to console log the tweets with the time it was created*/
      	for(i=0;i<tweets.length;i++)
      	{ 
          //construct the output string to be used to console log and add to log file       
        	output='\n'+tweets[i].text+" @"+tweets[i].created_at+'\n'
          +'----------------------------------------';
          console.log(output);
          fs.appendFile('log.txt', output+'\n');
        }
        fs.appendFile('log.txt','\n******************************\n');
      }
      else{
            //if no tweets by the user then display no results
            output = 'No search results'
            +"\n************************************\n";
            console.log(output);
            fs.appendFile('log.txt', output+'\n');
      }
    }
    else{
      //if api errors out display below
    	output = 'There is an error please try again after sometime'
      +"\n************************************\n";
      console.log(output);
      fs.appendFile('log.txt', output+'\n');
    }
  });

}