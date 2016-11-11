window.onload = function() {
    /*var header = document.getElementsByTagName("th").item(0);
    var test=header.firstChild.textContent;
    var tableau = document.getElementsByTagName("tr").item(0);
    var h2 = tableau.firstChild;
    var test2 = h2.firstChild.textContent;
    alert(test2);*/
    var data=[
        {"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
        {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
        {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
        {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
        {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
        {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];
    alert(data[0].order);
    remplirTableau();

};

$(document).ready(function() {
    $('#boutonAccueil').click(function() {
        $('#carte').slideUp();
        $('#inscription').slideUp();
        $("#accueil").delay(400).slideDown();
    });
    $('#boutonInscription').click(function() {
        $('#accueil').slideUp();
        $('#carte').slideUp();
        $("#inscription").delay(400).slideDown();
    });
    $('#boutonCarte').click(function() {
        $('#accueil').slideUp();
        $('#inscription').slideUp();
        $("#carte").delay(400).slideDown();
    });
    $('test').appendChild(remplirTableau());
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
}*/
