create database if not exists burgers_db;

use burgers_db;

drop table if exists burgers;

create table burgers (
    id int not null AUTO_INCREMENT,
    burger_name varchar(255),
    devoured BOOL DEFAULT false,
   primary key (id)
);

