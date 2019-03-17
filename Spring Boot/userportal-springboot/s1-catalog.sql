--create database testdb using pgAdmin4

--postgre syntax : (user not allowed as table name) 
CREATE TABLE users(
 id serial PRIMARY KEY,
 email VARCHAR (50) UNIQUE NOT NULL,
 first_name VARCHAR (50),
 last_name VARCHAR (50)
);


select * from users;

INSERT INTO users(
	id, email, first_name, last_name)
	VALUES (1, 'e@e.com', 'fn' , 'ln');
	
	INSERT INTO users(
	email, first_name, last_name)
	VALUES ('e1@e1.com', 'fn' , 'ln');
	
	
--NOT REQUIRED
--mysql syntax (allows user as table name)
--create table user (id integer not null auto_increment, 
--email varchar(255), first_name varchar(255), last_name varchar(255), primary key (id))