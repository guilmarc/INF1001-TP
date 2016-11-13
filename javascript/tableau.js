window.onload = function() {

    //alert("test");
    // remplit le tableau pour la première fois à l'ouverture de la page
    remplirTableau("#");

};


$(document).ready(function() {
    $('th').on("click",function choixTri () {
        viderTableau();
        remplirTableau(event.target.id);          // rempli le tableau selon la colomne cliquée
    });
});


//fonction qui incrit les données du tableau selon la colomne cliquée par l'usager
function remplirTableau (column) {

    var data=[
        {"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
        {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
        {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
        {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
        {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
        {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];

    var tableauTri; // contiendra le tableau trié

    // selectionner le tri de tableau a effectuer selon la colonne cliquée
    switch (column){
        case "#":
            tableauTri = triertableau(data,"#");
            break;
        case "activite":
            tableauTri = triertableau(data,"activity");
            break;
        case "responsable":
            tableauTri = triertableau(data,"responsable");
            break;
        case "nombre":
            tableauTri = triertableau(data,"numofsub");
            break;
        default:
            tableauTri = triertableau(data,"#");
            break;
    }

    // inscrire les valeur triées dans le tableau
    for(var i=1;i<7;i++) {
        var rows = document.getElementsByTagName("tr").item(i);
        rows.childNodes[1].textContent = tableauTri[i - 1].order;
        rows.childNodes[3].textContent = tableauTri[i - 1].activity;
        rows.childNodes[5].textContent = tableauTri[i - 1].manager;
        rows.childNodes[7].textContent = tableauTri[i - 1].numofsub;
    }
}

// fonction qui efface le contenu des champs du tableau
function viderTableau(){
    for(var i=1;i<7;i++){
        var rows = document.getElementsByTagName("tr").item(i);
        rows.childNodes[1].textContent="";
        rows.childNodes[3].textContent="";
        rows.childNodes[5].textContent="";
        rows.childNodes[7].textContent="";
    }
}

// fonction qui trie les objets d'un tableau en ordre alphabetique selon la clef choisie
function triertableau(tableau,clef){

        switch(clef){
            case "#":
                tableau.sort(function compareActivity(a, b){
                    if (a.order < b.order)
                        return -1;
                    if (a.order > b.order)
                        return 1;
                    return 0;
                });
                break;
            case"activity":
                tableau.sort(function compareActivity(a, b){
                    if (a.activity < b.activity)
                        return -1;
                    if (a.activity > b.activity)
                        return 1;
                    return 0;
                });
                break;
            case "responsable":
                tableau.sort(function compareActivity(a, b){
                if (a.manager < b.manager)
                    return -1;
                if (a.manager > b.manager)
                    return 1;
                return 0;
            });
                break;
            case "numofsub":
                tableau.sort(function compareActivity(a, b){
                    if (a.numofsub < b.numofsub)
                        return -1;
                    if (a.numofsub > b.numofsub)
                        return 1;
                    return 0;
                });
                break
        }
    return tableau;
}




