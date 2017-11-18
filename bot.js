console.log("starting the bot!");
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'xxx',
  consumer_secret:      'yyy',
  access_token:         '123',
  access_token_secret:  '88800',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var params = { q: 'banana since:2011-07-11', count: 10 };

T.get('search/tweets',params,gotData)

function gotData(err,data,response) {
    var tweets = data.statuses;
    for(var i=0; i<tweets.length; i++){
        console.log(tweets[i].text)
    }
    
} 

T.get('followers/ids', { screen_name: 'sureshnaloor' },  function (err, data, response) {
  console.log(data)
})
