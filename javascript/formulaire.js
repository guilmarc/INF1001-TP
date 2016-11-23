$(document).ready(function () {

    $("form").on("submit",function (event){


        if(document.forms[0].elements["lastname"].value === ""){
            alert("Le nom ne doit pas être vide !");
            document.forms[0].elements["lastname"].focus();
            return false;
        };

        if(document.forms[0].elements["firstname"].value === ""){
            alert("Le prénom ne doit pas être vide !");
            document.forms[0].elements["firstname"].focus();
            return false;
        };

        if(document.forms[0].elements["ddn"].value === ""){
            alert("La date ne doit pas être vide !");
            document.forms[0].elements["ddn"].focus();
            return false;
        };


        $("#inscription").slideUp(500,function(){
            $("#accueil").slideDown();
        });
    });

});


