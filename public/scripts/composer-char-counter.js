$(document).ready(function() {
  $(`#tweet-text`).on(`input`, function(){
    let tweetLength= $(this).val().length;
    let $counter = $(this).siblings(`.new-tweet-bottom`).first().find(`.counter`).text(140 - tweetLength);
    $counter.toggleClass(`invalid`, tweetLength > 140);

  })
});