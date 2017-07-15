var keys = require('./keys.js');
var twitter = require('twitter');

exports.getTweets = () => {

var client = new twitter(keys.twitterKeys);


var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

}