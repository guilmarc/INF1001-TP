// fonction qui gere l'affichage des section selon l'option de menu choisie.
$(document).ready(function animationMenu() {

    $('#boutonAccueil').on("click", function () {
        $('li').removeClass("active");
        $('#boutonAccueil').addClass("active");
        $('#inscription').addClass("inactif");
        $('section').filter(':visible').slideUp(500, function () {
            $("#accueil").slideDown();
        });
    });

    $('#boutonInscription').on("click",function () {
        $('li').removeClass("active");
        $('#boutonInscription').addClass("active");
        $('section').filter(':visible').slideUp(500, function () {
            $("#inscription").slideDown(500,function () {
                $('form').removeClass("inactif")
            });
        });
    });

    // lors de l'affichage de la section carte, on lance le script pour afficher la carte de google.
    $('#boutonCarte').on("click",function () {
        $('li').removeClass("active");
        $('#boutonCarte').addClass("active");
        $('#inscription').addClass("inactif");
        $('section').filter(':visible').slideUp(500, function () {
            $("#carte").slideDown(function initMap() {
                var myLatlng = new google.maps.LatLng(46.3938, -72.6534);
                var mapOptions = {
                    zoom: 9,
                    center: myLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map

                });
            });
        });
    });
});