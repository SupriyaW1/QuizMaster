-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: quizmaster
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(45) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Easy'),(2,'Intermediate'),(3,'Difficult');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exams` (
  `exam_id` int NOT NULL AUTO_INCREMENT,
  `attempted_datetime` datetime NOT NULL,
  `marks` int DEFAULT NULL,
  `sid` int DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`exam_id`),
  KEY `sid_fk_idx` (`sid`),
  KEY `subject_id_fk_idx` (`subject_id`),
  KEY `cat_id_fk_idx` (`cat_id`),
  CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sid` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (1,'2024-02-20 17:54:35',0,1,1,1),(2,'2024-02-21 08:37:44',0,1,2,2),(3,'2024-02-21 10:54:42',0,1,1,1),(4,'2024-02-21 11:01:40',0,1,1,3),(5,'2024-02-21 11:07:36',0,1,1,1),(6,'2024-02-21 11:14:10',0,1,1,2),(7,'2024-02-21 12:27:33',0,1,1,1),(8,'2024-02-21 14:42:51',0,1,1,1),(9,'2024-02-21 16:45:20',0,1,1,1),(10,'2024-02-21 17:07:18',0,1,1,1),(11,'2024-02-21 17:34:00',0,1,1,1);
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experts`
--

DROP TABLE IF EXISTS `experts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experts` (
  `expert_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `qualification` varchar(45) NOT NULL,
  `email` varchar(80) DEFAULT NULL,
  `contact` varchar(45) NOT NULL,
  `uid` int DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  PRIMARY KEY (`expert_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`uid`),
  KEY `subject_id_idx` (`subject_id`),
  CONSTRAINT `subject_idfk` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uid_fk` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experts`
--

LOCK TABLES `experts` WRITE;
/*!40000 ALTER TABLE `experts` DISABLE KEYS */;
INSERT INTO `experts` VALUES (1,'Rishita','Rai','MSC','rishi@gmail.com','2376876986',4,NULL),(2,'Neha','joshi','MTech','neha@gmail.com','3727587358',6,NULL),(3,'Adesh','Thorat','Mtech','adeshthorat@gmail.com','8767658787',7,NULL);
/*!40000 ALTER TABLE `experts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `mode` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `expirydate` date DEFAULT NULL,
  `sid` int DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `sid_idx` (`sid`),
  CONSTRAINT `sid_fk` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `qid` int NOT NULL AUTO_INCREMENT,
  `question_text` varchar(255) DEFAULT NULL,
  `option1` varchar(75) DEFAULT NULL,
  `option2` varchar(75) DEFAULT NULL,
  `option3` varchar(75) DEFAULT NULL,
  `option4` varchar(75) DEFAULT NULL,
  `answer` int DEFAULT NULL,
  `explanation` varchar(255) DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`qid`),
  KEY `subject_id_idx` (`subject_id`),
  KEY `cat_id_idx` (`cat_id`),
  CONSTRAINT `cat_id_fk` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subject_id_fk` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'if a=10 What is result of System.out.print(++a);\"','10','11','CTE','9',2,'++a is a pre-increment operator, which means it increments the value of a by 1 before it is used in the expression so a=11',1,1),(3,'Who invented Java Programming?','Guido van Rossum','James Gosling','Dennis Ritchie','Bjarne Stroustrup',2,'Java programming was developed by James Gosling at Sun Microsystems in 1995. James Gosling is well known as the father of Java.',1,1),(4,'Which type of casting is lossy in Java?','Widening typecasting','Narrowing typecasting','Manual typecasting','All of these',2,'In Narrowing typecasting data loss is there.',1,2),(5,'What is the extension of java code files?',' .js',' .txt','.class',' .java',4,'Java files have .java extension.',1,1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'student'),(3,'subscribedStudent'),(4,'expert');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentanswers`
--

DROP TABLE IF EXISTS `studentanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentanswers` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `student_answer` int DEFAULT NULL,
  `exam_id` int DEFAULT NULL,
  `qid` int DEFAULT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `exam_id_idx` (`exam_id`),
  KEY `qid_idx` (`qid`),
  CONSTRAINT `exam_id` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`exam_id`),
  CONSTRAINT `qid` FOREIGN KEY (`qid`) REFERENCES `questions` (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentanswers`
--

LOCK TABLES `studentanswers` WRITE;
/*!40000 ALTER TABLE `studentanswers` DISABLE KEYS */;
INSERT INTO `studentanswers` VALUES (1,2,8,3),(2,3,8,3),(3,0,8,3),(4,0,8,3),(5,0,8,3),(6,1,8,3),(7,1,8,3),(8,1,8,3),(9,0,8,3),(10,0,8,3),(11,4,8,3),(12,0,8,3),(13,0,8,3),(14,1,8,3),(15,4,8,3),(16,1,8,3),(17,1,8,3),(18,1,8,3),(19,2,8,3),(20,1,8,3),(21,2,8,3),(22,4,8,3),(23,1,9,3),(24,1,9,3),(25,0,9,3),(26,0,10,3),(27,1,10,3),(28,1,10,3),(29,3,10,3),(30,0,10,3),(31,1,10,3),(32,3,10,3),(33,0,10,3),(34,0,10,3),(35,0,11,5),(36,1,11,5),(37,1,11,5),(38,0,11,5),(39,0,11,5),(40,1,11,5);
/*!40000 ALTER TABLE `studentanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `bdate` date NOT NULL,
  `education` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `email` varchar(75) NOT NULL,
  `uid` int DEFAULT NULL,
  `subscription` int NOT NULL,
  PRIMARY KEY (`sid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`uid`),
  CONSTRAINT `FKap5kf80of7yo19mvcvf98q0yu` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Pravin','Wagh','2003-06-03','Btech','872387164','pravinwagh@gmail.com',14,0);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `subject_id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(45) NOT NULL,
  `description` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'Java','Questions on core java'),(2,'Mysql','Questions related database'),(3,'Arithmetic aptitude','Questions to check your numeric ability');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(45) NOT NULL,
  `pwd` varchar(55) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uname_UNIQUE` (`uname`),
  KEY `role_id_idx` (`role_id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'rishita','1234',_binary '',4),(5,'admin','admin@123',_binary '',1),(6,'nehajoshi@123','Neha@1234',_binary '',4),(7,'adesh@123','adesh@123',_binary '',4),(14,'Pravin@123','Pravin@123',_binary '',2);
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

-- Dump completed on 2024-02-21 21:18:00
