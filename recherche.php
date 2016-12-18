<?php

//include "connection.php";

$user ="root";
$password="";
$dbname = "site";
$urldb = "localhost";
$connection = new mysqli($urldb,$user,$password,$dbname);
$connection->set_charset("utf8");
if($connection->connect_error){
    echo $connection->connect_error;
    die();
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
$retour = array();
while($row = $r->fetch_assoc()){
    $retour[] = $row;
}
//echo $retour
echo  json_encode($retour);
?>