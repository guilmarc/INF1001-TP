window.onload = function() {

    alert("test");

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
/*
function remplirTableau () {
    var data=[
        {"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
        {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
        {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
        {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
        {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
        {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];

    var header = document.getElementsByTagName("td").item(0);
    header.firstChild.textContent=data[0].order;
    var header2 = document.getElementsByTagName("td").item(1);
    header.firstChild.textContent=data[0].activity

 var header = document.getElementsByTagName("th").item(0);
 var test=header.firstChild.textContent;
 var tableau = document.getElementsByTagName("tr").item(0);
 var h2 = tableau.firstChild;
 var test2 = h2.firstChild.textContent;
 alert(test2);

}*/
