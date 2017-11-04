$(function(){
  //On définit la variable pour créer le carré
  var element = $('#element').css('width','10px').css('height','10px').css('background','red');
  $('#Bouton1').click(function(){
    //Au clic, on ajoute +10px en largeur et en longueur
    //height()/width() -> retourne ou modifis la largeur/longueur de l'élément sélectionné
    var height = $('#element').height() + 10;
    var width = $('#element').width() + 10;
    $('#element').css('width',width).css('height',height)
    if(height > 100){
      $('#element').css('width','10px').css('height','10px');
    }
  });
  $('#Bouton2').click(function(){
    $('#element').css('background','green');
  });
  $('#Bouton3').click(function(){
    $('#element').css('background','red');
  });
  $('#Bouton4').click(function(){
    $('#element').hide();
  });
  $('#Bouton5').click(function(){
    $('#element').show();
  });
});
