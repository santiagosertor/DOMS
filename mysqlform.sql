show databases;

use dom_Santiago;

drop table if exists lenguaje_usuario;
drop table if exists usuarios;
drop table if exists generos;
drop table if exists lenguajes;
drop table if exists ciudades;

create table ciudades (
    id int auto_increment,
    nombre varchar(30),
    primary key(id)
);
create table lenguajes (
    id int auto_increment,
    nombre varchar(30),
    primary key(id)
);
create table generos (
    id int auto_increment,
    nombre varchar(30),
    primary key(id)
);

create table usuarios (
    id int auto_increment,
    nombre varchar(30),
    apellido varchar(30),
    documento varchar(30),
    telefono varchar(30),
    usuario varchar(30),
    contrasena varchar(30),
    id_ciudad int,
    id_genero int,
    primary key(id),
    foreign key (id_ciudad) references ciudades(id),
  foreign key (id_genero) references generos(id)
);

create table lenguaje_usuario (
    id_usuario int,
    id_lenguaje int,
    foreign key (id_usuario) references usuarios(id),
    foreign key (id_lenguaje) references lenguajes(id)
);

insert into ciudades(nombre,id)
values ("1",'Giron'), ("2",'Bucaramanga'), ("3",'Floridablanca'),("4",'Piedecuesta');
insert into lenguajes(nombre) 
values ('HTML'), ('CSS'), ('JavaScript'), ('PHP'), ('Java'), ('C#'), ('SQL'), ('Phyton');
insert into generos(nombre)
values ('Hombre'),('Mujer');
insert into usuarios(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad,id_genero)
values ('Santiago', 'Mutis', 1096700855, 3014759263, 'dom_Santiago', 'contrasena', 3,1);
insert into lenguaje_usuario(id_usuario, id_lenguaje)
values (1, 1), (1, 3), (1, 5);

select * from ciudades;
select * from generos;
select * from lenguajes;
select * from usuarios;
select * from lenguaje_usuario;