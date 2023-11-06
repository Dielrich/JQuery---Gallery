$(document).ready(function () {

    //variable pour selectionner les images
    let images = $("img");
    
//a chaque clique sur les images
images.click(function() {
  
    //recupere l'indexage
    let index = $(this).index();

    //creation d'une balise
    let overlay = $('<div class="overlay"></div>');

    //chsoisir la source grace à la concatenation
    let imgSrc = '../images/' + (index + 1) + '.jpg';
    
    //Creation de la balise image + l'attribut source
    let overlayContent = $('<img>').attr('src', imgSrc);
  
    //ajout de la balise <div> dans le body + la classe overlay pour l'overlay
    $('body').append(overlay);
    overlay.fadeIn(1000);
  
    //ajout de la balise img dans le body + la classe image pour le positionnnement (avec du z-index pour la superposition)
    $('body').append(overlayContent);
    overlayContent.addClass('active').fadeIn(1000);
  
      //clqiue sur l'overlay pour fermer l'img + l'overlay
        overlay.click(function () {
            overlay.fadeOut(1000, function () {
                $(this).remove();
            });//fadeout overlay
            overlayContent.fadeOut(1000, function () {
                $(this).remove();
            });//fadeout overlaycontent
        });//overlay remove
});//click images
});//rdy