Auteurs : Celine Dupont, Marco Guillemette, Leonnel Noundou

** S'assurer que le sql-mode ne contient pas le parametre ONLY_FULL_GROUPE_BY.  ** 
Certaines versio de Wamp utilise ce paramêtre par défaut et cela enpêche certaines requêtes SQL de s'éxécuter.

Au besoin faire la requete suivante :  SET GLOBAL sql_mode = '';

Cette requete modifie le sql-mode.
