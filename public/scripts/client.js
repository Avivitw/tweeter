/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */





// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1601116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement = function(tweet){

  let $tweet =   $(`<article class="tweet">
                    <header>
                      <span class="name"> <img src="${tweet.user.avatars}" /> ${tweet.user.name}</span>
                      <span class="handle">${tweet.user.handle}</span>
                    </header>
                    <div>${tweet.content.text}</div>
                    <footer>
                      <span>${timeago.format(tweet.created_at)}</span>
                      <i class="fas fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-flag"></i>
                    </footer>
                  </article>`);

  return $tweet;

}


const renderTweets = function(tweets){

  // loops through tweets
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.tweets-list').append($tweet);
  }  
};

renderTweets(data);

// const $tweet = createTweetElement(tweetObj);

// // // Test / driver code (temporary)
// // console.log($tweet); // to see what it looks like
// $('.tweets-list').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
