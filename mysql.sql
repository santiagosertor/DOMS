#Creacion de usuario
create user 'dom_Santiago'@'localhost' identified by "DOM";
#creando la base de datos de node.js
create database dom_Santiago;
#dandole privilegios
grant all on dom_Santiago.* to dom_Santiago@localhost;