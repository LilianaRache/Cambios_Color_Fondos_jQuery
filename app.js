
$(document).ready(function(){
  $('div').on('click', function(e){
    $('body').removeClass();
      if ($(this).attr('id') == 1) {
            $('body').addClass('yellow')
      } else if ($(this).attr('id') == 2) {
            $('body').addClass('blue')
      } else if ($(this).attr('id') == 3) {
            $('body').addClass('red')
      }
      console.log(e)
  });

  $('#input').keyup(function(e) {
    $("body").removeClass()
    if (e.key === "b"){
      $("body").addClass("blue")
    }
    else if (e.key === "r") {
        $("body").addClass("red")
    }
    else if (e.key === "y") {
        $("body").addClass("yellow")
    }
  
});
});
