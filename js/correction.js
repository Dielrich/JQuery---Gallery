// Attente de chargement du Document
$(function(){

    // Selection de toutes les images de la galerie et application d'un écouteur d'évènement (click)
    $('#galery-container img').click(function(){

        // Création et insertion de l'overlay avec l'image correspondant à la miniature cliquée (avec une animation)
        $('body').append('<div class="overlay"><div id="close-button">X</div><img src="../images/'+$(this).data('img')+'"><div>');

        // Animation de l'affichage de l'overlay
        $('.overlay').fadeIn(550, function (){

            // Stopper la propagation de l'évènement (click) dans l'image
            $(this).find('img').click(function(event){ event.stopPropagation()});

            // Attente d'un évènement (click) sur l'overlay
            $(this).click(function(){

                // Animation de la disparition de l'overlay
                $(this).fadeOut(550, function(){

                    // Suppression de l'overlay (avec une animation)
                    $(this).remove();

                });// fadeOut

            });//this2

        }); //fadeIn

    }); //click img

}); //rdy