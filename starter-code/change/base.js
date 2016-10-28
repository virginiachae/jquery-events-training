console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  
  $('.add').on('change', function(){
        var left = parseInt($('.add')[0].value);
        var right = parseInt($('.add')[1].value);
        var total = (left + right).toString()
        $('#total').val($('#total').val() + total);
  });

})
