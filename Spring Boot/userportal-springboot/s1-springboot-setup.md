#SPRING BOOT SETUP, POSTGRES
https://start.spring.io/
springboot 1.5.19
maven
dependencies : web
Group com.domain
Artifact userportal-springboot
packaging jar
java version 1.8

[db]
postgres 11.2
username postgres
password postgres
execute script s1-catalog.sql

[application.properties]
configure

[pom.xml]
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<version>42.2.5</version>
		</dependency>
		
[run]
run as java application
Tomcat started on port(s): 8080 (http)	
