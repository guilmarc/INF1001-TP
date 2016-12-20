<?php

include "connection.php";

$sql = mysqli_query($connection, "SELECT * FROM activity");
while ($row = $sql->fetch_assoc()){
    echo '<option value="'.$row['id'].'">' . $row['activityname'] . '</option>';
}
?>
