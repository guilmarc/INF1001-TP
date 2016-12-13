<?php

include "connection.php";

if (!$connection->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $mysqli->error);
    exit();
} else {
    //  printf("Jeu de caractères courant : %s\n", $mysqli->character_set_name());
}


$query = "SELECT * FROM dictionary";
$result = $connection->query($query);


$dictionary = array();
//Ici on récupère les valeurs de la requête on les mets dans une variable
while ($row = $result->fetch_array(MYSQLI_BOTH)) {
    foreach($row as $champ => $valeur ){

        $dictionary[$row['key']] = array (
            'fr' => $row['fr'],
            'en' => $row['en'],
        );
    }

}

$_SESSION["locales"]= $dictionary;
$connection->close();

?>