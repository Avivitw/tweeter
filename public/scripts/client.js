/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $(".tweet footer span").text(timeago.format(1621229942803));
});





const tweetObj = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

const createTweetElement = function(tweetObj){

  let $tweet =   $(`<article class="tweet">Hello world 
                  <header><span class="name">Vivi theBest</span><span class="handle">@vivi</span></header>
                  <div>this is the main part: tweet tweet tweet</div>
                  <footer><span>10 Days ago</span><i class="fas fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-flag"></i></footer>
                  </article>`);

  return $tweet;

}

// const $tweet = createTweetElement(tweetObj);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('.tweets--list').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
