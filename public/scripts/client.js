/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  
  
  
  const createTweetElement = function(tweet) {
    
    let $tweet =   $(`<article class="tweet">
    <header>
    <span class="name"> <img src="${tweet.user.avatars}"/> ${tweet.user.name}</span>
    <span class="handle">${tweet.user.handle}</span>
    </header>
    <div class="content-text"></div>
    <footer>
    <span>${timeago.format(tweet.created_at)}</span>
    <i class="fas fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-flag"></i>
    </footer>
    </article>`);
    //
    $tweet.find('.content-text').text(tweet.content.text);
    return $tweet;
    
  };
  
  
  const renderTweets = function(tweets) {
    
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('.tweets-list').prepend($tweet);
    }
  };
  
  const $errorMessage = $(".error-message");

  const displayMessage = function (message) {
    $errorMessage.text(`Error: ${message}`).show(300);
      setTimeout(function(){
        $errorMessage.hide(700);
      }, 4000);
  }

  $('.add-tweet').click(function(){
    console.log(`x`);
    $('.new-tweet').slideToggle()
    $('#tweet-text').focus();
  })



  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    let $tweetText = $("#tweet-text");
    if ($tweetText.val() === null || $tweetText.val() === ""){
      displayMessage(`Your tweet is empty`);
      return;
    } else if ($tweetText.val().length > 140) {
      displayMessage(`Your tweet is tooo long, please fix it`);
      return;
    } 

    let tweetForm =  $(this).serialize();

      // console.log(`tweetform`, tweetForm);
    $.ajax("/tweets",{
      method: "POST",
      data: tweetForm
    })
    .done(function(data) {
      $tweetText.val("").trigger('input')
      loadTweets();   
    });
  });

  const loadTweets = function() {

    console.log('loading tweets');
    $.ajax("/tweets", { 
      method: "GET",
      dataType: "json"
      })
    .then(function (tweets) {
      $(`.tweets-list`).empty();
      console.log('Success: ', tweets);
      renderTweets(tweets);
    });
    
  };

  loadTweets();

});
