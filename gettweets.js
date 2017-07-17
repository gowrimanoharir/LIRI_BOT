var keys = require('./keys.js');
var twitter = require('twitter');

exports.getTweets = (userName) => {

var client = new twitter(keys.twitterKeys);
userName= (userName==='')? "@elonmusk":userName;

var params = {screen_name: userName, count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    if(tweets.length!==0){
    	for(i=0;i<tweets.length;i++)
    	{
      	console.log(tweets[i].text+" @"+tweets[i].created_at);
      	console.log('----------------------------------------')
      }
    }
    else{
      console.log('No search results');
    }
  }
  else{
  	console.log('There is an error please try again after sometime');
  }
});

}