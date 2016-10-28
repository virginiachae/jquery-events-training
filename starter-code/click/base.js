console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click', display)
  function display() {
    //console.log($(this).text());
    var $spanText = $(this).text()

    var $newLi = $('<li></li>');
    $('ul').append($newLi);
    $newLi.text($spanText);
  };
})
