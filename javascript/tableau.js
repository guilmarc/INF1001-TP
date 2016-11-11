window.onload = function() {

    //alert("test");
    remplirTableau(1);

};


$(document).ready(function() {
    $('th').on("click",function choixTri () {
        viderTableau();
        remplirTableau(event.target.id); // envoie le choix de tri
    });
});


//fonction de tri de tableau selon le header clické
function remplirTableau (column) {

    var data=[
        {"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7}, //index 0 du tableau contien objet
        {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
        {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
        {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
        {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
        {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];

    var table = document.getElementsByTagName("table").item(0);

    switch (column){
        case "#":
            for(var i=1;i<7;i++){
                var rows = document.getElementsByTagName("tr").item(i);
                var rowchild=rows.childNodes;
                rowchild[1].textContent=data[i-1].order;
                rowchild[3].textContent=data[i-1].activity;
                rowchild[5].textContent=data[i-1].manager;
                rowchild[7].textContent=data[i-1].numofsub;
            }
            break;
        case "responsable":
            for(var i=1;i<7;i++){
                var rows = document.getElementsByTagName("tr").item(i);
                var rowchild=rows.childNodes;
                rowchild[1].textContent=data[1].order;
                rowchild[3].textContent=data[1].activity;
                rowchild[5].textContent=data[1].manager;
                rowchild[7].textContent=data[1].numofsub;
            }
            break;
        default:
            for(var i=1;i<7;i++){
                var rows = document.getElementsByTagName("tr").item(i);
                var rowchild=rows.childNodes;
                rowchild[1].textContent=data[i-1].order;
                rowchild[3].textContent=data[i-1].activity;
                rowchild[5].textContent=data[i-1].manager;
                rowchild[7].textContent=data[i-1].numofsub;
            }
            break;
    }

}

function viderTableau(){
    for(var i=1;i<7;i++){
        var rows = document.getElementsByTagName("tr").item(i);
        var rowchild=rows.childNodes;
        rowchild[1].textContent="";
        rowchild[3].textContent="";
        rowchild[5].textContent="";
        rowchild[7].textContent="";
    }
}
