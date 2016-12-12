<?php


session_start();

include ("localizer.php");

if(!isset($_SESSION["lang"])){
    $_SESSION["lang"] = "Fr";

}
else{
    $flag = ($_SESSION["lang"]== "Fr")?"fr":"en";
    // On ajoute le "en" ou "fr" de $flag pour aller chercher le bon dictionnaire
    // on l'assigne a lavairable $dico
    $locales  = $_SESSION["locales"];

    //Maintenant on peut prendre $dico pour toute nos valeures
}

?>


<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Celine Dupont, Marco Guilmette, Leonnel Noundou">
	<title>TP1</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Yatra+One" rel="stylesheet">
	<link rel="icon" href="./favicon.png">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="application/javascript" src="./javascript/menu.js"></script>
	<script type="application/javascript" src="./javascript/tableau.js"></script>
	<script type="application/javascript" src="./javascript/formulaire.js"></script>
</head>

<body><!-- page content -->
	<header>
		<img src="images/logo.jpg" alt="logo UQTR"/>
		<h1 id="titre"><?php echo $locales["title_01"][$flag] ;?></h1>
        <form  class=""  action="switch_locale.php" method="GET" >
            <input type="submit" value="<?php echo $locales["language"][$flag]; ?>">
        </form>
	</header>

	<nav><!--Menu-->
		<ul>
			<li id="boutonAccueil"><?php echo $locales["menu_01"][$flag]; ?></li>
			<li id="boutonInscription"><?php echo $locales["menu_02"][$flag]; ?></li>
			<li id="boutonCarte"><?php echo $locales["menu_03"][$flag]; ?></li>
		</ul>
	</nav>

	<section id="accueil"><!-- Contenu-->

		<h3>Notre but:</h3>

		<p>Notre site propose aux étudiants désireux de réaliser une ou plusieurs activités de loisir de rejoindre les différentes activités proposées dans la liste suivante en trois étapes:</p>

		<ul>
			<li>S'inscrire</li>
			<li>Choisir une ou plusieurs activités</li>
			<li>Commencer les activités en groupe</li>
		</ul>

		<p>Les différentes activités des groupes sont sous la responsabilité de professionnels. Il s'agit de passionnés du domaine qui vous ferons découvrir des pans inédits de vos loisirs préférés.  Qu'attendez-vous... ? Rejoidnez-nous !</p>

		<h3>Liste des activités disponibles</h3>

		<table>
			<tr>
				<th id="#">#</th>
				<th id="activite"><?php echo $locales["table_01"][$flag]; ?></th>
				<th id="responsable"><?php echo $locales["table_02"][$flag]; ?></th>
				<th id="nombre"><?php echo $locales["table_03"][$flag]; ?></th>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</table>

	</section>


	<section id="inscription" class="inactif"> <!-- section contenant l'inscription-->
		<h3><?php echo $locales["form_01"][$flag]; ?></h3>

		<form class="inactif" method="post" onsubmit="return false" >

			<div>
				<label for="lastname"><?php echo $locales["form_02"][$flag]; ?></label>
				<input id="lastname" type="text" name="lastname"/>
			</div>

			<div>
				<label for="firstname"><?php echo $locales["form_03"][$flag]; ?></label>
				<input id="firstname" type="text" name="firstname" />
			</div>

			<div>
				<label for="ddn"><?php echo $locales["form_04"][$flag]; ?></label>
				<input id="ddn" type="text" name="ddn" placeholder ="aaaa-mm-jj"/>
			</div>

			<div>
				<label><?php echo $locales["form_05"][$flag]; ?></label>
				<input type="radio" name="sex" checked value="male"/><?php echo $locales["form_05a"][$flag]; ?>
				<input type="radio" name="sex" value="female"/><?php echo $locales["form_05b"][$flag]; ?>
			</div>

			<div>
				<label for="choixActivite"><?php echo $locales["form_09"][$flag]; ?></label>
				<select id="choixActivite" name="activite">
					<option value="badminton">Badminton</option>
					<option value="echecs">Échecs</option>
					<option value="kayak">Kayak</option>
					<option value="natation">Natation</option>
					<option value="randonnee">Randonnée</option>
					<option value="velo">Vélo</option>
				</select>
			</div>

			<div>
				<label for="motiv"><?php echo $locales["form_06"][$flag]; ?></label>
				<textarea id="motiv" rows="8" cols="50" name="motivation" ></textarea>
			</div>

			<div>
				<input type="reset" value=<?php echo $locales["form_07"][$flag]; ?> />
				<input type="submit" value=<?php echo $locales["form_08"][$flag]; ?> />
			</div>
		</form>

	</section>

	<section id="carte" class="inactif">

		<h3><?php echo $locales["map"][$flag]; ?></h3>

		<div id="map"></div>

		<script src="https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyD6_lta4zOOiy-yKrDXXu69Ph8d5Nptkss" async defer></script>

	</section>

</body>

</html>
