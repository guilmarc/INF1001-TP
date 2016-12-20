<?php

$servername = "localhost";
$username = "root";
$password = "";
$database="site";





// Create connection
$connection = new mysqli($servername, $username, $password, $database);
// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
