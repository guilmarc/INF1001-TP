<?php

include "connection.php";

if (!$connection->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $connection->error);
    exit();
} else {
    $connection->set_charset("utf8");
}



if(isset($_POST) && isset($_POST["key"]))
{
    if($_POST["key"]!="")
    {
        $sql = "SELECT activity.id,activity.activityname,supervisor.fullname, COUNT(member.id) FROM activity 
          JOIN supervisor ON activity.id=supervisor.activityid
          LEFT JOIN member ON (member.activityid = activity.id) 
          WHERE activityname LIKE '".$_POST["key"]."%'";

    }
    else
    {
        $sql = " SELECT activity.id,  activity.activityname,  supervisor.fullname,  COUNT(member.id) 
        FROM supervisor 
        LEFT JOIN activity ON (activity.id = supervisor. activityid) 
        LEFT JOIN member ON (member.activityid = activity.id) 
        GROUP BY activity.id ";

    }
}
else
{
    $sql = " SELECT activity.id,  activity.activityname, supervisor.fullname, COUNT(member.id) 
        FROM supervisor 
        LEFT JOIN activity ON (activity.id = supervisor. activityid) 
        LEFT JOIN member ON (member.activityid = activity.id) 
        GROUP BY activity.id ";
}


$r = $connection->query($sql);
$ret = array();
while($row = $r->fetch_row()){
    $ret[] = $row;
}

echo  json_encode($ret);
