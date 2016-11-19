window.onload = function() {

};

// fonction qui cache la section visible
$(document).ready(function animationMenu() {

    $('#boutonAccueil').click(function() {
        $('section').filter(':visible').slideUp(500,function(){
            $("#accueil").slideDown();
        });
    });

    $('#boutonInscription').click(function(){
        $('section').filter(':visible').slideUp(500,function(){
            $("#inscription").slideDown();
        });
    });

    $('#boutonCarte').click(function() {
        $('section').filter(':visible').slideUp(500,function(){
            $("#carte").slideDown();
        });
    });
});

