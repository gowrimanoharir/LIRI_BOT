var keys = require('./keys.js');
var twitter = require('twitter');
var fs = require('fs');

exports.getTweets = (userName) => {
  var output;
  var client = new twitter(keys.twitterKeys);
  userName= (userName==='')? "@elonmusk":userName;
  
  var params = {screen_name: userName, count: 20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      if(tweets.length!==0){
      	for(i=0;i<tweets.length;i++)
      	{          
        	output='\n'+tweets[i].text+" @"+tweets[i].created_at+'\n'
          +'----------------------------------------';
          console.log(output);
          fs.appendFile('log.txt', output+'\n');
        }
        fs.appendFile('log.txt','\n******************************\n');
      }
      else{
            output = 'No search results';
            console.log(output);
            fs.appendFile('log.txt', output+'\n');
      }
    }
    else{
    	output = 'There is an error please try again after sometime';
      console.log(output);
      fs.appendFile('log.txt', output+'\n');
    }
  });

}