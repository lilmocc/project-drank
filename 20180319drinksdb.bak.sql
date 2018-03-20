-- MySQL dump 10.13  Distrib 5.7.21, for osx10.13 (x86_64)
--
-- Host: localhost    Database: drinksDB
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `drinks`
--

DROP TABLE IF EXISTS `drinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drinks` (
  `drink_id` int(11) NOT NULL AUTO_INCREMENT,
  `drink_name` varchar(75) NOT NULL,
  `glass_type` varchar(40) NOT NULL,
  PRIMARY KEY (`drink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drinks`
--

LOCK TABLES `drinks` WRITE;
/*!40000 ALTER TABLE `drinks` DISABLE KEYS */;
INSERT INTO `drinks` VALUES (1,'high ball','highball'),(2,'presbyterian','highball'),(3,'scotch & soda','highball'),(4,'7 & 7','highball'),(5,'whiskey & water','highball'),(6,'rum & coke','highball'),(7,'cuba libre','highball'),(8,'gin & tonic','highball'),(9,'vodka & tonic','highball'),(10,'gin rickey','highball'),(11,'vodka rickey','highball'),(12,'shirley temple (non alcoholic)','collins'),(13,'roy rogers (non alcoholic)','collins'),(14,'boiler maker','beer mug'),(15,'old fashioned','old fashion'),(16,'brandy alexander','stemmed'),(17,'grasshopper','stemmed'),(18,'locust','stemmed'),(19,'toasted almond','stemmed'),(20,'golden dream','stemmed'),(21,'creamsickle','stemmed'),(22,'pink lady','stemmed'),(23,'bloody mary','collins'),(24,'seabreeze','highball'),(25,'baybreeze','highball'),(26,'grey hound','highball'),(27,'salty dog','highball'),(28,'cape cod','highball'),(29,'madras','highball'),(30,'californian','highball'),(31,'screwdriver','collins'),(32,'gold driver','collins'),(33,'melon ball','collins'),(34,'harvey wallbanger','collins'),(35,'freddy fudpucker','collins'),(36,'slow comfortable screw','collins'),(37,'alabama slammer','collins'),(38,'tequila sunrise','collins'),(39,'sex on the beach','collins'),(40,'fuzzy navel','collins'),(41,'hairy navel','collins'),(42,'pierced navel','collins'),(43,'martini','stemmed'),(44,'gibson','stemmed'),(45,'dirty martini','stemmed'),(46,'lemon drop','stemmed'),(47,'cosmopolitan','stemmed'),(48,'manhattan','stemmed'),(49,'dry manhattan','stemmed'),(50,'southern comfort manhattan','stemmed'),(51,'rob roy','stemmed'),(52,'perfect manhattan','stemmed'),(53,'black russian','rocks'),(54,'white russian','rocks'),(55,'brave bull','rocks'),(56,'stinger','rocks'),(57,'godfather','rocks'),(58,'marlon brando','rocks'),(59,'godmother','rocks'),(60,'goddaughter','rocks'),(61,'vodka gimlet','rocks'),(62,'rusty nail','rocks'),(63,'dirty mother','rocks'),(64,'dirty white mother','rocks'),(65,'smith & kearns','rocks'),(66,'smith & wesson','rocks'),(67,'colorado bull dog','rocks'),(68,'mudslide','rocks'),(69,'kamikaze','shooter'),(70,'surfer on acid','shooter'),(71,'b-52','shooter'),(72,'purple haze','shooter'),(73,'orgasm','shooter'),(74,'blow job','shooter'),(75,'scooby snack','shooter'),(76,'whiskey sour','collins'),(77,'long island iced tea','collins'),(78,'adios mf','collins'),(79,'tokyo tea','collins'),(80,'vodka collins','collins'),(81,'tom collins','collins'),(82,'john collins','collins'),(83,'mai tai','hurricane'),(84,'daiquiri','hurricane'),(85,'margarita','margarita'),(86,'blue margarita','margarita'),(87,'pina colada','hurricane'),(88,'kahlua colada','hurricane'),(89,'mimosa','flute'),(90,'pointsettia','flute'),(91,'irish coffee','coffee mug'),(92,'mexican coffee','coffee mug'),(93,'jamaican coffee','coffee mug');
/*!40000 ALTER TABLE `drinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drinks_ingredients`
--

DROP TABLE IF EXISTS `drinks_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drinks_ingredients` (
  `id` int(11) NOT NULL,
  `drink_id` int(2) NOT NULL,
  `ingredient_id` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drinks_ingredients`
--

LOCK TABLES `drinks_ingredients` WRITE;
/*!40000 ALTER TABLE `drinks_ingredients` DISABLE KEYS */;
INSERT INTO `drinks_ingredients` VALUES (1,1,5),(2,1,64),(3,2,5),(4,2,64),(5,2,58),(6,2,72),(7,3,14),(8,3,58),(9,4,5),(10,4,59),(11,5,5),(12,5,68),(13,6,11),(14,6,66),(15,7,11),(16,7,66),(17,7,74),(18,8,3),(19,8,57),(20,9,1),(21,9,57),(22,10,3),(23,10,58),(24,10,74),(25,11,1),(26,11,58),(27,11,74),(28,12,59),(29,12,53),(30,12,69),(31,13,66),(32,13,53),(33,13,69),(34,14,17),(35,14,5),(36,15,82),(37,15,79),(38,15,68),(39,15,69),(40,15,75),(41,15,9),(42,15,68),(43,16,4),(44,16,48),(45,16,83),(46,16,80),(47,17,48),(48,17,49),(49,17,83),(50,18,48),(51,18,49),(52,18,83),(53,18,18),(54,19,23),(55,19,38),(56,19,83),(57,20,32),(58,20,46),(59,20,63),(60,20,83),(61,21,1),(62,21,46),(63,21,63),(64,21,83),(65,22,3),(66,22,53),(67,22,83),(68,23,1),(69,23,77),(70,23,78),(71,23,81),(72,23,84),(73,23,85),(74,23,61),(75,24,1),(76,24,52),(77,24,67),(78,25,1),(79,25,56),(80,25,67),(81,26,1),(82,26,52),(83,27,1),(84,27,52),(85,27,77),(86,28,1),(87,28,67),(88,29,1),(89,29,63),(90,29,67),(91,30,1),(92,30,63),(93,30,52),(94,31,1),(95,31,63),(96,32,13),(97,32,63),(98,33,1),(99,33,63),(100,33,39),(101,34,1),(102,34,63),(103,34,32),(104,35,13),(105,35,63),(106,35,32),(107,36,41),(108,36,42),(109,36,63),(110,37,41),(111,37,42),(112,37,23),(113,37,63),(114,38,13),(115,38,63),(116,38,53),(117,38,69),(118,39,1),(119,39,51),(120,39,63),(121,39,67),(122,40,51),(123,40,63),(124,41,1),(125,41,51),(126,41,63),(127,42,13),(128,42,51),(129,42,63),(130,43,20),(131,43,1),(132,43,70),(133,44,20),(134,44,1),(135,44,73),(136,45,1),(137,45,86),(138,45,70),(139,46,2),(140,46,60),(141,46,46),(142,46,72),(143,46,59),(144,47,1),(145,47,46),(146,47,54),(147,47,67),(148,47,74),(149,48,21),(150,48,5),(151,48,69),(152,49,20),(153,49,5),(154,49,72),(155,50,20),(156,50,42),(157,50,69),(158,51,21),(159,51,14),(160,51,69),(161,52,20),(162,52,21),(163,52,5),(164,52,72),(165,53,1),(166,53,38),(167,54,1),(168,54,38),(169,54,83),(170,55,13),(171,55,38),(172,56,4),(173,56,49),(174,57,14),(175,57,23),(176,58,14),(177,58,23),(178,58,83),(179,59,1),(180,59,23),(181,60,1),(182,60,23),(183,60,83),(184,61,1),(185,61,54),(186,61,74),(187,62,14),(188,62,30),(189,63,4),(190,63,38),(191,64,4),(192,64,38),(193,64,83),(194,65,38),(195,65,83),(196,65,58),(197,66,38),(198,66,83),(199,66,66),(200,67,1),(201,67,38),(202,67,83),(203,67,66),(204,68,1),(205,68,38),(206,68,24),(207,69,1),(208,69,46),(209,69,54),(210,70,37),(211,70,11),(212,70,56),(213,71,38),(214,71,24),(215,71,35),(216,72,1),(217,72,28),(218,72,60),(219,73,24),(220,73,23),(221,74,38),(222,74,24),(223,74,87),(224,75,39),(225,75,11),(226,75,83),(227,75,56),(228,76,5),(229,76,60),(230,76,69),(231,77,1),(232,77,3),(233,77,13),(234,77,46),(235,77,11),(236,77,60),(237,77,66),(238,77,72),(239,78,1),(240,78,3),(241,78,13),(242,78,11),(243,78,27),(244,78,60),(245,78,59),(246,78,69),(247,79,1),(248,79,3),(249,79,13),(250,79,11),(251,79,39),(252,79,60),(253,79,59),(254,79,72),(255,80,1),(256,80,60),(257,80,58),(258,80,69),(259,81,3),(260,81,60),(261,81,58),(262,81,69),(263,82,5),(264,82,60),(265,82,58),(266,82,69),(267,83,10),(268,83,50),(269,83,46),(270,83,63),(271,83,56),(272,83,19),(273,83,69),(274,84,11),(275,84,60),(276,85,13),(277,85,46),(278,85,60),(279,85,74),(280,86,13),(281,86,27),(282,86,60),(283,86,74),(284,87,11),(285,87,88),(286,87,56),(287,87,69),(288,88,11),(289,88,38),(290,88,88),(291,88,56),(292,89,22),(293,89,63),(294,90,22),(295,90,67),(296,91,24),(297,91,8),(298,91,89),(299,91,87),(300,92,13),(301,92,38),(302,92,89),(303,92,87),(304,93,11),(305,93,38),(306,93,89),(307,93,87);
/*!40000 ALTER TABLE `drinks_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `ingredient_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient_name` varchar(100) NOT NULL,
  `ingredient_type` varchar(40) NOT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'vodka','liquor'),(2,'lemon vodka','liquor'),(3,'gin','liquor'),(4,'brandy','liquor'),(5,'whiskey','liquor'),(6,'american whiskey','liquor'),(7,'canadian whiskey','liquor'),(8,'irish whiskey','liquor'),(9,'bourbon','liquor'),(10,'rum','liquor'),(11,'light rum','liquor'),(12,'dark rum','liquor'),(13,'tequila','liquor'),(14,'scotch','liquor'),(15,'bourbon','liquor'),(16,'cognac','liquor'),(17,'beer','liquor'),(18,'bacardi 151','liquor'),(19,'myers rum','liquor'),(20,'dry vermouth','liquor'),(21,'sweet vermouth','liquor'),(22,'champagne','liquor'),(23,'amaretto','liqueur'),(24,'baileys','liqueur'),(25,'b&b','liqueur'),(26,'benedictine','liqueur'),(27,'blue curacao','liqueur'),(28,'chambord','liqueur'),(29,'cointreau','liqueur'),(30,'drambuie','liqueur'),(31,'franelico','liqueur'),(32,'galliano','liqueur'),(33,'godiva','liqueur'),(34,'goldschlager','liqueur'),(35,'grand marnier','liqueur'),(36,'gran toores','liqueur'),(37,'jagermeister','liqueur'),(38,'kahlua','liqueur'),(39,'midori','liqueur'),(40,'sambuca','liqueur'),(41,'sloe gin','liqueur'),(42,'southern comfort','liqueur'),(43,'tia maria','liqueur'),(44,'rcreme de almond','liqueur'),(45,'creme de cassis','liqueur'),(46,'triple sec','liqueur'),(47,'ouzo','liqueur'),(48,'creme de cacao','liqueur'),(49,'creme de menthe','liqueur'),(50,'creme de almond','liqueur'),(51,'peach schnapps','liqueur'),(52,'grapefruit juice','mixer'),(53,'grenadine','mixer'),(54,'lime juice','mixer'),(55,'pina colada mix','mixer'),(56,'pineapple juice','mixer'),(57,'tonic water','mixer'),(58,'club soda','mixer'),(59,'7up','mixer'),(60,'sweet & sour','mixer'),(61,'tomato juice','mixer'),(62,'tonic water','mixer'),(63,'orange juice','mixer'),(64,'ginger ale','mixer'),(65,'diet coke','mixer'),(66,'coke','mixer'),(67,'cranberry juice','mixer'),(68,'water','mixer'),(69,'cherries','garnishes'),(70,'olives','garnishes'),(71,'cinnamon sticks','garnishes'),(72,'lemon twist','garnishes'),(73,'onion','garnishes'),(74,'lime','garnishes'),(75,'oranges','garnishes'),(76,'nutbeg','garnishes'),(77,'salt','garnishes'),(78,'pepper','garnishes'),(79,'sugar','garnishes'),(80,'nutmeg','garnishes'),(81,'celery','garnishes'),(82,'bitters','other'),(83,'cream','other'),(84,'worcestershire','other'),(85,'tabasco','other'),(86,'olive juice','other'),(87,'whipped cream','other'),(88,'coconut cream','other'),(89,'coffee','other');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-19 18:33:15
