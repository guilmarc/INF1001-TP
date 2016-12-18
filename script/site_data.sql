-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 09, 2016 at 02:06 AM
-- Server version: 5.6.33
-- PHP Version: 7.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `site`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `id` int(11) NOT NULL,
  `activityname` varchar(80) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `activityname`, `description`) VALUES
(1, 'Badminton', 'S\'amuser de façon très masculine à détruire un pauvre petit moineau qui n\'a pas demandé de venir au monde'),
(2, 'Échecs', 'Passer des heures assis sur une chaise afin de prouver à son adversaire que nous somme intellectuellement supérieur à lui...  vla ! Dans les dents !'),
(3, 'Kayak', 'Un kayak (danois kajak, inuktitut ᖃᔭᖅ qajaq) est un canot léger qui aujourd’hui utilise une pagaie à deux pales2 pour le propulser, le diriger et l’équilibrer.\r\n\r\nLe kayak est parfois confondu avec le canoë, un type d\'embarcation distinct, la pratique sportive étant désignée par le terme général « canoë-kayak ». La construction et la pratique contemporaine distinguent notamment le kayak de rivière (eaux-vives) et le kayak de mer'),
(4, 'Natation', 'Apprendre à avancer dans l\'eau même, en réalité, on a deux jambes et qu\'il y a AUCUNE raison de vouloir avancer dans l\'eau sauf si c\'est pour sauver Némo !'),
(5, 'Randonnée', 'Un sport précisément créé par et pour des vieux qui ne sont plus capable de dire qu\'il font du jogging à cause de leurs problèmes d\'artrite'),
(6, 'Vélo', 'Une bicyclette (aussi appelé un bicycle en Amérique du Nord), ou un vélo (abréviation du mot vélocipède), est un véhicule terrestre, entrant dans la catégorie des cycles, composé de deux roues alignées (d\'où le nom « bicyclette »). La force motrice est fournie par son conducteur (appelé « cycliste »), en position le plus souvent assise, par l\'intermédiaire de deux pédales entraînant la roue arrière par une chaîne.\r\n\r\nLa directive 2001/95/CE de la Commission européenne relative à la sécurité des produits propose comme définition de bicyclette : « un véhicule à deux roues propulsé exclusivement ou principalement par l\'énergie musculaire du cycliste, à l\'exception des véhicules équipés de deux selles ou plus1 ».\r\n\r\nLa roue avant est directrice ce qui permet l\'équilibre. Son orientation est commandée par un guidon. Le cycliste a souvent les deux mains en contact du guidon afin de contrôler la trajectoire, le freinage ainsi que le passage des vitesses.\r\n\r\nLa bicyclette est l\'un des principaux moyens de transport dans de nombreuses parties du monde. Sa pratique, le cyclisme, constitue à la fois un usage quotidien, un loisir populaire et un sport.\r\n\r\nEn ville, on roule en moyenne à 15 km/h2. Les adultes se déplacent à environ 16 à 30 km/h sur le plat sur un vélo debout sans carénage. Sur un vélo de course rapide, un cycliste entraîné peut atteindre environ 70 km/h sur un parcours horizontal, durant de courtes périodes (sprints). Le record de vitesse pour un vélo à propulsion totalement humaine sur le plat, obtenu en vélo couché à carénage sans utiliser de véhicule ouvreur servant d\'écran aérodynamique, est de 137,93 km/h. Il a été atteint par Todd Reichert en 20153.\r\n\r\nPar rapport à la marche, le vélo est deux à trois fois plus efficace à effort énergétique égal4 et entre deux et quatre fois plus rapide. Il a été également calculé qu\'en termes de conversion en mouvement de l\'énergie issue de la nourriture, il s\'agit d\'une forme de locomotion plus efficace que celle de n\'importe quel organisme biologique (l’organisme biologique le plus efficace au kilomètre est le martinet et le second est le saumon).');

-- --------------------------------------------------------

--
-- Table structure for table `dictionary`
--

CREATE TABLE `dictionary` (
  `id` int(11) NOT NULL,
  `key` varchar(8) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dictionary`
--

INSERT INTO `dictionary` (`id`, `key`, `en`, `fr`) VALUES
(1, 'menu_01', 'Home', 'Accueil'),
(2, 'menu_02', 'Subscribe', 'Inscription'),
(3, 'menu_03', 'Locate activity', 'Localiser une activité'),
(4, 'title_01', 'Leisure for students', 'Loisir pour les étudiants !'),
(5, 'menu_03', 'Locate activity', 'Localiser une activité'),
(6, 'form_01', 'Subscription', 'Inscrivez-vous'),
(7, 'form_02', 'Lastname', 'Nom'),
(8, 'form_03', 'Firstname', 'Prénom'),
(9, 'form_04', 'Birth date', 'Date de naissance'),
(10, 'form_05', 'Sex', 'Sexe'),
(11, 'form_05a', 'Male', 'Homme'),
(12, 'form_05b', 'Female', 'Femme'),
(13, 'form_06', 'Motivation', 'Motivation'),
(14, 'form_07', 'Reset', 'Réinitialiser'),
(15, 'form_08', 'Validate', 'Valider'),
(16, 'table_01', 'Activity', 'Activité'),
(17, 'table_02', 'Responsible', 'Responsable'),
(18, 'table_03', 'Inscriptions', 'Nombre inscriptions'),
(19, 'language', 'FR', 'EN'),
(20, 'form_09', 'Activity', 'Activités'),
(21, 'map', 'Map', 'Carte');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `fullname` varchar(80) NOT NULL,
  `dob` date NOT NULL,
  `sex` int(11) NOT NULL,
  `activityid` int(11) NOT NULL,
  `motivation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `id` int(11) NOT NULL,
  `fullname` varchar(80) NOT NULL,
  `activityid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dictionary`
--
ALTER TABLE `dictionary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `dictionary`
--
ALTER TABLE `dictionary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `supervisor`
--
ALTER TABLE `supervisor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;