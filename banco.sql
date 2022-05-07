create table usuarios(
    nome varchar(80),
    email varchar(60),
    idade int
);

insert into usuarios values(
    'Carlos Eduardo',
    'emailteste@gmail.com',
    20
);

insert into usuarios values(
    'João Da Silva',
    'emailteste1@gmail.com',
    42
);

delete from usuarios where nome = 'teste'

update usuarios set idade = 22 where idade = 42;