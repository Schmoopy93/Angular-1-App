-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.20-log

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `idproduct` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `Energy` varchar(45) NOT NULL,
  `Carbohydrates` varchar(45) NOT NULL,
  `Protein` varchar(45) NOT NULL,
  `TotalFat` varchar(45) NOT NULL,
  `Cholesterol` varchar(45) NOT NULL,
  `DietaryFiber` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `order_idorder` int(11) DEFAULT NULL,
  `EngPrcnt` int(11) NOT NULL,
  `CrbHydrtPrcnt` int(11) NOT NULL,
  `PrtPrcnt` int(11) NOT NULL,
  `TtlFtPrcnt` int(11) NOT NULL,
  `chlstrlPrcnt` int(11) NOT NULL,
  `dietryFbrPrcnt` int(11) NOT NULL,
  `ntrttxt` longtext NOT NULL,
  `ntrtinfo` longtext NOT NULL,
  `path` longtext NOT NULL,
  `type` varchar(45) NOT NULL,
  `Users_idUsers` int(11) NOT NULL,
  PRIMARY KEY (`idproduct`),
  KEY `fk_product_Users_idx` (`Users_idUsers`),
  CONSTRAINT `fk_product_Users` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'apple','22','22','22','22','223','332','22',NULL,22,22,323,232,232,232,'txt','info','blabla','Admin',1),(2,'Apple','52','13.81','0.26','0.17','0','2.40','10',NULL,3,11,1,1,0,6,'Vitamins up to, most dominant are vitamin C 24% and K 53%.','The original story of Adam, Eve, the snake, and the forbidden Tree of the Knowledge of Good and Evil mentions only an unspecified “fruit,” thus opening up centuries of debate over what the hapless First Couple actually ate. Most historians believe the apple originated in the Dzungarian Alps, a mountain range separating Kazakhstan, Kyrgyzstan, and China, where wild apple trees still produce teensy apples the size and shape of the seedy and sour ancestors of the world’s favorite tree fruit.','../../media/images/fruits/apple.png','fruit',1),(3,'Apricot','50','11','1.2','0.4','0','2','15',NULL,3,9,3,1,0,5,'Vitamins up to, most dominant are vitamin A and C 11%/.','Apricots originated on the Russian-Chinese border in about 3000 BC and were imported along with peach seed into Europe through the “Silk Road” that extended camelback trading to the Mideast. The fruit grows as an escaped naturalized plant along modern roadsides in Turkey and Armenia today in abundant numbers. Apricots were known in ancient Greece in 60 BC and later introduced into the Roman Empire. The apricot trees are believed to have arrived in the early American colonies in seed form for growing into fruit trees by the French explorers of the 1700’s in Gulf regions and in the Eastern United States and at California monasteries by Spanish explorers and missionaries.','../../media/images/fruits/apricots.png','fruit',1),(4,'Grapes','69','18','0.72','0.16','0','0.9','17',NULL,4,14,1,1,0,2,'Vitamins up to, most dominant are vitamin C 18% and K 12%.','Grapes are said to be the oldest cultivated fruit. They are juicy, sweet, or sour, and round or semi-oblong fruits that come in seven colors, depending on the variety that is grown. The most popular use of grapes, all over the world, is in making wines . They are actually \'berries\' that have a semi-soild, translucent flesh inside them. They may or may not have any seeds. The botanical name of grapes is vitaceae. They are natives of Western Asia and Central Europe. These regions are known as the motherlands of grapes. From there, grapes have made a long journey to reach all across the globe.','../../media/images/fruits/grapes.png','fruit',1),(5,'Tommato','18','3.9','0.9','0.2','0','1.2','5',NULL,1,3,2,1,0,3,'Vitamins up to 77% , most dominant are vitamin A 28% and C 21.5%','Aztecs and other peoples in Mesoamerica used the fruit in their cooking. They called it \"fat water\". The exact date of domestication is unknown. By 500 BC, it was already being cultivated in southern Mexico and probably other areas. The Pueblo people are thought to have believed that those who witnessed the ingestion of tomato seeds were blessed with powers of divination. The large, lumpy variety of tomato, a mutation from a smoother, smaller fruit, originated in Mesoamerica, and may be the direct ancestor of some modern cultivated tomatoes.','../../media/images/vegetables/tomato.png','vegetable',1),(6,'Broccoli','14','6.66','2.82','0.37','0','2.6','7',NULL,2,5,3,1,0,3,'Vitamins up to 83%, most dominant are vitamin C 24% and K 53%.','Broccoli was certainly an Italian vegetable, as its name suggests, long before it was eaten elsewhere. Its first mention in France is in  sixteenth century, but in eighteen century broccoli was still so unfamiliar in England that Philip Miller\'s Gardener\'s Dictionary (1724 edition)referred to it as a strange plant. During the sixteenth century, Broccoli was grown in Italy and France, but was not grown commercially anywhere else until the early 1900s. The word, broccoli, is derived from the Italian, brocco, meaning arm or branch.','../../media/images/vegetables/broccoli.png','vegetable',1),(7,'Carrot','41','9.58','0.93','0.24','0','2.8','2',NULL,2,7,2,1,0,7,'Vitamins up to, most dominant are vitamin A 51% and K 11%.','The wild ancestors of the carrot are likely to have originated from Persia (regions of which are now Iran and Afghanistan), which remain the centre of diversity of Daucus carota, the wild carrot. A naturally occurring subspecies of the wild carrot, Daucus carota, has been selectively bred over the centuries to reduce bitterness, increase sweetness and minimise the woody core. This procces has produced the familiar garden vegetable that we enjoy today. Europeans called it edible root. Various languages still use the same word for \"carrot\" as they do for \"root\".','../../media/images/vegetables/carrot.png','vegetable',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `path` longtext NOT NULL,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mare','mare223','Marko','Rajic','rajicm@hotmail.com','Admin','../../media/images/user_1.png'),(2,'pera','peric','Pera','Peric','pp@hotmail.com','User','../../media/images/u_logo1.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-10 14:11:15
