-- -----------------------------------------------------
-- -----------------------------------------------------
-- DATA FOR TESTING
-- -----------------------------------------------------
-- -----------------------------------------------------


-- -----------------------------------------------------
-- TEST INSERT
-- -----------------------------------------------------
INSERT INTO EMPLOYEE
VALUE ('1400000000001', 'Maikinmaiteaw', 'Waemayeawkoryangdee', 'Repair Man', '0800000011', '1999-11-11', 'Ratchatewi BKK 10400', '2019-11-11', '1'),
	('1400000000002', 'Rodmanraeng', 'Keepaisuakhaokangdaingai', 'Officer', '0800000012', '1999-11-12', 'Pathunwan BKK 10330', '2019-11-12', '2');

SELECT * FROM EMPLOYEE;
SELECT * FROM Work_history;


-- -----------------------------------------------------
-- TEST DELETE
-- -----------------------------------------------------
DELETE FROM `EMPLOYEE` WHERE Ssn = "1400000000002";

SELECT * FROM EMPLOYEE;
SELECT * FROM Work_history;


-- -----------------------------------------------------
-- TEST UPDATE
-- -----------------------------------------------------
UPDATE `EMPLOYEE` 
	SET Position = 'Officer'  
	WHERE Ssn = 1400000000001;

SELECT * FROM EMPLOYEE;
SELECT * FROM Work_history;


-- -----------------------------------------------------
-- TEST QUERY
-- -----------------------------------------------------
SELECT * FROM EMPLOYEE;
SELECT * FROM Work_history;
