$(function(){
  var square = $('#square');
  var wWidth = $(window).width()-100;
  var wHeight = $(window).height()-100;
$('#form').on('keydown', function(e){
  console.log(wWidth)
  //definir la position actuel du carré//
  var sTop = square.position().top;
  var sLeft = square.position().left;
  //*Je veux allé vers le bas code = 40*//
  if (e.which == 40){
    if(sTop >= wHeight){
      square.css('top', 0);
    }else{
    square.css('top', sTop + 10 +'px');
  }
}
  //*Je veux allé vers le haut code = 38*//
  if (e.which == 38){
    if(sTop <= 0){
      square.css('top', wHeight);
    }else{
    square.css('top', sTop + -10 +'px');
  }
}
  //*Je veux allé vers la droite code = 39*//
  if (e.which == 39){
    if(sLeft >= wWidth){
      square.css('left', 0);
    }else{
    square.css('left', sLeft + 10 +'px');
  }
}
  //*Je veux allé vers la gauche code = 37*//
  if (e.which == 37){
    if(sLeft <= 0){
      square.css('left', wWidth)
    }else{
    square.css('left', sLeft + -10 +'px');
  }
}
})
})
