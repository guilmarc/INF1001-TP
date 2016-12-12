<?php
/**
 * Created by PhpStorm.
 * User: guilmarc
 * Date: 2016-12-12
 * Time: 4:35 PM
 */

$servername = "localhost";
$username = "root";
$password = "root";
$database="site";

$mysqli = new mysqli($servername, $username, $password, $database);

// Vérification de la connexion
if ($mysqli->connect_errno) {
    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
    exit();
}
if (!$mysqli->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $mysqli->error);
    exit();
} else {
    //  printf("Jeu de caractères courant : %s\n", $mysqli->character_set_name());
}


// Ici on appel notre requete

$query = "SELECT * FROM dictionary";
$result = $mysqli->query($query);


$dictionary = array();
//Ici on récupère les valeurs de la requête on les mets dans une variable
while ($row = $result->fetch_array(MYSQLI_BOTH)) {
    foreach($row as $champ => $valeur ){

        $dictionary[$row['_key']] = array (
            'fr' => $row['fr'],
            'en' => $row['en'],
        );
    }

}

//On crée une variable de session a laquelle on assigne notre dictionnaire

$_SESSION["locales"]= $dictionary;




// Simplement pour valider que nos variables s'affichent
//print_r($dictionary);


$mysqli->close();

//une fois le dictionnaire chargé on retourne a notre page principale


?>