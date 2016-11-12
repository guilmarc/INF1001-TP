window.onload = function() {

    //alert("test");

};

$(document).ready(function animationMenu() {
    var visible="accueil";

    $('#boutonAccueil').click(function() {
        if(visible=="inscription")
            $('#inscription').slideUp(500,function(){
                $("#accueil").slideDown();
            });

        if(visible=="carte")
            $('#carte').slideUp(500,function(){
                $("#accueil").slideDown();
            });
        visible="accueil";  // indique la section actuellement visible
    });

    $('#boutonInscription').click(function() {
        if(visible=="carte")
            $('#carte').slideUp(500,function () {
                $("#inscription").slideDown();
            });
        if(visible=="accueil")
                $('#accueil').slideUp(500,function () {
                    $("#inscription").slideDown();
                });
        visible="inscription";  // indique la section actuellement visible
    });

    $('#boutonCarte').click(function() {
        if(visible=="accueil")
            $('#accueil').slideUp(500,function () {
                $("#carte").slideDown();
            });
        if(visible=="inscription")
            $('#inscription').slideUp(500,function () {
                $("#carte").slideDown();
            });
        visible="carte";    // indique la section actuellement visible
    });
});

