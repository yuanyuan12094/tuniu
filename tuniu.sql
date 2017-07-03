SET NAMES UTF8;
DROP DATABASE IF EXISTS tuniu;
CREATE DATABASE tuniu CHARSET=UTF8;
USE tuniu;
CREATE TABLE tuniu_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO tuniu_user VALUES(null,'tom','123');
INSERT INTO tuniu_user VALUES(null,'merry','345');
INSERT INTO tuniu_user VALUES(null,'rose','456');
INSERT INTO tuniu_user VALUES(null,'jack','888');
INSERT INTO tuniu_user VALUES(null,'baby','223');