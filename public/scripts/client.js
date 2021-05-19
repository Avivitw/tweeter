/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $(".tweet footer span").text(timeago.format(1621229942803));
});





// const tweetObj = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// const createTweetElement = function(tweetObj){

//   let tweetHtml = `
//   <div>
//   <span>${tweetObj.user.name}</span>
//   </div>
//   `;
//   const $tweet = $(tweetHtml);

//   return $tweet;
// }

// $('.tweets-list').append(createTweetElement(tweetObj));