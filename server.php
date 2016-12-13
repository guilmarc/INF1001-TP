<?php

$lastname=$_POST["lastname"];
$firstname=$_POST["firstname"];
$birthdate=$_POST["birthdate"];
$sex=$_POST["sex"];
$activityID=$_POST["activityID"];
$motivation=$_POST["motivation"];

include "connection.php";


$sql = "INSERT INTO member (fullname, dob, sex, activityid, motivation) VALUES ('$firstname $lastname', '$birthdate', '$sex', $activityID, '$motivation' )";


if ($connection->query($sql) === TRUE) {
    echo "L'activité a été enregistrée avec succès dans le système.  Appuyez sur précédent pour revenir en arrière";
} else {
    echo "Error: " . $sql . "<br>" . $connection->error;
}

$connection->close();
