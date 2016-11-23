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
            $("#carte").slideDown(
                function initMap() {
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