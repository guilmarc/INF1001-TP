$(document).ready(function () {

    $("form").on("submit", function () {

        // verifie que le champ "nom de famille" est rempli
        if (document.forms[0].elements.lastname.value === "") {
            alert("Le nom ne doit pas être vide !");
            document.forms[0].elements.lastname.focus();
            return false;
        }
        // verifie que le champ "prenom" est rempli
        if (document.forms[0].elements.firstname.value === "") {
            alert("Le prénom ne doit pas être vide !");
            document.forms[0].elements.firstname.focus();
            return false;
        }
        // verifie que le champ "date de naissance" est rempli
        if (document.forms[0].elements.ddn.value === "") {
            alert("La date ne doit pas être vide !");
            document.forms[0].elements.ddn.focus();
            return false;
        }

        // apres la validation, réaffiche la page accueil
        $('li').removeClass("active");
        $('#boutonAccueil').addClass("active");
        $('form').addClass("inactif");
        $("#inscription").slideUp(500,function() {
            $("#accueil").slideDown();
        });
    });
});
